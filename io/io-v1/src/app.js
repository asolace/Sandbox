class App {
  constructor() {
    this.root = document.getElementById('root')
    this.socialButton = new SocialButton()

  }

  render() {
    this.root.innerHTML = `
      <div class='app'>
        <canvas class='particles'></canvas>

        <div class='io-box-conatiner'>
          <div class='stage'>
            <div class='io-box-header spinner'>
              [io]
            </div>
          </div>
        </div>

        <div id="register">
          <div class="register-button-container">
            <button
              id="register-button"
              class="btn apply-now-button"
              >Apply Now</button>
          <div>

          <div id="register-modal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
              <p>Some text in the Modal..</p>
            </div>
          </div>
        </div>

        ${this.socialButton.render()}
      </div>
    `
  }
}
