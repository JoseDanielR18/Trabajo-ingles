function revelar () {
    var reveals = document.querySelectorAll(".revelar");

    reveals.forEach((revelar) => {
        var windowHeight = window.innerHeight;
        var elementTop = revelar.getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            revelar.classList.add("active");
        } else {
            revelar.classList.remove("active");
        }

    });
}

window.addEventListener("scroll", revelar);