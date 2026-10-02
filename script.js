/* =========================================
   3D CARD EFFECT
========================================= */

const card = document.getElementById("animeCard");
const scene = document.querySelector(".scene");


if (card && scene) {

    scene.addEventListener("mousemove", function (event) {

        if (window.innerWidth <= 800) {
            return;
        }

        const rect = scene.getBoundingClientRect();

        const mouseX =
            event.clientX - rect.left;

        const mouseY =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateY =
            (mouseX - centerX) / 20;

        const rotateX =
            (centerY - mouseY) / 20;


        card.style.transform =
            `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });


    scene.addEventListener("mouseleave", function () {

        card.style.transform =
            "rotateY(-14deg) rotateX(7deg)";
    });

}


/* =========================================
   SCROLL ANIMATION
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".feature-card, .team-card, .join-box"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(function (element) {

    element.classList.add("hidden");

    observer.observe(element);

});


/* =========================================
   BUTTON CLICK EFFECT
========================================= */

const buttons =
    document.querySelectorAll(
        ".join-button, .big-join, .contact-button"
    );


buttons.forEach(function (button) {

    button.addEventListener(
        "mousedown",
        function () {

            button.style.transform =
                "scale(.96)";

        }
    );


    button.addEventListener(
        "mouseup",
        function () {

            button.style.transform = "";

        }
    );

});