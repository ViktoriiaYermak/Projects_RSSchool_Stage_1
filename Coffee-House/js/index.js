// Burger Menu

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("burger").addEventListener("click", function() {

        document.querySelector(".header").classList.toggle("active")
        document.querySelector(".burger-menu-list").classList.toggle("open")

        if (document.body.classList.contains('no-scroll')) {
            document.body.classList.remove('no-scroll');
        } else {
            document.body.classList.add('no-scroll');
        }
    })

});

document.querySelectorAll("li").forEach(link => {

    link.addEventListener("click", () => {
        document.querySelector(".header").classList.remove("active")
        document.querySelector(".burger-menu-list").classList.remove("open")
        document.body.classList.remove('no-scroll');
    });

});

document.querySelectorAll(".header-burger-menu-item").forEach(link => {

    link.addEventListener("click", () => {
        document.querySelector(".header").classList.remove("active")
        document.querySelector(".burger-menu-list").classList.remove("open")
        document.body.classList.remove('no-scroll');
    });

});