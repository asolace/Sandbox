class Register {
  constructor() {
    this.modal = document.getElementById('register-modal')
    this.btn = document.getElementById("register-button")
    this.span = document.getElementsByClassName("close")[0]

    this.btn.onclick = () => this.modal.style.display = "block"
    this.span.onclick = () => this.modal.style.display = "none"

    window.onclick = event => {
      if (event.target == this.modal) this.modal.style.display = "none"
    }

  }
}
