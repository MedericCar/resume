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
    typeLogo: <i class="fab fa-kaggle"></i>,
    description: (
      <div>
        <p>Kaggle competition: recognize floor surfaces using data collected from Inertial Sensors. Third team out of 105.</p>
      </div>
    ),
    link: 'https://www.kaggle.com/c/robotsurface/overview',
  },
  {
    title: 'Tiger Compiler',
    description: (
      <div>
        <p>Semester long school project to build the frontend of a Tiger compiler in C++.</p>
      </div>
    ),
    link: 'https://assignments.lrde.epita.fr/index.html',
  },
  {
    title: 'Path tracer',
    typeLogo: <i class="fab fa-github"></i>,
    description: (
      <p>
        Path tracing in C++ for Physically Based Rendering. CPU parallelized and optimized with Bounding Volume Hierarchy.
      </p>
    ),
    link: 'https://github.com/MedericCar/pathtracer',
  },
  {
    title: 'Optimized k-means',
    description: (
      <p>
        Implementation of two improvements of the original algorithm: <i>k-means++</i> and <i>Elkan</i>.
      </p>
    ),
    link: 'https://github.com/MedericCar/',
  },
  {
    title: 'Bar code detection',
    typeLogo: <i class="fab fa-github"></i>,
    description: (
      <p>
        CUDA versions of the Histogram of Gradients computation and k-means classification.
      </p>
    ),
    link: 'https://github.com/MedericCar/',
  },
  {
    title: 'Personal website',
    typeLogo: <i class="fab fa-github"></i>,
    description: (
      <p>
        Website made in React without any library. Includes a shader for the homepage animation.
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