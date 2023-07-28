// Sample project data for demonstration
const projectsData = [{
        title: 'Project 1',
        description: 'This is a sample project description 1.',
        imageSrc: 'home.JPG',
        link: 'https://calebojukwu.vercel.app/'
    },
    {
        title: 'JUUK- Photo Editor',
        description: 'An image editor application with multiple features. Users can apply various filters like saturation, blur, brightness, and contrast using sliders to modify image appearance in real-time. The app also allows rotating the image clockwise or counterclockwise by 90 degrees and flipping it horizontally or vertically. Users can load a new image for editing, and the app resets previous edits. After applying desired filters and transformations, users can save the edited image. The app generates a canvas, applies selected filters and transformations, and offers a download link for the edited image. It provides a user-friendly interface for in-browser image manipulation without server-side processing.',
        imageSrc: 'editor.jpg',
        link: 'https://juuk-editor.vercel.app/'
    },
    // Add more projects here
    {
        title: 'JUUK-Dictionary',
        description: 'An interactive dictionary app that uses the free dictionary API to retrieve word meanings, phonetics, synonyms, and source URLs. The app allows users to search for words and displays relevant information on the interface. It features a search input field with a keyup event listener to trigger word searches, a loading message during API requests, and error messages if no meaning is found. Users can listen to word pronunciations by clicking the speak button. Additionally, the app provides a remove icon to clear the search input and reset the UI. Overall, the app offers a user-friendly vocabulary exploration experience.',
        imageSrc: 'dictionary.jpg',
        link: 'https://juuk-dictionary.vercel.app/'
    }, {
        title: 'Password Generator',
        description: 'a password generator that allows users to customize the password based on their preferences. The code takes into account the length and type of the password specified by the user. If the password type is "passphrase," the code asynchronously loads an external words.js file using the Fetch API. It then generates a passphrase by randomly selecting words from the loaded words array and displays the passphrase in the password container. On the other hand, for other password types, the code generates a random password consisting of alphanumeric characters, with the option to include special characters if requested. Overall, the code aims to offer a flexible and secure way for users to generate and manage passwords for their needs.',
        imageSrc: 'pgenerator.jpg',
        link: 'https://password-generator-eng.vercel.app/'
    }, {
        title: 'Project 5',
        description: 'This is a sample project description 2.',
        imageSrc: 'project2.jpg',
        link: 'https://example.com/project2'
    }, {
        title: 'Project 6',
        description: 'This is a sample project description 2.',
        imageSrc: 'project2.jpg',
        link: 'https://example.com/project2'
    },
];

function createProjectElement(project) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    // Construct the complete image URL using the image folder path and the imageSrc value
    const imageFolderPath = 'img/';
    const projectImage = document.createElement('img');
    projectImage.src = imageFolderPath + project.imageSrc;
    projectImage.alt = project.title; // Set the alt attribute for accessibility
    projectElement.appendChild(projectImage);

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;
    projectElement.appendChild(projectTitle);

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
    projectElement.appendChild(projectDescription);

    const projectLink = document.createElement('a');
    projectLink.textContent = 'View Project';
    projectLink.href = project.link;
    projectElement.appendChild(projectLink);

    return projectElement;
}

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.project-grid');

    // Scroll animation for header
    const header = document.querySelector('header');
    const projectsSection = document.getElementById('projects');
    let scrolled = false;

    function updateHeader() {
        if (window.scrollY >= 50) {
            if (!scrolled) {
                header.classList.add('scrolled');
                scrolled = true;
            }
        } else {
            if (scrolled) {
                header.classList.remove('scrolled');
                scrolled = false;
            }
        }
    }

    // Show projects section when it comes into view
    function showProjectsSection() {
        const sectionTop = projectsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 150) {
            projectsSection.classList.add('show');
            window.removeEventListener('scroll', showProjectsSection);
        }
    }

    window.addEventListener('scroll', () => {
        updateHeader();
        showProjectsSection();
    });


    updateHeader();
    showProjectsSection();


    projectsData.forEach(project => {
        const projectElement = createProjectElement(project);
        projectsContainer.appendChild(projectElement);
    });

    // JavaScript
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50, // Adjust the offset based on your header height
                    behavior: 'smooth',
                });
            }
        });
    });

    // JavaScript (inside the DOMContentLoaded event)
    document.addEventListener('DOMContentLoaded', () => {
        const navbarLinks = document.querySelectorAll('.navbar-links a');
        const sections = document.querySelectorAll('section');
        const headerHeight = document.querySelector('header').offsetHeight;

        function highlightCurrentSection() {
            let currentSectionIndex = 0;
            sections.forEach((section, index) => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < headerHeight) {
                    currentSectionIndex = index;
                }
            });

            navbarLinks.forEach((link, index) => {
                link.classList.toggle('active', index === currentSectionIndex);
            });
        }

        window.addEventListener('scroll', highlightCurrentSection);
        highlightCurrentSection(); // Initial highlighting when the page loads
    });


});