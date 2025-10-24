import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Progress from './Progress'
import QuestionCard from './QuestionCard'

export default function Quiz({ question, index, total, onAnswer, onNext }){
  const [selected, setSelected] = useState(null)
  const [locked, setLocked] = useState(false)

  useEffect(()=>{
    setSelected(null)
    setLocked(false)
  },[question])

  if(!question) return null

  const choose = (i) => {
    if(locked) return
    const isCorrect = i === question.a
    setSelected(i)
    setLocked(true)
    onAnswer(isCorrect)
    // auto proceed after short delay
    setTimeout(()=> onNext(), 900)
  }

  return (
    <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="card rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-slate-300">Question {index + 1} / {total}</div>
        <Progress value={index} max={total} />
      </div>

      <QuestionCard question={question} selected={selected} onChoose={choose} />

      <div className="mt-4 flex items-center justify-between">
        {/* <div className="text-sm text-slate-400">Score: <span className="font-semibold text-white">{/* score shown in header */}</span></div> */}
        // <div className="text-xs text-slate-400">Auto next — instant feedback</div>
      </div>
    </motion.div>
  )
}
