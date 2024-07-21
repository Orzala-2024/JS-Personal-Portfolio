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
