

const projects = [
    {
        title: "KTH Formula Student",
        image: "images/kth_formula_student_logo.jpg",
        description: "I've been a part of KTH Formula Student since 2022. I started out as a software developer in the Driverless division, and I am now the Head of Software Development in the Driverless division. Being Head of Software Development entails developing monitoring software for our autonomous vehicle, as well as developing software for our simulators. Further, I am also responsible for our in-house computing, networking, and storage infrastructure. Feel free to visit <a href=\"https://kthformulastudent.se/\">our website</a>"
    },
    {
        title: "Flutter Game App",
        image: "images/flutter.png",
        description: "I am currently working with a friend on developing a game app using Flutter. The game is a simple 2D game where the player controls a character and tries to avoid obstacles. The game is developed using Flutter and Flame. The game is currently in development, and we am planning to release it on the Google Play Store and the Apple App Store in the near future. The inspiration to this project came from a Flame workshop we attended in fall of 2023"
    },
    {
        title: "Museum Exhibition App",
        image: "images/tekniska.png",
        description: "As part of a course in Software Engineering, I together with 7 other students, developed an app for the Tekniska Museet in Stockholm for their Zero City exhibition. The app was developed using Flutter. This project also included leadership and teamwork, we had a rotating Scrum agile development team, so I served as Scrum Master and Project Owner during different sprints. During the remaining sprints, I was a developer. This project was conducted from the fall of 2021 to the spring of 2022"
    },
    {
        title: "Internet Programming Game",
        image: "images/roguelike.png",
        description: "As part of a course in Programming Paradigms, I developed a Rougelike game with PyGame played through a server-client TCP socket communication. The game was developed in Python, using JSON serialization for the communication. The networking aspect allowed for multiple games and players be able to play in parallel through the server and network configurations. The game was developed during the spring of 2022."
    }
];

const projectContainer = document.getElementById("project-container");
projects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("col-md-4", "mb-4");
    projectCard.innerHTML = `
    <div class="card aos-animate" data-aos="fade-up" data-aos-delay="200">
        <div class="position-relative">
            <img src="${project.image}" class="card-img-top" alt="Project Image">
            <div class="overlay d-flex align-items-center justify-content-center">
                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#project-modal" data-project-index="${index}">Learn More</button>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
        </div>
    </div>
`;
    projectContainer.appendChild(projectCard);

    const modalButton = projectCard.querySelector("button[data-target='#project-modal']");
    modalButton.addEventListener("click", () => {
        const modalImage = document.getElementById("project-modal-image");
        const modalDescription = document.getElementById("project-modal-description");
        const modalTitle = document.getElementById("project-modal-title");
        modalImage.src = project.image;
        modalDescription.textContent = project.description;
        modalTitle.textContent = project.title;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var options = {
        strings: ["Hey, I'm Thomas"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000,
        startDelay: 500,
        showCursor: false,
        cursorChar: '|',
        loop: false
    };
    var options2 = {
        strings: ["This is my personal website!"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000,
        startDelay: 2000,
        showCursor: false,
        cursorChar: '_',
        loop: false
    };

    var typed = new Typed("#typed-output-h1", options);
    var typed = new Typed("#typed-output-p", options2);
});

function smoothScroll(event) {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Get the target element
    var target = document.querySelector(event.target.hash);

    // Calculate the distance to scroll
    var distance = target.getBoundingClientRect().top;

    // Scroll to the target element
    window.scrollBy({
        top: distance,
        left: 0,
        behavior: 'smooth'
    });
}

var scrollToTopButton = document.getElementById("scroll-to-top");

window.onscroll = function () {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        scrollToTopButton.classList.remove("d-none");
    } else {
        scrollToTopButton.classList.add("d-none");
    }
};

scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
