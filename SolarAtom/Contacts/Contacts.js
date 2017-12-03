import React, { Component } from 'react'
import axios from 'axios'

import SolarOrbits from './SolarOrbits'

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    sent: false
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = event => {
    event.preventDefault()
    axios.post('/api/contact_me', this.state)
    this.setState({
      name: '',
      email: '',
      message: '',
      sent: true
    })
    setTimeout(() => {
      this.setState({sent: false})
    }, 3000)
  }

  render() {
    return (
      <div className="container">
        <div className='main-title'>
          <span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span><span> M</span><span>e</span>

          <div className="form-container">
            <form className="contact-form" onSubmit={this.onSubmit}>
              <fieldset>
                <legend>Contact Form</legend>

                <div className="contact-control">
                  <input
                    className="contact-input contact-text"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    placeholder="What should I call you?"
                    required
                  />
                  <label className="contact-label" >Name</label>
                </div>

                <div className="contact-control">
                  <input
                    className="contact-input contact-email"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    placeholder="Where can I reach you?"
                    required
                  />
                  <label className="contact-label" >Email</label>
                </div>

                <div className="contact-control">
                  <textarea
                    className="contact-textarea"
                    name="message"
                    value={this.state.message}
                    onChange={this.onChange}
                    placeholder="What's on your mind?"
                    required
                  />
                  <label className="contact-label contact-message" >Message</label>
                </div>

                <div className="contact-btn-wrapper">
                  <button
                    className={ this.state.sent ? "contact-btn contact-btn-send" : "contact-btn "}
                    type="submit"
                    style={ !this.state.sent ?
                      {
                        backgroundColor: '#cf4a43',
                        border: '1px solid #cb5a5e'
                      } : {
                        backgroundColor: '#337ab7',
                        border: '1px solid #2e6da4'
                      }
                    }
                    >
                    <span className="contact-btn-text">Send</span>
                    <span className="contact-btn-send">Sent!</span>
                    <span className="contact-btn-icon">
                      <i className="fa fa-paper-plane"></i>
                    </span>
                  </button>
                </div>

              </fieldset>
            </form>
          </div>
        </div>

        <div className="side-container orbital-body">
          <div className="system-container">
            <SolarOrbits />
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
