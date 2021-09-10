import './App.css';
import { experienceData, educationData, projectsData, skillsData } from './data.js'
import './app.scss'

const Socials = () => {
  return (
    <div className='socials'>
      <a href='https://github.com/MedericCar' title='Github'>
        <i class="fab fa-github"></i>
        <p>MedericCar</p>
      </a>
      <a href='mailto: carriatmederic@gmail.com' title='Mail'>
        <i class="far fa-envelope"></i>
        <p>carriatmederic@gmail.com</p>
      </a>
      <a href='https://www.linkedin.com/in/m%C3%A9d%C3%A9ric-carriat-17705a181/' title='LinkedIn'>
        <i class="fab fa-linkedin"></i>
        <p>Médéric Carriat</p>
      </a>
      <a href='https://www.medericcarriat.com/' title='Personal website'>
        <i class="fas fa-globe-europe"></i>
        <p>medericcarriat.com</p>
      </a>
      <a href='tel:+33676216087' title='Phone'>
        <i class="fas fa-phone-alt"></i> 
        <p>+33 6 76 21 60 87</p>
      </a>
    </div>
  )
}

const Experience = ({ experience }) => {
  return (
    <div className='experience'>
      <img className='logo' src={experience.logo} alt='company-logo'/>

      <div className='title'>
        <p>{experience.title} at {experience.company}</p>
        <p>
          <i class="fas fa-map-marker-alt"></i> {experience.city} <i class="fas fa-calendar-alt"></i> {experience.date}
        </p>
      </div>

      {experience.description}
    </div>
  )
}

const Education = ({ education }) => {
  return (
    <div className='education'>
      <h3>education.name</h3>
      <p>toto</p>
    </div>
  )
}

const Project = ({ project }) => {
  return (
    <div className='project'>
      <h3>project.name</h3>
      <p>toto</p>
    </div>
  )
}

const Tag = ({ tag }) => {
  return (
    <div className='tag'>
      Tag
    </div>
  )
}

const Skills = ({ skills }) => {
  return (
    <div className='skills'>
      
      <div className='programming'>
        <h4>Programming languages</h4>
        {skills['programming'].map(tag => <Tag tag={tag}/>)}
      </div>

      <div className='tools'>
        <h4>Tools</h4>
        {skills['tools'].map(tag => <Tag tag={tag}/>)}
      </div>

    </div>
  )
}


function App() {
  return (
    <div className='app'>
      <div className='resume'>
        <div className='text'>

          <div className="header">
            <h3>Médéric Carriat</h3>
            <p>Software Engineer looking for a 6-month internship starting in February 2022</p>
            <Socials/>
            <span className='vertical-bar'/>
          </div>

          <div className='sections'>

            <div className='section-experience'>
              <h2>Professional experience</h2>
              {experienceData.map(exp => <Experience experience={exp}/>)}
            </div>

            <div className='section-education'>
              <h2>Education</h2>
              {educationData.map(ed => <Education education={ed}/>)}
            </div>

            <div className='section-projects'>
              <h2>Projects</h2>
              {projectsData.map(proj => <Project project={proj}/>)}
            </div>

            <div className='section-skills'>
              <h2>Skills</h2>
              <Skills skills={skillsData}/>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
