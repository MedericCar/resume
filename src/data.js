import ensLogo from './assets/ens.png'
import factonicsLogo from './assets/factonics.jpeg'
import siemensLogo from './assets/siemens.png'
import salesforceLogo from './assets/salesforce.png'
const experienceData = [
  {
    title: 'Software Engineer',
    company: 'Salesforce',
    companyLink: 'https://www.salesforce.com/',
    logo: {
      path: salesforceLogo,
      width: 'calc(0.4 * 200px)',
      height: 'calc(0.25 * 200px)'
    },
    city: 'Paris',
    date: 'Feb 2022 - Present',
    description: [
      <li>Currently building high-traffic <b>agentic search features</b> (record search, text-to-SQL) powering Salesforce's Agentforce platform.</li>,
      <li>Driving <b>continuous improvements of AI systems</b> through prompt engineering, model iteration, and systematic evaluations (offline and live), resulting in higher user satisfaction.</li>,
      <li>Co-developed a <b>RAG-based question answering system</b> for Knowledge Bases.</li>,
      <li>Mentored a Data Science intern, enabling direct contributions to critical features.</li>,
    ]
  },
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
    date: 'Feb 2021 - Jan 2022',
    description: [
      <li>Implemented a web-based solution for <b>efficient real-time transparency</b> in ThreeJS</li>,
      <li>Inspired by <i><a href='https://luebke.us/publications/StochasticTransparency_I3D2010.pdf'>Stochastic Transparency</a></i> (Enderton, Eric, et al., 2010).</li>,
    ],
  },
  {
    title: 'Machine Learning Engineer intern',
    company: 'Nexa Forward',
    companyLink: 'https://www.linkedin.com/company/factonics/about/',
    logo: {
      path: factonicsLogo,
      width: 'calc(0.23 * 200px)',
      height: 'calc(0.23 * 200px)'
    },
    city: 'Paris',
    date: 'Sep 2020 - Feb 2021',
    description: [
      <li>Standardized the <b>ML development workflow</b>, reducing the integration time from 1 hour to 5 minutes.</li>,
      <li>Developed a <b>medical document classification</b> system for French hospitals by leveraging Named-entity recognition.</li>,
      <li>Prototyped a <b>newsletter recommender system</b> that helped secure a partnership with <b><a className='blue' href='https://www.bpifrance.fr/'>BPI France</a></b>.</li>,
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
      <li>Implemented <b><a href='https://www.sciencedirect.com/science/article/pii/S0167639318304205'>automatic word count estimation</a></b> (Räsänen, Okko, et al., 2019).</li>,
      <li>Integrated the algorithm to a language acquisition tracking tool.</li>
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
      <>Master in Computer Science with a specialization in <b>Image Processing and Computer Graphics</b>.</>,
      <>Acquired skills essential to Computer Science, Software Engineering and Data Science.</>,
    ]
  },
  {
    name: 'Tampere University',
    link: 'https://www.tuni.fi/en/about-us/tampere-university',
    city: 'Tampere, Finland',
    date: 'Jan 2019 - May 2019',
    description: [
      <>Courses on Machine Learning, Signal Compression, Software Engineering methodologies.</>,
    ]
  }
]

const projectsData = [
  {
    title: 'Mistral AI Paris Hackathon',
    typeLogo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20" style={{verticalAlign: 'middle'}}>
      <path fill="#4facfe" d="M3.428 3.4h3.429v3.428h3.429v3.429h-.002 3.431V6.828h3.427V3.4h3.43v13.714H24v3.429H13.714v-3.428h-3.428v-3.429h-3.43v3.428h3.43v3.429H0v-3.429h3.428V3.4zm10.286 13.715h3.428v-3.429h-3.427v3.429z"/>
    </svg>,
    description: (
      <div>
        
        <p>AI Trip Planner that creates an itinerary based on the user's preferences and interests. <b><a className='blue' href='https://www.linkedin.com/posts/m%C3%A9d%C3%A9ric-carriat-17705a181_ever-wondered-if-ai-could-plan-your-perfect-activity-7201560910849540100-4G4a?utm_source=share&utm_medium=member_desktop&rcm=ACoAACrmaWsBGIOMCTRG5jgm0LSiglDKScmw0No'>Demo</a></b></p>
      </div>
    ),
    link: 'https://www.linkedin.com/posts/m%C3%A9d%C3%A9ric-carriat-17705a181_ever-wondered-if-ai-could-plan-your-perfect-activity-7201560910849540100-4G4a?utm_source=share&utm_medium=member_desktop&rcm=ACoAACrmaWsBGIOMCTRG5jgm0LSiglDKScmw0No',
  },
  {
    title: 'Anthropic London Hackathon',
    typeLogo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20" style={{verticalAlign: 'middle'}}>
      <path fill="#4facfe" d="m13.788825 3.932 6.43325 16.136075h3.5279L17.316725 3.932H13.788825Z"></path>
      <path fill="#4facfe" d="m6.325375 13.682775 2.20125 -5.67065 2.201275 5.67065H6.325375ZM6.68225 3.932 0.25 20.068075h3.596525l1.3155 -3.3886h6.729425l1.315275 3.3886h3.59655L10.371 3.932H6.68225Z"></path>
    </svg>,
    description: (
      <div>
        <p>Browser extension using Claude to optimize the user experience on government websites.</p>
      </div>
    ),
    link: 'https://devpost.com/software/uxcelerate',
  },
  {
    title: 'Robot Surface Detection',
    typeLogo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" height="18" width="18" style={{verticalAlign: 'middle'}}>
      <path fill="#4facfe" d="M100.402 127.243c-.126.501-.627.752-1.502.752H82.168c-1.007 0-1.876-.438-2.632-1.317L51.91 91.531l-7.706 7.33v27.258c0 1.255-.628 1.881-1.88 1.881h-12.97c-1.254 0-1.88-.626-1.88-1.88V1.876c0-1.25.625-1.877 1.88-1.877h12.97c1.253 0 1.882.628 1.882 1.876v76.501l33.08-33.457c.878-.875 1.755-1.315 2.631-1.315h17.295c.75 0 1.25.315 1.504.937.252.753.19 1.316-.19 1.693L63.561 80.062l36.465 45.3c.499.502.625 1.128.38 1.881"/>
    </svg>,
    description: (
      <div>
        <p>Kaggle competition: recognize floor surfaces using Inertial Sensors data. Achieved third place out of 105.</p>
      </div>
    ),
    link: 'https://www.kaggle.com/c/robotsurface/overview',
  },
  {
    title: 'Path tracer',
    typeLogo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 499.368" height="18" width="18" style={{verticalAlign: 'middle'}}>
      <path fill="#4facfe" d="M256.003 0C114.555 0 0 114.555 0 256.003c0 113.286 73.28 208.961 175.038 242.865 12.796 2.247 17.586-5.433 17.586-12.153 0-6.077-.309-26.225-.309-47.686-64.313 11.844-80.941-15.674-86.058-30.055-2.896-7.37-15.359-30.1-26.269-36.177-8.948-4.808-21.752-16.652-.31-16.961 20.168-.309 34.574 18.564 39.382 26.244 23.038 38.732 59.839 27.828 74.555 21.101 2.227-16.627 8.947-27.828 16.318-34.239-56.968-6.386-116.467-28.471-116.467-126.399 0-27.827 9.907-50.866 26.225-68.787-2.562-6.41-11.51-32.655 2.562-67.853 0 0 21.436-6.72 70.409 26.244 20.483-5.767 42.227-8.638 63.998-8.638 21.751 0 43.52 2.896 63.997 8.638 48.973-33.279 70.39-26.244 70.39-26.244 14.09 35.192 5.117 61.443 2.562 67.853 16.318 17.921 26.244 40.625 26.244 68.787 0 98.237-59.84 119.988-116.801 126.399 9.282 8.014 17.277 23.373 17.277 47.371 0 34.238-.309 61.751-.309 70.389 0 6.721 4.808 14.735 17.586 12.179C438.739 464.964 512 368.955 512 256.003 512 114.555 397.445 0 256.003 0z"/>
    </svg>,
    description: (
      <p>
        Path tracing in C++ for Physically Based Rendering. Optimized through various methods.
      </p>
    ),
    link: 'https://github.com/MedericCar/pathtracer',
  },
  {
    title: 'Bar code detection',
    typeLogo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 499.368" height="18" width="18" style={{verticalAlign: 'middle'}}>
      <path fill="#4facfe" d="M256.003 0C114.555 0 0 114.555 0 256.003c0 113.286 73.28 208.961 175.038 242.865 12.796 2.247 17.586-5.433 17.586-12.153 0-6.077-.309-26.225-.309-47.686-64.313 11.844-80.941-15.674-86.058-30.055-2.896-7.37-15.359-30.1-26.269-36.177-8.948-4.808-21.752-16.652-.31-16.961 20.168-.309 34.574 18.564 39.382 26.244 23.038 38.732 59.839 27.828 74.555 21.101 2.227-16.627 8.947-27.828 16.318-34.239-56.968-6.386-116.467-28.471-116.467-126.399 0-27.827 9.907-50.866 26.225-68.787-2.562-6.41-11.51-32.655 2.562-67.853 0 0 21.436-6.72 70.409 26.244 20.483-5.767 42.227-8.638 63.998-8.638 21.751 0 43.52 2.896 63.997 8.638 48.973-33.279 70.39-26.244 70.39-26.244 14.09 35.192 5.117 61.443 2.562 67.853 16.318 17.921 26.244 40.625 26.244 68.787 0 98.237-59.84 119.988-116.801 126.399 9.282 8.014 17.277 23.373 17.277 47.371 0 34.238-.309 61.751-.309 70.389 0 6.721 4.808 14.735 17.586 12.179C438.739 464.964 512 368.955 512 256.003 512 114.555 397.445 0 256.003 0z"/>
    </svg>,
    description: (
      <p>
        CUDA versions of the Histogram of Gradients computation and k-means classification.
      </p>
    ),
    link: 'https://github.com/MedericCar/',
  },
  {
    title: 'Personal website',
    typeLogo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 499.368" height="18" width="18" style={{verticalAlign: 'middle'}}>
      <path fill="#4facfe" d="M256.003 0C114.555 0 0 114.555 0 256.003c0 113.286 73.28 208.961 175.038 242.865 12.796 2.247 17.586-5.433 17.586-12.153 0-6.077-.309-26.225-.309-47.686-64.313 11.844-80.941-15.674-86.058-30.055-2.896-7.37-15.359-30.1-26.269-36.177-8.948-4.808-21.752-16.652-.31-16.961 20.168-.309 34.574 18.564 39.382 26.244 23.038 38.732 59.839 27.828 74.555 21.101 2.227-16.627 8.947-27.828 16.318-34.239-56.968-6.386-116.467-28.471-116.467-126.399 0-27.827 9.907-50.866 26.225-68.787-2.562-6.41-11.51-32.655 2.562-67.853 0 0 21.436-6.72 70.409 26.244 20.483-5.767 42.227-8.638 63.998-8.638 21.751 0 43.52 2.896 63.997 8.638 48.973-33.279 70.39-26.244 70.39-26.244 14.09 35.192 5.117 61.443 2.562 67.853 16.318 17.921 26.244 40.625 26.244 68.787 0 98.237-59.84 119.988-116.801 126.399 9.282 8.014 17.277 23.373 17.277 47.371 0 34.238-.309 61.751-.309 70.389 0 6.721 4.808 14.735 17.586 12.179C438.739 464.964 512 368.955 512 256.003 512 114.555 397.445 0 256.003 0z"/>
    </svg>,
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
    preferred: ['Python', 'Java'],
    knowledge: ['C++', 'CUDA'],
    interested: ['Swift']
  },
  image: {
    preferred: [],
    knowledge: ['Keras', 'Numpy', 'Sklearn', 'Skimage', 'OpenCV'],
    interested: ['Pytorch']
  },
  web: {
    preferred: [],
    knowledge: ['React', 'Javascript'],
    interested: []
  },
  ai: {
    preferred: ['LangChain', 'Prompt Engineering'],
    knowledge: ['Vector Search'],
    interested: []
  },
  tools: {
    preferred: [],
    knowledge: ['Docker', 'Git', 'AWS', 'Shell'],
    interested: []
  }
}


export { experienceData, educationData, projectsData , skillsData }