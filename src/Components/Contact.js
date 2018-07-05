import React, {Component} from 'react'


class Contact extends Component{
  render(){
    return(
      <div className='contact'>
        <div className='container container-fluid'>
          <div className='row'>
            <div className='col-lg-4 col-md-12 col-md-12'>
              <div className='card'>
                <img className='card-img-top' src='https://cdn2.iconfinder.com/data/icons/avatars-vol-1-glyph/64/glyph-avatar-black-man-beard-glasses-512.png' alt='' />
                <p>Dejan Davidovic born 12.08.1989 in Novi Sad, Serbia</p>
              </div>
            </div>
            <div className='col-lg-8 col-md-12 col-md-12'>
              <div className='card'>
                <h1>Contact me</h1>
                <div className='contact-me'>
                  <h6>Address: Jovana Bijelica 22 Novi Sad</h6>
                  <h6>Phone number: <i className='fa fa-phone' aria-hidden='true'></i>064/319-14-89</h6>
                  <h6>Skype: <i className='fa fa-skype' aria-hidden='true'></i>Dejan Davidovic</h6>
                  <h6>Email: <i className='fa fa-envelope' aria-hidden='true'></i>ddavidovic1208@gmail.com</h6>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>  
    )
  }    
}

export default Contact;