import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Start from './components/Start'
import Quiz from './components/Quiz'
import Result from './components/Result'

export default function App(){
  const [questions, setQuestions] = useState([])
  const [shuffled, setShuffled] = useState([])
  const [status, setStatus] = useState('start') // start | quiz | result
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(()=>{
    fetch('/questions.json')
      .then(r=>r.json())
      .then(data=> setQuestions(data))
      .catch(()=> setQuestions([]))
  },[])

  const startQuiz = () => {
    const copy = [...questions]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    setShuffled(copy.slice(0,20))
    setIndex(0)
    setScore(0)
    setStatus('quiz')
  }

  const handleAnswer = (isCorrect) => {
    if(isCorrect) setScore(s=>s+1)
  }

  const next = () => {
    if(index + 1 >= shuffled.length){
      setStatus('result')
    } else {
      setIndex(i=>i+1)
    }
  }

  const restart = () => {
    setStatus('start')
    setIndex(0)
    setScore(0)
    setShuffled([])
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{background: 'linear-gradient(60deg,#0f172a,#071033 40%,#0b0226 100%)'}}>
      <motion.div className="w-full max-w-3xl p-6" initial={{opacity:0, y:8}} animate={{opacity:1, y:0}}>
        {status === 'start' && <Start onStart={startQuiz} total={questions.length} />}
        {status === 'quiz' && <Quiz question={shuffled[index]} index={index} total={shuffled.length} onAnswer={handleAnswer} onNext={next} />}
        {status === 'result' && <Result score={score} total={shuffled.length} onRetry={restart} />}
      </motion.div>
      <div className="fixed bottom-4 right-4 text-xs text-slate-300">© 2025 Okunola Emmanuel Oladeji. All rights reserved.</div>
    </div>
  )
}
