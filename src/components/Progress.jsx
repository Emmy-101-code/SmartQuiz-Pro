import React from 'react'

export default function Progress({ value, max }){
  const pct = Math.round(((value) / Math.max(1, max)) * 100)
  return (
    <div className="w-48">
      <div className="progress-track">
        <div className="progress-fill" style={{width: pct + '%'}}></div>
      </div>
    </div>
  )
}
