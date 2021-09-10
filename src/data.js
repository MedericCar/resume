import ensLogo from './assets/ens.png'
import factonicsLogo from './assets/factonics.jpeg'
import siemensLogo from './assets/siemens.png'

const experienceData = [
  {
    title: 'Software Engineer, Visualization',
    company: 'Siemens Healthineers',
    companyLink: 'https://www.siemens-healthineers.com/',
    logo: {
      path: siemensLogo,
      width: 'calc(0.25 * 200px)',
      height: 'calc(0.25 * 200px)'
    },
    city: 'Paris',
    date: 'Started Feb 2021 - Current',
    description: [
      <li>Research of a web-based solution for performant <b>real-time transparency</b>.</li>,
      <li>Implementation of <i><a href='https://luebke.us/publications/StochasticTransparency_I3D2010.pdf'>Stochastic Transparency</a></i> (Enderton, Eric, et al., 2010) for ThreeJS.</li>,
      <li>Addition of denoising strategies to refine the results.</li>,
    ],
  },
  {
    title: 'Machine Learning Engineer intern',
    company: 'Factonics',
    companyLink: 'https://www.linkedin.com/company/factonics/about/',
    logo: {
      path: factonicsLogo,
      width: 'calc(0.2 * 200px)',
      height: 'calc(0.2 * 200px)'
    },
    city: 'Paris',
    date: 'Sep 2020 - Feb 2021 · 6 mth',
    description: [
      <li>Improvement of the <b>ML development workflow</b> succesfully reducing the time from hours to a few minutes : added an algorithm registration tool for Data Scientists, standardized model building through Docker.</li>,
      <li>Implementation a simple deployment pipeline on AWS.</li>,
      <li>Development of a <b>Named-entity recognition </b>program specific to the French health system.</li>,
      <li>Confirmed partnership with <a href='https://www.bpifrance.fr/'>BPI France</a> (French public investment bank) through a Proof of Concept for a <b>newsletter recommendation</b> system on behalf of .</li>,
    ],
  },
  {
    title: 'Research intern',
    company: 'ENS - PSL',
    companyLink: 'https://cognitive-ml.fr/',
    logo: {
      path: ensLogo,
      width: 'calc(0.25 * 230px)',
      height: 'calc(0.25 * 230px)'
    },
    city: 'Paris',
    date: 'May 2019 - Aug 2019 · 4 mth',
    description: [
      <li>Cognitive Machine Learning research team</li>,
      <li>Benchmarking of the <u><a href='https://divime.readthedocs.io/en/latest/initial_questions.html#what-is-the-aclew-divime'>DiViMe</a></u> speech processing tool.</li>,
      <li>Implementation of the <u><a href='https://www.sciencedirect.com/science/article/pii/S0167639318304205'>automatic word count estimation algorithm</a></u> (Räsänen, Okko, et al., 2019).</li>,
      <li>Tags: <b>MATLAB, Python, Docker</b></li>
    ]
  },


]

const educationData = [

]

const projectsData = [

]

const skillsData = {
  programming: [
    {
      name: 'hello' 
    }
  ],
  tools: [
    {
      name: 'hello' 
    }
  ],
}


export { experienceData, educationData, projectsData , skillsData }