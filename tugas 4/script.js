
const btn = document.getElementById("topButton");

// Tombol muncul setelah scroll 500px
window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        btn.style.display = "block";
        btn.style.transform = "scale(1)";
    } else {
        btn.style.display = "none";
    }
});

// Efek saat tombol ditekan
btn.addEventListener("click", function() {
    btn.style.transform = "scale(0.9)";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setTimeout(function() {
        btn.style.transform = "scale(1)";
    }, 300);
});

// Efek hover
btn.addEventListener("mouseenter", function() {
    btn.style.opacity = "1";
});

btn.addEventListener("mouseleave", function() {
    btn.style.opacity = "0.6";
});
