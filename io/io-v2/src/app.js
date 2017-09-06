class App {
  constructor () {
    this.socialButton = new SocialButton()
    this.register = new Register()
    this.particlesToggler = new toggleParticles()
  }

  render () {
    this.socialButton.render()
    this.register.render()
  }
}
