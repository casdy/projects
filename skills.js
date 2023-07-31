// skill data
const skillsData = [{

        // Add more skills here
        imageSrc: 'html.jpg',
    },
    {

        imageSrc: 'css.jpg',
    },

    {

        imageSrc: 'js.jpg',

    },

    {

        imageSrc: 'react.jpg',

    },

    {

        imageSrc: 'python.jpg',

    },


    {

        imageSrc: 'git.jpg',

    },

    {

        imageSrc: 'vscode.jpg',

    },
];

function createskillElement(skill) {
    const skillElement = document.createElement('div');
    skillElement.classList.add('skill');

    // Construct the complete image URL using the image folder path and the imageSrc value
    const imageFolderPath = 'img/';
    const skillImage = document.createElement('img');
    skillImage.src = imageFolderPath + skill.imageSrc;
    skillImage.alt = skill.title; // Set the alt attribute for accessibility
    skillElement.appendChild(skillImage);

    const skillTitle = document.createElement('h3');
    skillTitle.textContent = skill.title;
    skillElement.appendChild(skillTitle);

    const skillDescription = document.createElement('p');
    skillDescription.textContent = skill.description;
    skillElement.appendChild(skillDescription);


    return skillElement;
}

document.addEventListener('DOMContentLoaded', () => {
    const skillsContainer = document.querySelector('.skill-grid');

    // Scroll animation for header
    const header = document.querySelector('header');
    const skillsSection = document.getElementById('skills');
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

    // Show skills section when it comes into view
    function showskillsSection() {
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 150) {
            skillsSection.classList.add('show');
            window.removeEventListener('scroll', showskillsSection);
        }
    }

    window.addEventListener('scroll', () => {
        updateHeader();
        showskillsSection();
    });


    updateHeader();
    showskillsSection();


    skillsData.forEach(skill => {
        const skillElement = createskillElement(skill);
        skillsContainer.appendChild(skillElement);
    });

    // Function to download the resume when the button is clicked
    function downloadResume() {
        // Caleb Ojukwu_23.pdf'
        const resumeUrl = 'file/Caleb Ojukwu_23pdf';

        // Create an anchor element to initiate the download
        const anchor = document.createElement('a');
        anchor.href = resumeUrl;

        // Set the download attribute to specify the filename for the downloaded file
        anchor.download = 'My_Resume.pdf';

        // Append the anchor element to the body and trigger the download
        document.body.appendChild(anchor);
        anchor.click();

        // Remove the anchor element from the body after the download is initiated
        document.body.removeChild(anchor);
    }

    // Add event listener to trigger downloadResume function when the button is clicked
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', downloadResume);

});