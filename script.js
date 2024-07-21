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
  // Add more certificate objects as needed
];

const certificateContent = document.getElementById('certificate-content');

function loadCertificates() {
  certificateContent.innerHTML = ''; // Clear existing content

  // Add Certification title dynamically
  const certificationTitle = document.createElement('h2');
  certificationTitle.innerText = 'Certification';
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

// Load certificates when the page is loaded
loadCertificates();

document.addEventListener('DOMContentLoaded', function() {
  // Add title above the carousel
  const carouselContainer = document.getElementById('carousel-container');
  const skillHead = document.createElement('h1');
  skillHead.id = 'skill-head';
  skillHead.innerHTML = 'Our <span id="color">Projects</span>';
  carouselContainer.insertAdjacentElement('beforebegin', skillHead);

  // Display the certificate section by default
  document.getElementById('certificate-content').style.display = 'block';
