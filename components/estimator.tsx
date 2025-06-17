'use client'

import { useState } from 'react'

export default function Estimator() {
  const [weeks, setWeeks] = useState(4)
  const baseRate = 1500 // USD per week
  const estimate = weeks * baseRate

  return (
    <div className="max-w-lg mx-auto mb-16 border border-border rounded-xl p-6 text-center bg-muted/40 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold mb-4">Estimate Timeline &amp; Budget</h2>
      <div className="space-y-4">
        <label className="block text-sm font-medium">Estimated Duration: {weeks} week{weeks > 1 ? 's' : ''}</label>
        <input
          type="range"
          min={1}
          max={16}
          value={weeks}
          onChange={(e) => setWeeks(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-lg">
          Approx. Cost: <span className="font-bold text-[color:var(--purple-primary)]">${estimate.toLocaleString()}</span>
        </p>
      </div>
    </div>
  )
}
