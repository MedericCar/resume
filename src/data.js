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
      width: 'calc(0.23 * 200px)',
      height: 'calc(0.23 * 200px)'
    },
    city: 'Paris',
    date: 'Sep 2020 - Feb 2021 · 6 mth',
    description: [
      <li>Simplified the <b>ML development workflow</b>, successfully reducing the integration time from hours to minutes : added an algorithm registration tool for Data Scientists, standardized model building through <i>Docker</i>.</li>,
      <li>Implemented a simple <b>deployment pipeline</b> on <i>AWS</i>.</li>,
      <li>Developed a <b>medical document classification</b> system leveraging Named-entity recognition for French hospitals.</li>,
      <li>Obtained partnership with <b><a className='blue' href='https://www.bpifrance.fr/'>BPI France</a></b> (French public investment bank) for a <b>newsletter recommendation</b> system : recovered 30 GB of data from the <a href='https://www.oracle.com/cx/marketing/automation/'><i>Eloqua API</i></a>, analysed it to identify key profiles and opportunities.</li>,
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
      <li>Worked in the Cognitive Machine Learning research team.</li>,
      <li>Benchmarked the <b className='blue'><a href='https://divime.readthedocs.io/en/latest/initial_questions.html#what-is-the-aclew-divime'>DiViMe</a></b> speech processing tools.</li>,
      <li>Implemented the <i><a href='https://www.sciencedirect.com/science/article/pii/S0167639318304205'>automatic word count estimation algorithm</a></i> (Räsänen, Okko, et al., 2019) and dockerized it for integration.</li>,
    ]
  },


]

const educationData = [
  {
    name: 'EPITA - École Pour l\'Informatique et les Techniques Avancées',
    link: 'https://www.epita.fr/',
    city: 'Paris',
    date: 'Sep 2017 - Aug 2022',
    description: [
      <li>Master in Computer Science with a specialization in <b>Image Processing and Computer Graphics</b>.</li>,
      <li>Acquired skills essential to Computer Science and Software Engineering.</li>,
    ]
  },
  {
    name: 'Tampere University',
    link: 'https://www.tuni.fi/en/about-us/tampere-university',
    city: 'Tampere, Finland',
    date: 'Jan 2019 - May 2019',
    description: [
      <li>Exchange semester.</li>,
      <li>Courses on Machine Learning, Signal Compression, Software Engineering methodologies.</li>,
    ]
  }
]

const projectsData = [
  {
    title: 'Robot Surface Detection',
    description: (
      <div>
        <p><b>Kaggle competition</b> : recognize floor surfaces using data collected from Inertial Sensors.</p>
        <p><b>Third team</b> out of 105.</p>
      </div>
    ),
    link: 'https://www.kaggle.com/c/robotsurface/overview',
  },
  {
    title: 'Tiger Compiler',
    description: (
      <div>
        <p>Semester long school project to build the <b>frontend of a Tiger compiler</b></p>
      </div>
    ),
    link: 'https://assignments.lrde.epita.fr/index.html',
  },
  {
    title: 'Path tracer',
    description: (
      <p>
        Path tracing in C++ for Physically Based Rendering. <b>CPU parallelized</b> and optimized with <b>Bounding Volume Hierarchy</b>.
      </p>
    ),
    link: 'https://github.com/MedericCar/pathtracer',
  },
  {
    title: 'Personal website',
    description: (
      <p>
        Website made from scratch in <b>functional React</b>. Features a <b>homepage 3D animation</b>.
      </p>
    ),
    link: 'https://github.com/MedericCar/portfolio',
  },
  {
    title: 'Personal website',
    description: (
      <p>
        Website made from scratch in <b>functional React</b>. Features a <b>homepage 3D animation</b>.
      </p>
    ),
    link: 'https://github.com/MedericCar/portfolio',
  },
  {
    title: 'Personal website',
    description: (
      <p>
        Website made from scratch in <b>functional React</b>. Features a <b>homepage 3D animation</b>.
      </p>
    ),
    link: 'https://github.com/MedericCar/portfolio',
  },
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