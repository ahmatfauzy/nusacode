"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

interface ScrollToTopButtonProps {
  isChatOpen?: boolean
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Dynamic positioning - always to the left of chat button
  const getPositionClasses = () => {
    // Always position to the left of the chat button with proper spacing
    return "bottom-6 right-24"
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed w-14 h-14 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-45 border border-gray-600 ${getPositionClasses()}`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  )
}

export default ScrollToTopButton