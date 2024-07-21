//humberger
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  });

  navLink.forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  }));
});

// Certificates
const certificatesData = [
  {
    title: 'Responsive Web Design',
    image: 'freecodcamp-certificate.png'
  },
  {
    title: 'JavaScript',
    image: 'freecodcamp-certificate.png'
  }
];

const certificateContent = document.getElementById('certificate-content');

function loadCertificates() {
  certificateContent.innerHTML = ''; 

  // title
  const certificationTitle = document.createElement('h2');
  certificationTitle.innerText = 'Certification of Complition';
  certificateContent.insertAdjacentElement('beforebegin', certificationTitle);

  certificatesData.forEach(cert => {
    const certificateDiv = document.createElement('div');
    certificateDiv.classList.add('certificate');
    
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.innerText = cert.title;
    
    const img = document.createElement('img');
    img.src = cert.image;
    img.alt = cert.title;
    img.classList.add('certificate-image');
    
    certificateDiv.appendChild(titleDiv);
    certificateDiv.appendChild(img);
    certificateContent.appendChild(certificateDiv);
  });
}

loadCertificates();

document.addEventListener('DOMContentLoaded', function() {

  const carouselContainer = document.getElementById('carousel-container');
  const skillHead = document.createElement('h1');
  skillHead.id = 'skill-head';
  skillHead.innerHTML = 'Our <span id="color">Projects</span>';
  carouselContainer.insertAdjacentElement('beforebegin', skillHead);

  // Display the certificate section by default
  document.getElementById('certificate-content').style.display = 'block';

  // Carousel data
  const carouselData = [
    {
      title: 'Survey Form',
      description: '',
      image: 'new.jpeg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://example.com/project4'
    },
    {
      title: 'Roman Numeral',
      description: '',
      image: 'profile.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://example.com/project4'
    },
    {
      title: 'Personal Portfolio',
      description: '',
      image: 'new.jpeg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://example.com/project4'
    },
    {
      title: 'Palindrome Checker',
      description: '',
      image: 'profile.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://example.com/project4'
    },
    {
      title: 'PPP Project',
      description: '',
      image: 'new.jpeg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://example.com/project4'
    },
    {
      title: 'Product Landing Page',
      description: '',
      image: 'profile.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://example.com/project4'
    }
  ];

  const carouselImage = document.getElementById('carousel-image');
  const carouselTitle = document.getElementById('carousel-title');
  const carouselDescription = document.getElementById('carousel-description');
  const carouselTech = document.getElementById('carousel-tech');

  let currentIndex = 0;

  function showSlide(index) {
    const totalSlides = carouselData.length;
    if (index >= totalSlides) currentIndex = 0;
    if (index < 0) currentIndex = totalSlides - 1;
    const item = carouselData[currentIndex];
    carouselImage.src = item.image;
    carouselImage.alt = item.title;
    carouselTitle.innerText = item.title;
    carouselDescription.innerText = item.description;

    // Clear previous technologies
    carouselTech.innerHTML = '';
    item.technologies.forEach(tech => {
      const li = document.createElement('li');
      li.innerText = tech;
      carouselTech.appendChild(li);
    });
  }

  window.nextSlide = function() {
    currentIndex++;
    showSlide(currentIndex);
  }

  window.prevSlide = function() {
    currentIndex--;
    showSlide(currentIndex);
  }

  // Initial display
  showSlide(currentIndex);
});

