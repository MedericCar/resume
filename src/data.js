import ensLogo from './assets/ens.png'
import factonicsLogo from './assets/factonics.jpeg'
import siemensLogo from './assets/siemens.png'

const experienceData = [
  {
    title: 'Software Engineer - Tutored project',
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
      <li>Researched a web-based solution for efficient <b>real-time transparency</b>.</li>,
      <li>Implemented <i><a href='https://luebke.us/publications/StochasticTransparency_I3D2010.pdf'>Stochastic Transparency</a></i> (Enderton, Eric, et al., 2010) for ThreeJS.</li>,
      <li>Refined the results through diverse denoising strategies.</li>,
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
    date: 'Sep 2020 - Feb 2021',
    description: [
      <li>Simplified the <b>ML development workflow</b>, reducing the integration time from 1 hour to 5 minutes : added an algorithm registration tool for Data Scientists, standardized model building through <i>Docker</i>.</li>,
      <li>Implemented a simple <b>algorithm deployment pipeline</b> on <i>AWS</i> to allow execution on the customer side.</li>,
      <li>Developed a <b>medical document classification</b> system leveraging Named-entity recognition for French hospitals.</li>,
      <li>Secured a partnership with <b><a className='blue' href='https://www.bpifrance.fr/'>BPI France</a></b> (French public investment bank) for a <b>newsletter recommendation</b> system : recovered 30 GB of data from the <a href='https://www.oracle.com/cx/marketing/automation/'><i>Eloqua API</i></a>, led the data analysis to identify key profiles and opportunities.</li>,
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
    date: 'May 2019 - Aug 2019',
    description: [
      <li>Worked in the <b>Cognitive Machine Learning research</b> team.</li>,
      <li>Benchmarked the <b className='blue'><a href='https://divime.readthedocs.io/en/latest/initial_questions.html#what-is-the-aclew-divime'>DiViMe</a></b> speech processing tools.</li>,
      <li>Implemented the <i><a href='https://www.sciencedirect.com/science/article/pii/S0167639318304205'>automatic word count estimation algorithm</a></i> (Räsänen, Okko, et al., 2019) and dockerized it for integration to the product.</li>,
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
        <p>Kaggle competition: recognize floor surfaces using data collected from Inertial Sensors. Achieved third place out of 105.</p>
      </div>
    ),
    link: 'https://www.kaggle.com/c/robotsurface/overview',
  },
  {
    title: 'Tiger Compiler',
    description: (
      <div>
        <p>Frontend of a Tiger compiler in C++ comprising all the stages up to the translation to high level intermediate representation.</p>
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
        Implementation of two improvements over the original k-means algorithm: <i>k-means++</i> and <i>Elkan</i>.
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
  programming: {
    preferred: ['C++', 'JavaScript', 'Python'],
    knowledge: ['C', 'Java', 'CUDA'],
    interested: ['Rust']
  },
  image: {
    preferred: [],
    knowledge: ['Keras', 'Numpy', 'Sklearn', 'Skimage', 'OpenCV'],
    interested: ['Pytorch']
  },
  web: {
    preferred: [],
    knowledge: ['React', 'Sass'],
    interested: []
  },
  rendering: {
    preferred: [],
    knowledge: ['OpenGL', 'GLSL', 'Three.js', 'WebGL'],
    interested: ['Vulkan', 'WebGPU']
  },
  tools: {
    preferred: [],
    knowledge: ['Docker', 'Git', 'AWS', 'Shell', 'Unity'],
    interested: ['Kubernetes']
  }
}


export { experienceData, educationData, projectsData , skillsData }