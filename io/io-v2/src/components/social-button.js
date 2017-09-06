class SocialButton {
  constructor () {
    this.social = document.getElementById('social')
  }

  template () {
    return `
      <div class="wrapper">
        <i class="fa fa-5x fa-facebook-square"></i>
        <i class="fa fa-5x fa-twitter-square"></i>
        <i class="fa fa-5x fa-instagram"></i>
        <i class="fa fa-5x fa-snapchat-square"></i>
      </div>
    `
  }
  
  render () {
    this.social.innerHTML = this.template()
  }
}
