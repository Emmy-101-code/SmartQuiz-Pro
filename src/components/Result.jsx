import React from 'react'
import { motion } from 'framer-motion'

export default function Result({ score, total, onRetry }){
  const pct = Math.round((score / Math.max(1,total)) * 100)
  return (
    <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="card rounded-2xl p-6 shadow-xl text-center">
      <h2 className="text-2xl font-bold mb-2">Quiz Complete</h2>
      <p className="text-slate-300 mb-4">You scored</p>
      <div className="text-5xl font-extrabold mb-3">{score} / {total}</div>
      <div className="text-sm text-slate-300 mb-6">{pct}%</div>
      <div className="flex items-center justify-center gap-4">
        <button onClick={onRetry} className="px-4 py-2 rounded-xl btn-primary">Try Again</button>
      </div>
    </motion.div>
  )
}
