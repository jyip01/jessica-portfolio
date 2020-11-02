import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import PageContext from '../../contexts/page-context'

class App extends Component {
  static contextType = PageContext

  state = {
    pageChange: false,
  }

  aboutClicked=()=>{
    this.setState({
      pageChange:true
    })
    this.context.setCurrentPage('about')
  }
  
  projectsClicked=()=>{
    this.setState({
      pageChange:true
    })
    this.context.setCurrentPage('projects')
  }

  contactClicked=()=>{
    this.setState({
      pageChange:true
    })
    this.context.setCurrentPage('contact')
  }
  
  renderNav=()=>{
    if(this.context.currentPage==='about'){
      return (
        <ul className="nav-items">
          <li className="js-jessicaNavBar"><Link onClick={this.aboutClicked} to='/' className="js-jessica active">JESSICA YIP</Link></li>
          <li className="js-projectNavBar"><Link onClick={this.projectsClicked} to='/projects' className="js-project">PROJECTS</Link></li>
          <li className="js-contactNavBar"><Link onClick={this.contactClicked} to='/contact' className="js-contact">CONTACT</Link></li>
        </ul>
      )
    } else if(this.context.currentPage==='projects'){
      return (
        <ul className="nav-items">
          <li className="js-jessicaNavBar"><Link onClick={this.aboutClicked} to='/' className="js-jessica">JESSICA YIP</Link></li>
          <li className="js-projectNavBar"><Link onClick={this.projectsClicked} to='/projects' className="js-project active">PROJECTS</Link></li>
          <li className="js-contactNavBar"><Link onClick={this.contactClicked} to='/contact' className="js-contact">CONTACT</Link></li>
        </ul>
      )
    } else{
      return (
        <ul className="nav-items">
          <li className="js-jessicaNavBar"><Link onClick={this.aboutClicked} to='/' className="js-jessica">JESSICA YIP</Link></li>
          <li className="js-projectNavBar"><Link onClick={this.projectsClicked} to='/projects' className="js-project">PROJECTS</Link></li>
          <li className="js-contactNavBar"><Link onClick={this.contactClicked} to='/contact' className="js-contact active">CONTACT</Link></li>
        </ul>
      )
    }
  }

  render(){
    return (
      <>
      <nav className="nav-bar">
          {this.renderNav()}
      </nav>
      <main className='App'>
        <Switch>
          <Route exact path={'/'} render={()=><AboutMe onClick={this.contactClicked}/>} />
          <Route exact path={'/projects'} component={Projects}/>
          <Route exact path={'/contact'} component={Contact}/>
        </Switch>
      </main>
      <footer>
         <ul className = "social-icons">
             <li><a href="http://linkedin.com/in/jessicayip13" target="_blank" rel="noopener noreferrer" aria-label="linkedin link"><i className="fab fa-linkedin fa-2x"></i></a></li>
             <li><a href="mailto:jessica.f.yip@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="email link"><i className="fas fa-envelope-square fa-2x"></i></a></li>
             <li><a href="https://github.com/jyip01" target="_blank" rel="noopener noreferrer" aria-label="github link"><i className="fab fa-github-square fa-2x"></i></a></li>
         </ul> 
      </footer>
      </>
    )
  }

}

export default App;