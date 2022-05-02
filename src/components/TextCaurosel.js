import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const TextCaurosel = ({ longText }) => {
  let singleText = longText.split(",")
  const lastIndex = singleText.length - 1
  var currIndex = 0
  const [single, setSingle] = useState("...")

  function updateText() {
    if (currIndex <= lastIndex) {
      setSingle(singleText[currIndex])
      currIndex = currIndex + 1
    } else {
      currIndex = 0
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateText()
    }, 4000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="sp-subtitle">
      <div className="carousel-container">
        <AnimatePresence>
          <motion.p
            key={single}
            initial={{ x: -200, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            exit={{ x: "100vw", scale: 0.5 }}
            transition={{ type: "tween" }}
          >
            {single}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}
export default TextCaurosel
