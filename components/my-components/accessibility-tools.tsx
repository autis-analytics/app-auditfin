'use client'

import { useEffect, useState } from 'react'
import { Contrast } from 'lucide-react'

export default function AccessibilityTools() {
  const [contrast, setContrast] = useState(false)

  useEffect(() => {
    try {
      const enabled = localStorage.getItem('auditfin-contrast') === 'true'
      setContrast(enabled)
      document.documentElement.classList.toggle('high-contrast', enabled)
    } catch {
      /* Storage may be disabled by the visitor. */
    }
  }, [])

  function toggleContrast() {
    const enabled = !contrast
    setContrast(enabled)
    document.documentElement.classList.toggle('high-contrast', enabled)
    try {
      localStorage.setItem('auditfin-contrast', String(enabled))
    } catch {
      /* Optional preference. */
    }
  }

  return (
    <div className='accessibility-tools'>
      <a href='#conteudo'>Ir para o conteúdo</a>
      <button
        type='button'
        onClick={toggleContrast}
        aria-pressed={contrast}
        title='Alternar alto contraste'
      >
        <Contrast size={14} aria-hidden='true' /> Alto contraste
      </button>
    </div>
  )
}
