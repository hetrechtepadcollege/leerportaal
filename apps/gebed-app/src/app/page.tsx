'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/AppFooter'
import ModuleNav from '@/components/layout/ModuleNav'
import ModulePlaceholder from '@/components/layout/ModulePlaceholder'

import GebedSelector from '@/components/gebeden/GebedSelector'
import GebedDetail from '@/components/gebeden/GebedDetail'
import QuizSectie from '@/components/quiz/QuizSectie'
import WeetjesSectie from '@/components/weetjes/WeetjesSectie'
import FiqhModule from '@/components/fiqh/FiqhModule'
import SituatiesModule from '@/components/situaties/SituatiesModule'
import DimensieModule from '@/components/dimensie/DimensieModule'

import { gebeden } from '@/data/gebeden'
import { modules } from '@/data/modules'
import { trackEvent } from '@/lib/analytics'
import type { ModuleId } from '@/types'

export default function HetGebed() {
  const [actieveModule, setActieveModule] = useState<ModuleId>('gebeden')
  const [actieveGebedIndex, setActieveGebedIndex] = useState(0)

  function handleSelectModule(id: ModuleId) {
    setActieveModule(id)
    trackEvent(`het-gebed/module/${id}`)
  }

  function handleSelectGebed(index: number) {
    setActieveGebedIndex(index)
    trackEvent(`het-gebed/gebed/${gebeden[index].id}`)
  }

  const actieveModuleData = modules.find((m) => m.id === actieveModule)!

  function renderModule() {
    switch (actieveModule) {
      case 'gebeden':
        return (
          <>
            <GebedSelector
              gebeden={gebeden}
              actieveIndex={actieveGebedIndex}
              onSelect={handleSelectGebed}
            />
            <GebedDetail gebed={gebeden[actieveGebedIndex]} />
            <QuizSectie />
            <WeetjesSectie />
          </>
        )
      case 'fiqh':
        return <FiqhModule />
      case 'situaties':
        return <SituatiesModule />
      case 'dimensie':
        return <DimensieModule />
      default:
        return <ModulePlaceholder module={actieveModuleData} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <ModuleNav actief={actieveModule} onSelect={handleSelectModule} />

      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={actieveModule}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="max-w-[900px] mx-auto px-5 py-5 w-full"
          >
            {renderModule()}
          </motion.div>
        </AnimatePresence>
      </main>

      <AppFooter />
    </div>
  )
}
