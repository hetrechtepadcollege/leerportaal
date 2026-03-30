'use client'

import { useState, useCallback } from 'react'
import { quizVragen } from '@/data/quiz'
import { trackEvent } from '@/lib/analytics'

export type QuizAnswerState = 'idle' | 'correct' | 'wrong'

export interface UseQuizReturn {
  vraagIndex: number
  vraag: (typeof quizVragen)[number]
  totaal: number
  beantwoord: boolean
  gekozenIndex: number | null
  answerState: QuizAnswerState
  antwoord: (index: number) => void
  volgende: () => void
}

export function useQuiz(): UseQuizReturn {
  const [vraagIndex, setVraagIndex] = useState(0)
  const [beantwoord, setBeantwoord] = useState(false)
  const [gekozenIndex, setGekozenIndex] = useState<number | null>(null)

  const vraag = quizVragen[vraagIndex]
  const totaal = quizVragen.length

  const answerState: QuizAnswerState =
    gekozenIndex === null
      ? 'idle'
      : gekozenIndex === vraag.correct
        ? 'correct'
        : 'wrong'

  const antwoord = useCallback(
    (index: number) => {
      if (beantwoord) return
      setBeantwoord(true)
      setGekozenIndex(index)

      const isCorrect = index === vraag.correct
      const nr = vraagIndex + 1
      trackEvent(`vijf-gebeden/v${nr}-${isCorrect ? 'goed' : 'fout'}`)
    },
    [beantwoord, vraag.correct, vraagIndex],
  )

  const volgende = useCallback(() => {
    setBeantwoord(false)
    setGekozenIndex(null)
    setVraagIndex((prev) => (prev + 1) % totaal)
  }, [totaal])

  return { vraagIndex, vraag, totaal, beantwoord, gekozenIndex, answerState, antwoord, volgende }
}
