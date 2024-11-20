document.addEventListener("DOMContentLoaded", function() {
    const closeBtn = document.getElementById("close-btn");
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
   
    hamburger.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });

    closeBtn.addEventListener("click", function() {
        sidebar.classList.remove("active");
    });
});