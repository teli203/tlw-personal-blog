document.addEventListener("DOMContentLoaded", () => {
    // Search button functionality - Navigates to an image
    const searchButton = document.getElementById("btn-1");
    if (searchButton) {
        searchButton.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent form submission (if inside a form)
            window.location.href = "/assets/imgs/a-coder-img.png";
        });
    }
});

