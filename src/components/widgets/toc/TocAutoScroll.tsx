'use client'

import { useEffect } from 'react'

import { usePageScrollLocationSelector } from '~/providers/root/page-scroll-info-provider'

import { escapeSelector } from './escapeSelector'

export const TocAutoScroll: Component = () => {
  useEffect(() => {
    const hash = escapeSelector(
      decodeURIComponent(window.location.hash.slice(1)),
    )

    if (hash) {
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [])

  const isTop = usePageScrollLocationSelector((y) => y < 10)

  useEffect(() => {
    if (isTop) {
      history.replaceState(history.state, '', `#`)
    }
  }, [isTop])

  return null
}
