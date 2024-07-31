document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLink = document.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
  });

  navLink.forEach((n) => n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
  }));

  // Certificates
  const certificatesData = [
      {
          title: 'Responsive Web Design',
          image: 'assets/freecodcamp-certificate.png',
      },
      {
          title: 'JavaScript',
          image: 'assets/freecodcamp-certificate.png',
      },
      {
          title: 'JavaScript',
          image: 'assets/freecodcamp-certificate.png',
      }
  ];

  const certificateContent = document.getElementById('certificate-content');

  function loadCertificates() {
      certificateContent.innerHTML = '';

      // Title
      const certificationTitle = document.createElement('h2');
      certificationTitle.innerText = 'Certification of Completion';
      certificateContent.insertAdjacentElement('beforebegin', certificationTitle);

      certificatesData.forEach((cert) => {
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
//carousel
const carouselContainer = document.getElementById('carousel-container');
const skillHead = document.createElement('h1');
skillHead.id = 'skill-head';
skillHead.innerHTML = 'Our <span id="color">Projects</span>';
carouselContainer.insertAdjacentElement('beforebegin', skillHead);

const projectDesc = document.createElement('p');
projectDesc.innerText = 'Click on the project image to see more details.';
skillHead.insertAdjacentElement('afterend', projectDesc);

const carouselData = [
    {
        title: 'Survey Form',
        image: 'assets/freecodcamp-certificate.png',
        description: 'A form built to collect survey responses.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        sourceLink: 'https://github.com/example/survey-form',
        liveLink: 'https://example.com/project4',
    },
    {
        title: 'Personal Portfolio',
        image: 'portfolio.jpeg',
        description: 'A personal portfolio showcasing my projects.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        sourceLink: 'https://github.com/example/personal-portfolio',
        liveLink: 'https://example.com/project5',
    },
    {
        title: 'E-commerce Site',
        image: 'ecommerce.jpeg',
        description: 'An e-commerce site with various products.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        sourceLink: 'https://github.com/example/e-commerce-site',
        liveLink: 'https://example.com/project6',
    },
    {
        title: 'Blog Site',
        image: 'blog.jpeg',
        description: 'A blog site to share articles and posts.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        sourceLink: 'https://github.com/example/blog-site',
        liveLink: 'https://example.com/project7',
    },
    {
        title: 'Social Media App',
        image: 'socialmedia.jpeg',
        description: 'A social media app to connect with friends.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        sourceLink: 'https://github.com/example/social-media-app',
        liveLink: 'https://example.com/project8',
    },
    {
        title: 'To-do List App',
        image: 'todolist.jpeg',
        description: 'A to-do list app to manage tasks.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        sourceLink: 'https://github.com/example/to-do-list-app',
        liveLink: 'https://example.com/project9',
    }
];

const carouselImage = document.getElementById('carousel-image');
const carouselTitle = document.getElementById('carousel-title');

let currentIndex = 0;

function showSlide(index) {
    const totalSlides = carouselData.length;
    if (index >= totalSlides) currentIndex = 0;
    if (index < 0) currentIndex = totalSlides - 1;
    const item = carouselData[currentIndex];
    carouselImage.src = item.image;
    carouselImage.alt = item.title;
    carouselTitle.innerText = item.title;
}

window.nextSlide = function nextSlide() {
    currentIndex += 1;
    showSlide(currentIndex);
};

window.prevSlide = function prevSlide() {
    currentIndex -= 1;
    showSlide(currentIndex);
};

// Initial display
showSlide(currentIndex);

// Popup Menu
function createPopupMenu(title, description, imageSrc, listItems, sourceLink, liveLink) {
    // Check if popup already exists
    const existingPopup = document.querySelector('.popup-menu');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Create the popup container
    const popup = document.createElement('div');
    popup.className = 'popup-menu';

    // Create the content for the popup menu
    popup.innerHTML = `
        <div class="popup-content">
            <div class="popup-header">
                <h2>${title}</h2>
                <span class="popup-close">&times;</span>
            </div>
            <div class="popup-body">
                <img src="${imageSrc}" alt="${title}">
                <p>${description}</p>
                <ul>
                    ${listItems.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <button onclick="window.open('${sourceLink}', '_blank')">Source Link</button>
                <button onclick="window.open('${liveLink}', '_blank')">Live Link</button>
            </div>
        </div>
    `;

    // Add the popup to the container
    document.getElementById('popup-container').appendChild(popup);

    // Show the popup
    popup.style.display = 'flex';

    // Close the popup when clicking the close button
    popup.querySelector('.popup-close').addEventListener('click', () => {
        popup.style.display = 'none';
        setTimeout(() => popup.remove(), 300); // Remove popup from DOM after closing
    });

    // Close the popup when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
            setTimeout(() => popup.remove(), 300); // Remove popup from DOM after closing
        }
    });
}

// Add event listeners for "Learn More" buttons
carouselContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('learn-more-button')) {
        const currentItem = carouselData[currentIndex];
        createPopupMenu(currentItem.title, currentItem.description, currentItem.image, currentItem.technologies, currentItem.sourceLink, currentItem.liveLink);
    }
});


  // Images
  const images = [
      'assets/freecodcamp-certificate.png',
      'assets/freecodcamp-certificate.png',
      'assets/freecodcamp-certificate.png',
  ];

  const imageContainer = document.getElementById('image-container');

  images.forEach((imageSrc) => {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = 'Dynamic Image';
      // Optional: Set image width
      img.style.height = 'auto'; // Optional: Maintain aspect ratio

      // Create hover content container
      const hoverContent = document.createElement('div');
      hoverContent.classList.add('hover-content');

      const hoverTitle = document.createElement('h1');
      hoverTitle.innerText = 'Hovered Title';
      hoverContent.appendChild(hoverTitle);

      const hoverList = document.createElement('ul');
      ['Item 1', 'Item 2', 'Item 3'].forEach((text) => {
          const li = document.createElement('li');
          li.innerText = text;
          hoverList.appendChild(li);
      });
      hoverContent.appendChild(hoverList);

      const hoverButton = document.createElement('button');
      hoverButton.innerText = 'Click Me';
      hoverContent.appendChild(hoverButton);

      img.appendChild(hoverContent);
      imageContainer.appendChild(img);
  });

  // Circles
  const circles = document.querySelectorAll('.circle');

  circles.forEach((circle) => {
      const percent = circle.getAttribute('data-percent');
      const rotateValue = (percent / 100) * 360;

      if (percent <= 50) {
          circle.querySelector('::before').style.transform = `rotate(${rotateValue}deg)`;
      } else {
          circle.querySelector('::before').style.transform = 'rotate(180deg)';
          circle.querySelector('::after').style.transform = `rotate(${rotateValue - 180}deg)`;
      }
  });
});
