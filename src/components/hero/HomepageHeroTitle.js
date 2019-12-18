import React, { useState, useEffect, useRef } from 'react'

export function debounce(func, wait = 20, immediate = false) {
  let timeout
  return function() {
    const context = this
    const args = arguments
    const later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

const HeroTitle = () => {
  const [boxBackground, setboxBackground] = useState(false)
  const navRef = useRef()
  navRef.current = boxBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 120
      if (navRef.current !== show) {
        setboxBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const style = {
    opacity: boxBackground ? 0 : 1,
    transition: '.5s ease',
  }
  return (
    <div style={style}>
      <span>Travel Blog</span>
    </div>
  )
}

export default HeroTitle
