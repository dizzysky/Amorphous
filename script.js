// script.js
document.addEventListener("DOMContentLoaded", () => {
    const amorphousObject = document.querySelector(".amorphous-object");

    // Optionally, you can add more complex animations or interactions here
    // For example, changing the color or size on mouse events
    amorphousObject.addEventListener("mouseover", () => {
        amorphousObject.style.background =
            "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%)";
    });

    amorphousObject.addEventListener("mouseout", () => {
        amorphousObject.style.background =
            "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 70%)";
    });
});
