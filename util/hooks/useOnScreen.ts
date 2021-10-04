import { useState, useEffect } from 'react';

export default function useOnScreen(ref: any) {

  let observer: any = null

  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )

    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}