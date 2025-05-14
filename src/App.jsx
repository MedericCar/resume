import { experienceData, educationData, projectsData, skillsData } from './data.js'
import './app.scss'

const Socials = () => {
  return (
    <div className='socials'>
      <a className='blue' href='https://github.com/MedericCar' title='Github'>
        <i className="fab fa-github"></i>
        <p>MedericCar</p>
      </a>
      <a className='blue' href='mailto: carriatmederic@gmail.com' title='Mail'>
        <i className="far fa-envelope"></i>
        <p>carriatmederic@gmail.com</p>
      </a>
      <a className='blue' href='https://www.linkedin.com/in/m%C3%A9d%C3%A9ric-carriat-17705a181/' title='LinkedIn'>
        <i className="fab fa-linkedin"></i>
        <p>Médéric Carriat</p>
      </a>
      <a className='blue' href='https://www.medericcarriat.com/' title='Personal website'>
        <i className="fas fa-globe-europe"></i>
        <p>medericcarriat.com</p>
      </a>
      <a className='blue' href='tel:+33676216087' title='Phone'>
        <i className="fas fa-phone-alt"></i> 
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
          style={{
            width: experience.logo.width, 
            height: experience.logo.height,
            objectFit: 'contain'
          }}
          alt='company-logo'
        />
      </div>

      <div className='text'>
        <div className='intro'>
          <p id='title'>
            <b>{experience.title}</b> at <a className='blue' href={experience.companyLink}>{experience.company}</a>
          </p>
          <p id='info'>
            <i className="fas fa-map-marker-alt"></i> {experience.city} &nbsp; <i className="fas fa-calendar-alt"></i> {experience.date}
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
        <div className='intro'>
          <p id='title'>
            <b><a className='blue' href={education.link}>{education.name}</a></b>
          </p>
          <p id='info'>
            <i className="fas fa-map-marker-alt"></i> {education.city} &nbsp; <i className="fas fa-calendar-alt"></i> {education.date}
          </p>
        </div>
        <div className='description'>
          {education.description.map((item, index) => (
            <p key={index}>{item.props.children}</p>
          ))}
        </div>
    </div>
  )
}

const Project = ({ project }) => {
  return (
    <div className='project'>
      <a className='blue' id='title' href={project.link}>
        {project.typeLogo} {project.title}
      </a>
      <div id='description'>{project.description}</div>
    </div>
  )
}

const Tag = ({ tag, type }) => {
  return (
    <div className={`tag ${type}`}>
      {tag}
    </div>
  )
}

const Skills = ({ skills }) => {
  return (
    <div className='skills'>
      
      <div className='programming'>
        <h4>Programming languages</h4>
        <div className='tags'>
          {skills['programming']['preferred'].map((tag, index) => <Tag key={`prog-pref-${index}`} type={'preferred'} tag={tag}/>)}
          {skills['programming']['knowledge'].map((tag, index) => <Tag key={`prog-know-${index}`} type={'knowledge'} tag={tag}/>)}
          {skills['programming']['interested'].map((tag, index) => <Tag key={`prog-int-${index}`} type={'interested'} tag={tag}/>)}
        </div>
      </div>

      <div className='image'>
        <h4>ML and Image Processing</h4>
        <div className='tags'>
          {skills['image']['preferred'].map((tag, index) => <Tag key={`img-pref-${index}`} type={'preferred'} tag={tag}/>)}
          {skills['image']['knowledge'].map((tag, index) => <Tag key={`img-know-${index}`} type={'knowledge'} tag={tag}/>)}
          {skills['image']['interested'].map((tag, index) => <Tag key={`img-int-${index}`} type={'interested'} tag={tag}/>)}
        </div>
      </div>

      <div className='ai'>
        <h4>AI</h4>
        <div className='tags'>
          {skills['ai']['preferred'].map((tag, index) => <Tag key={`ai-pref-${index}`} type={'preferred'} tag={tag}/>)}
          {skills['ai']['knowledge'].map((tag, index) => <Tag key={`ai-know-${index}`} type={'knowledge'} tag={tag}/>)}
          {skills['ai']['interested'].map((tag, index) => <Tag key={`ai-int-${index}`} type={'interested'} tag={tag}/>)}
        </div>
      </div>

      <div className='tools'>
        <h4>Tools</h4>
        <div className='tags'>
          {skills['tools']['preferred'].map((tag, index) => <Tag key={`tools-pref-${index}`} type={'preferred'} tag={tag}/>)}
          {skills['tools']['knowledge'].map((tag, index) => <Tag key={`tools-know-${index}`} type={'knowledge'} tag={tag}/>)}
          {skills['tools']['interested'].map((tag, index) => <Tag key={`tools-int-${index}`} type={'interested'} tag={tag}/>)}
        </div>
      </div>

      <div className='web'>
        <h4>Web</h4>
        <div className='tags'>
          {skills['web']['preferred'].map((tag, index) => <Tag key={`web-pref-${index}`} type={'preferred'} tag={tag}/>)}
          {skills['web']['knowledge'].map((tag, index) => <Tag key={`web-know-${index}`} type={'knowledge'} tag={tag}/>)}
          {skills['web']['interested'].map((tag, index) => <Tag key={`web-int-${index}`} type={'interested'} tag={tag}/>)}
        </div>
      </div>
    
    </div>
  )
}


function App() {

  return (
    <div className='app'>
      <div className='resume' id='section-to-print'>
        <div className='body'>

          <div className='header'>
            <div className='text'>
              <h3 className='blue'>Médéric Carriat</h3>
              <p>
                Software Engineer at Salesforce working on Conversational Search and AI Agents.
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
              <div className='projects'>
                {projectsData.map(proj => <Project project={proj}/>)}
              </div>
            </div>

            <div className='section-skills'>
              <div className='intro'>
                <h2>Skills</h2>
              </div>
              
              <div className='legend'>
                <Tag key="legend-proficient" type='preferred' tag='Proficient'/>
                <Tag key="legend-familiar" type='knowledge' tag='Familiar'/>
                <Tag key="legend-learning" type='interested' tag='Learning'/>
              </div>

              <Skills skills={skillsData}/>
            </div>


          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
