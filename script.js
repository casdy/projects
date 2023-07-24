// Sample project data for demonstration
const projectsData = [{
        title: 'Project 1',
        description: 'This is a sample project description 1.',
        imageSrc: 'project1.jpg',
        link: 'https://example.com/project1'
    },
    {
        title: 'Project 2',
        description: 'This is a sample project description 2.',
        imageSrc: 'project2.jpg',
        link: 'https://example.com/project2'
    },
    // Add more projects here
    {
        title: 'Project 3',
        description: 'This is a sample project description 2.',
        imageSrc: 'project2.jpg',
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

    const projectImage = document.createElement('img');
    projectImage.src = project.imageSrc;
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

    projectsData.forEach(project => {
        const projectElement = createProjectElement(project);
        projectsContainer.appendChild(projectElement);
    });
});