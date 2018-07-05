import React, {Component} from 'react'


class Home extends Component{
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <div className='container container-fluid'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <img className='avatar-image' src='https://cdn2.iconfinder.com/data/icons/avatars-vol-1-glyph/64/glyph-avatar-black-man-beard-glasses-512.png' alt='avatar' />
              < hr />
              <h1>Skills:</h1>
              <p>HTML/CSS || JavaScript || Python</p>
              <hr />
              <h1>Technology:</h1>
              <p>CSS Grid layout</p>
              <p>Bootstrap</p>
              <p>WordPress</p>
              <hr className='dotted' />
              <p>jQuery</p>
              <p>Django</p>
              <p>React</p>
              <hr className='dotted' />
              <p>GIT</p>
              <p>Microsoft Visual Studio Code</p>
              <p>Pycharm</p>
            </div>
          </div>
        </div>
      </div> 
      )
  }    
}

export default Home;