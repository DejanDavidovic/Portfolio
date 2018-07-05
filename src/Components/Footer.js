import React, {Component} from 'react'


class Navbar extends Component{
  render(){
    return(
      <footer className='footer'>
        <div className='container'>
          <div className='git-hub'>
            GitHub:
            <a href='https://github.com/DejanDavidovic' target='_blank'  rel='noopener noreferrer'>
              <i className='fa fa-github-square' aria-hidden='true'></i>
            </a>
          </div>
          <h5>&copy; <span className='text'>Website  {new Date().getFullYear()} </span></h5>
        </div>

      </footer>
    )
  }    
}

export default Navbar;