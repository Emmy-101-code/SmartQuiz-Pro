import React from 'react'
import { motion } from 'framer-motion'

export default function Start({ onStart, total }){
  return (
    <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} exit={{opacity:0}} className="card rounded-2xl p-8 shadow-xl">
      <h1 className="text-3xl font-extrabold text-center mb-2">SmartQuiz Pro</h1>
      <p className="text-center text-slate-300 mb-6">Test your tech knowledge — quick, fun, and professional.</p>
      <div className="flex items-center justify-center gap-4">
        <button onClick={onStart} className="btn-primary px-6 py-3 rounded-xl font-semibold shadow-lg">Start Quiz</button>
      </div>
      <p className="text-center text-xs text-slate-400 mt-4">{total} available questions</p>
    </motion.div>
  )
}
