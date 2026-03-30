'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useQuiz } from '@/hooks/useQuiz'
import { cn } from '@/lib/cn'

export default function QuizSectie() {
  const { vraagIndex, vraag, totaal, beantwoord, gekozenIndex, antwoord, volgende } = useQuiz()

  const isLastVraag = vraagIndex === totaal - 1

  return (
    <section className="mt-2">
      <h2 className="text-[1rem] font-bold mb-3.5 text-[#1c2340]">🎯 Test je kennis</h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={vraagIndex}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="bg-white rounded-[14px] shadow-card border border-[rgba(31,41,77,0.09)] p-6"
        >
          {/* Vraag */}
          <p className="text-[0.95rem] font-semibold mb-4 text-[#1c2340]">
            Vraag {vraagIndex + 1} van {totaal}: {vraag.vraag}
          </p>

          {/* Opties */}
          <div className="flex flex-col gap-2">
            {vraag.opties.map((optie, index) => {
              const isGekozen = gekozenIndex === index
              const isCorrect = index === vraag.correct
              const showCorrect = beantwoord && isCorrect
              const showWrong = beantwoord && isGekozen && !isCorrect

              return (
                <button
                  key={index}
                  onClick={() => antwoord(index)}
                  disabled={beantwoord}
                  className={cn(
                    'px-4 py-[11px] rounded-[10px] border-[1.5px] text-[0.875rem] text-left cursor-pointer',
                    'transition-all duration-150 font-medium font-["Plus_Jakarta_Sans",sans-serif]',
                    'disabled:cursor-not-allowed',
                    showCorrect && 'border-[#1a7a45] bg-[rgba(31,120,70,0.08)] text-[#1a5c38] font-semibold',
                    showWrong && 'border-[#c0392b] bg-[rgba(200,50,50,0.07)] text-[#8b1a1a] font-semibold',
                    !showCorrect && !showWrong && [
                      'border-[rgba(31,41,77,0.09)] bg-white text-[#1c2340]',
                      !beantwoord && 'hover:border-[#d4af37] hover:bg-[rgba(212,175,55,0.10)]',
                    ],
                  )}
                >
                  {optie}
                </button>
              )
            })}
          </div>

          {/* Feedback */}
          <div className="min-h-[22px] mt-3">
            {beantwoord && gekozenIndex !== null && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  'text-[0.875rem] font-semibold',
                  gekozenIndex === vraag.correct ? 'text-[#1a5c38]' : 'text-[#c0392b]',
                )}
              >
                {gekozenIndex === vraag.correct
                  ? '✓ Goed antwoord!'
                  : '✗ Helaas, niet correct. Zie het groene antwoord.'}
              </motion.p>
            )}
          </div>

          {/* Volgende knop */}
          <AnimatePresence>
            {beantwoord && (
              <motion.button
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onClick={volgende}
                className="mt-3.5 px-5 py-3 bg-[#1f294d] text-white border-none rounded-[10px] text-[0.875rem] font-semibold cursor-pointer transition-all duration-200 hover:bg-[#172540] hover:-translate-y-px hover:shadow-card font-['Plus_Jakarta_Sans',sans-serif]"
              >
                {isLastVraag ? 'Quiz opnieuw starten →' : 'Volgende →'}
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
