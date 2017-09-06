class toggleParticles {
  constructor () {
    this.toggleBtn = document.getElementById('toggles-particles-canvas')
    this.app = document.getElementsByClassName('app')

    this.toggleBtn.addEventListener('click', this.toggleParticles.bind(this))

    this.canvasState = true
  }

  toggleParticles () {
    if (this.canvasState) {
      // Can't declared this.docID = document.getElementById('particles') in constructor
      document.getElementById('particles')
        .parentNode.removeChild(document.getElementById('particles'))

      this.toggleBtn.innerHTML = '<p>Enable Stars</p>'

      this.canvasState = false
    } else {
      let canvas = document.createElement('canvas')

      canvas.id = 'particles'
      this.app[0].appendChild(canvas)
      canvasDots()

      this.toggleBtn.innerHTML = '<p>Disable Stars</p>'

      this.canvasState = true
    }
  }
}
