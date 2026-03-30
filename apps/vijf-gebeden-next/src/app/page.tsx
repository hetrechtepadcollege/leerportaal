'use client'

import { useState } from 'react'
import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/AppFooter'
import GebedSelector from '@/components/gebeden/GebedSelector'
import GebedDetail from '@/components/gebeden/GebedDetail'
import QuizSectie from '@/components/quiz/QuizSectie'
import WeetjesSectie from '@/components/weetjes/WeetjesSectie'
import { gebeden } from '@/data/gebeden'
import { trackEvent } from '@/lib/analytics'

export default function VijfGebeden() {
  const [actieveIndex, setActieveIndex] = useState(0)

  function handleSelectGebed(index: number) {
    setActieveIndex(index)
    trackEvent(`vijf-gebeden/gebed/${gebeden[index].id}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />

      <main className="flex-1 px-5 py-5 max-w-[900px] mx-auto w-full">
        <GebedSelector
          gebeden={gebeden}
          actieveIndex={actieveIndex}
          onSelect={handleSelectGebed}
        />

        <GebedDetail gebed={gebeden[actieveIndex]} />

        <QuizSectie />

        <WeetjesSectie />
      </main>

      <AppFooter />
    </div>
  )
}
