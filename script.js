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
    },
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

  // Carousel and Popup Menu
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const popupMenu = document.querySelector('#popup-menu');
  const closeBtn = document.querySelector('#close-btn');

  const projects = [
    {
      src: 'assets/black-plaindrome-.png',
      title: 'Palindrom Checker',
      description: 'A palindrome checker verifies if a given word, phrase, number, or sequence reads the same backward as forward.',
      technologies: ['HTML', 'CSS', 'JS'],
      sourceLink: 'https://github.com/Orzala-2024/Palindrome-Checker/pulls',
      liveLink: 'https://limasahibzada.github.io/Palindrome-Checker/',
    },
    {
      src: 'assets/first-portfolio.png',
      title: 'Personal Portfolio',
      description: 'A personal portfolio showcases an individual skills, projects, and achievements in a visually engaging online format.',
      technologies: ['HTML', 'CSS'],
      sourceLink: 'https://github.com/Orzala-2024/Personal-Portfolio',
      liveLink: 'https://orzala-2024.github.io/Personal-Portfolio/',
    },
    {
      src: 'assets/roman-converter.png',
      title: 'Roman Converter',
      description: 'A Roman numeral converter translates numbers between Roman numerals and their corresponding Arabic numeral values.',
      technologies: ['HTML', 'CSS', 'JS'],
      sourceLink: 'https://github.com/Orzala-2024/Roman-Numerals-Converter',
      liveLink: 'https://limasahibzada.github.io/Roman-Numerals-Converter/',
    },
    {
      src: 'assets/profile.png',
      title: 'Phone Validator',
      description: 'A phone validator checks the format and validity of a phone number according to specified criteria or standards.',
      technologies: ['HTML', 'CSS', 'JS'],
      sourceLink: 'https://github.com/Orzala-2024/Telephone-Validator-',
      liveLink: 'https://orzala-2024.github.io/Telephone-Validator-/',
    },
    {
      src: 'assets/pro-1.png',
      title: 'Survery Form',
      description: 'A Survery form , my first project using HTML and CSS.',
      technologies: ['HTML', 'CSS'],
      sourceLink: 'https://github.com/Orzala-2024/Survey-Form-project1',
      liveLink: 'https://github.com/LimaSahibzada/Survey-Form-project1/assets/167701815/d1e8a5f3-7799-42d0-93ce-f3d85aebe965',
    },
    {
      src: 'assets/pokeman2.png',
      title: 'Pokemon',
      description: 'Pokémon are fictional creatures in a popular franchise, known for being captured and trained by humans for battles and adventures.',
      technologies: ['HTML', 'CSS', 'JS'],
      sourceLink: 'https://github.com/Orzala-2024/Pok-mon-Search-App',
      liveLink: 'https://orzala-2024.github.io/Pok-mon-Search-App/',
    },
  ];

  let currentIndex = 0;

  const showPopupMenu = (index) => {
    const project = projects[index];
    document.querySelector('#popup-title').textContent = project.title;
    document.querySelector('#popup-img').src = project.src;
    document.querySelector('#popup-description').textContent = project.description;
    document.querySelector('#source-link').href = project.sourceLink;
    document.querySelector('#live-link').href = project.liveLink;

    const techList = document.querySelector('#popup-tech-list');
    techList.innerHTML = '';
    project.technologies.forEach((tech) => {
      const listItem = document.createElement('li');
      listItem.textContent = tech;
      techList.appendChild(listItem);
    });

    popupMenu.style.display = 'block';
  };

  const updateCarousel = () => {
    carousel.innerHTML = '';
    const project = projects[currentIndex];
    const item = document.createElement('div');
    item.classList.add('carousel-item');

    const imgElement = document.createElement('img');
    imgElement.src = project.src;
    imgElement.alt = project.title;
    item.appendChild(imgElement);

    const hoverContent = document.createElement('div');
    hoverContent.classList.add('carousel-hover');

    const title = document.createElement('h1');
    title.textContent = project.title;
    hoverContent.appendChild(title);

    const learnMoreButton = document.createElement('button');
    learnMoreButton.classList.add('learn-more');
    learnMoreButton.textContent = 'Learn More';
    learnMoreButton.dataset.index = currentIndex;
    hoverContent.appendChild(learnMoreButton);

    item.appendChild(hoverContent);
    carousel.appendChild(item);

    learnMoreButton.addEventListener('click', () => {
      showPopupMenu(currentIndex);
    });
  };

  closeBtn.addEventListener('click', () => {
    popupMenu.style.display = 'none';
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    updateCarousel();
  });

  updateCarousel();

  // Adding three images below the carousel
  const additionalImagesContainer = document.querySelector('#additional-images');
  const additionalImages = [
    'assets/black-plaindrome-.png',
    'assets/roman-converter.png',
    'assets/first-portfolio.png',
  ];

  additionalImages.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Additional Image';
    img.classList.add('additional-image');
    additionalImagesContainer.appendChild(img);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const circles = document.querySelectorAll('.circle');
  circles.forEach((circle) => {
    const percentage = circle.getAttribute('data-percentage');
    circle.style.setProperty('--percentage', percentage);
  });
});
