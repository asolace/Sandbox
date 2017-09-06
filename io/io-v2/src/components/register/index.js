class Register {
  constructor () {
    this.interested = document.getElementById('interested')
    this.interested.addEventListener('click', this.checkClose.bind(this))
  }

  checkClose () {
    event.preventDefault()
    const clickedEle = event.target.id
    console.log(clickedEle)
    switch (clickedEle) {
      case 'register-button':
        document.getElementById('register-modal').style.display = 'block'
        break
      case 'close':
      case 'register-modal':
        document.getElementById('register-modal').style.display = 'none'
        break
      case 'submit':
      case 'icon':
        const newLead = {
          email: document.getElementById('email').value,
          interests: [document.getElementById('courses').value]
        }
        Lead.create(newLead)
          .then(res => console.log(res))
          .then(this.animateSubmitBtn)
        break
      default:
    }
  }

  animateSubmitBtn () {
    // Only Jquery works...
    let loadingBar = $(".load")
    let bar = $("button span")
    let button = $(".register-submit-btn")

    button.on("click", () => {
     loadingBar.addClass("loading")
     setTimeout(() => {
        loadingBar.removeClass("loading")
        button.addClass("complete")
     },500)
    })
  }

  modal () {
    return `
      <div id="register-modal" class="modal">
        <div class="modal-content">
          <span name="close" id="close" class="close">&times</span>

          <div class="modal-form">
            <form>
              <fieldset>
              <legend><span class="number">></span>Some Title</legend>

              <input type="text" id="email" name="email" placeholder="your-email@gmail.com">

              <select id="courses" name="country">
                <option value="js">ES7 </option>
                <option value="react">React</option>
                <option value="redux">Redux</option>
              </select>

              <button
                class="register-submit-btn"
                name="submit"
                id="submit"
                type="submit"
                >
                <strong id="submit" >Submit
                  <i id="icon" class="fa fa-paper-plane" aria-hidden="true"></i>
                </strong>
                <span class="bar" id>
                <span class="load">
                </span><span>
              </button>
            </fieldset>
          </form>

        </div>
      </div>
    `
  }

  btnInterested () {
    return `
    <div class="register-button-container">
      <span class="mas">Join Us</span>
      <button
        class="register-btn"
        name="register"
        id="register-button"
        >Join Us</button>
    <div>
    `
  }

  render () {
    this.interested.innerHTML = `${this.btnInterested()} ${this.modal()}`
  }
}
