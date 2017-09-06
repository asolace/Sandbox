let canvas = document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// c.fillStyle = '#0190FE'
// c.fillRect(10, 10, 10, 10)
// c.fillStyle = '#83FE7A'
// c.fillRect(20, 20, 20, 20)
// c.fillStyle = '#907AFE'
// c.fillRect(40, 40, 40, 40)
// c.fillStyle = '#FEDF7A'
// c.fillRect(80, 80, 80, 80)
// c.fillStyle = '#FE7A7A'
// c.fillRect(160, 160, 160, 160)
// c.fillStyle = '#00A48E'
// c.fillRect(320, 320, 320, 320)
//
// // Line
// c.beginPath()
// c.moveTo(600, 300)
// c.lineTo(600, 100)
// c.lineTo(700, 300)
// c.strokeStyle = '#fa34a3'
// c.stroke()
//
// // Arc / Circle
// for (var i = 0; i < 3; i++) {
//   let x = Math.random() * window.innerWidth
//   let y = Math.random() * window.innerHeight
//   c.beginPath()
//   c.arc(x, y, 40, 0, Math.PI*2, false)
//   c.strokeStyle = getRandomColor()
//   c.stroke()
// }
let x = 200
let dx = 11
let animate = () => {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight)
  c.beginPath()
  c.arc(x + 1, 200, 40, 0, Math.PI*2, false)
  c.strokeStyle = getRandomColor()
  c.stroke()

  x += dx
  if (x >= innerWidth || x <= 0) dx = -dx
}

animate()
