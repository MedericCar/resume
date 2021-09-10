import './App.css';
import { experienceData, educationData, projectsData, skillsData } from './data.js'
import './app.scss'

const Socials = () => {
  return (
    <div className='socials'>
      <a className='blue' href='https://github.com/MedericCar' title='Github'>
        <i class="fab fa-github"></i>
        <p>MedericCar</p>
      </a>
      <a className='blue' href='mailto: carriatmederic@gmail.com' title='Mail'>
        <i class="far fa-envelope"></i>
        <p>carriatmederic@gmail.com</p>
      </a>
      <a className='blue' href='https://www.linkedin.com/in/m%C3%A9d%C3%A9ric-carriat-17705a181/' title='LinkedIn'>
        <i class="fab fa-linkedin"></i>
        <p>Médéric Carriat</p>
      </a>
      <a className='blue' href='https://www.medericcarriat.com/' title='Personal website'>
        <i class="fas fa-globe-europe"></i>
        <p>medericcarriat.com</p>
      </a>
      <a className='blue' href='tel:+33676216087' title='Phone'>
        <i class="fas fa-phone-alt"></i> 
        <p>+33 6 76 21 60 87</p>
      </a>
    </div>
  )
}

const Experience = ({ experience }) => {
  return (
    <div className='experience'>
      <div className='logo'>
        <img
          src={experience.logo.path}
          style={{width: experience.logo.width, height: experience.logo.height}}
          alt='company-logo'
        />
      </div>

      <div className='text'>
        <div className='intro'>
          <p id='title'>
            <b>{experience.title}</b> at <a className='blue' href={experience.companyLink}>{experience.company}</a>
          </p>
          <p id='info'>
            <i class="fas fa-map-marker-alt"></i> {experience.city} &nbsp; <i class="fas fa-calendar-alt"></i> {experience.date}
          </p>
        </div>
        <div className='description'>
          <ul>
            {experience.description}
          </ul>
        </div>
      </div>

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
        <div className='body'>

          <div className='header'>
            <div className='text'>
              <h3 className='blue'>Médéric Carriat</h3>
              <p>
                Software Engineer looking for
                a <b>6-month internship</b> starting 
                in <b>February 2022</b>
              </p>
            </div>
            <Socials/>
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
