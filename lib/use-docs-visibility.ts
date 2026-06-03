"use client"

import * as React from 'react'

type Config = { showDocuments?: boolean }

export function useDocsVisibility() {
  const [visible, setVisible] = React.useState<boolean>(true)
  React.useEffect(() => {
    let mounted = true
    fetch('/config.json')
      .then((r) => r.ok ? r.json() : ({} as Config))
      .then((cfg: Config) => {
        if (!mounted) return
        if (typeof cfg.showDocuments === 'boolean') setVisible(cfg.showDocuments)
      })
      .catch(() => {})
    return () => { mounted = false }
  }, [])
  return visible
}
