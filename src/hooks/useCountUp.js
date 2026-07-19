import { useState, useEffect, useRef, useCallback } from 'react'

export function useCountUp(target) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  const animate = useCallback(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0

    const update = () => {
      current += step
      if (current < target) {
        setCount(Math.floor(current))
        requestAnimationFrame(update)
      } else {
        setCount(target)
      }
    }
    update()
  }, [target])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate()
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animate])

  return { count, ref }
}
