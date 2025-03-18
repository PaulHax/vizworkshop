interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'VolView',
    description: `An open source medical image viewer for the web`,
    imgSrc: '/static/images/volview.jpg',
    href: 'https://github.com/Kitware/VolView',
  },
  {
    title: 'spin-controls',
    description: `Arcball style controls for three.js Object3Ds and Cameras. 
    Featuring pointer to trackball accuracy and unlimited rotation.`,
    imgSrc: '/static/images/spin-controls.png',
    href: 'https://github.com/PaulHax/spin-controls',
  },
]

export default projectsData
