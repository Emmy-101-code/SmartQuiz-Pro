import React from 'react'
import { motion } from 'framer-motion'

export default function QuestionCard({ question, selected, onChoose }){
  return (
    <div>
      <div className="mb-4 text-lg font-medium text-slate-100">{question.q}</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {question.options.map((opt, i) => {
          const isSelected = selected === i
          const isCorrect = question.a === i
          const base = 'px-4 py-3 rounded-lg text-left cursor-pointer transition'
          let cls = base + ' bg-white/3 text-slate-100'
          if(selected !== null){
            if(isSelected && isCorrect) cls = base + ' bg-green-600 text-white'
            else if(isSelected && !isCorrect) cls = base + ' bg-red-600 text-white line-through'
            else if(!isSelected && isCorrect) cls = base + ' bg-green-500/30 text-white'
            else cls = base + ' bg-white/3 text-slate-200/80'
          }
          return (
            <motion.div whileTap={{scale:0.98}} key={i} onClick={()=>onChoose(i)} className={cls}>
              {opt}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
