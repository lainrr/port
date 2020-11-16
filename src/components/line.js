import React from "react"
import Sketch from "react-p5"

const Line = () => {
  const barWidth = 20
  let lastBar = -1

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(800, 5).parent(canvasParentRef)
    p5.colorMode(p5.HSB)
    p5.noStroke()
    p5.background(0)
  }

  const draw = p5 => {
    let whichBar = p5.mouseX / barWidth
    if (whichBar !== lastBar) {
      let barX = whichBar * barWidth
      p5.fill(232.26, 29.52, p5.mouseY / 3)
      p5.rect(barX, 0, barWidth, p5.height)
      lastBar = whichBar
    }
  }

  return <Sketch setup={setup} draw={draw} />
}

export default Line
