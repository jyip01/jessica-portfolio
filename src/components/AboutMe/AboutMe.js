import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Self from '../../images/Self.jpeg'

class AboutMe extends Component {
  
    render () {
        return (
            <section className="jessica-yip">
                <img className="Self" src={Self} alt="self-portrait"/>
                <div className="about">
                    <h1>Hello, my name is Jessica. I’m a <span>full stack developer</span> located in New York, NY. </h1>
                    <p>I’m a full stack developer and a current student of Thinkful’s Full Stack Flex program. 
                    I have experience with HTML, CSS, JavaScript, JQuery, React, Node.js, Express, and PostgreSQL. I love continually learning and appreciate that coding 
                    keeps me on my toes. I am particularly passionate about improving the user experience and take joy in 
                    creating beautiful, user-friendly web pages. I look forward to working on a team of developers that are going to push me to create the best products.</p>
                    <p>In my spare time, I’m likely found going on adventures with my dogs, spending time with my family, or helping my nieces with their homework or reading. 
                    I am a learner and I love helping others learn as well.
                    I have a Bachelors degree in computer science, fueling my love for creating wonderful applications. </p>
                    <Link to='/projects' onClick={this.props.onClick} className="see-projects-link"><div className="see-projects-button">Projects!</div></Link>
                </div>
            </section>
          )
    }
}

export default AboutMe;