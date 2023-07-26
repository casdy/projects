// Sample project data for demonstration
const projectsData = [{
        title: 'Project 1',
        description: 'This is a sample project description 1.',
        imageSrc: 'home.JPG',
        link: 'https://calebojukwu.vercel.app/'
    },
    {
        title: 'Project 2',
        description: 'This is a sample project description 2.',
        imageSrc: 'editor.jpg',
        link: 'https://example.com/project2'
    },
    // Add more projects here
    {
        title: 'Project 3',
        description: 'This is a sample project description 2.',
        imageSrc: 'dictionary.jpg',
        link: 'https://example.com/project2'
    }, {
        title: 'Project 4',
        description: 'This is a sample project description 2.',
        imageSrc: 'project2.jpg',
        link: 'https://example.com/project2'
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
});