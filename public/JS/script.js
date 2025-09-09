document.querySelectorAll(".favorite-form").forEach(form => {
  form.addEventListener("submit", function(e) {
    const button = form.querySelector(".favorite-btn i");

    // Toggle color immediately
    if (button.classList.contains("fa-regular")) {
      button.classList.remove("fa-regular", "text-white");
      button.classList.add("fa-solid", "text-danger");
    } else {
      button.classList.remove("fa-solid", "text-danger");
      button.classList.add("fa-regular", "text-white");
    }
  });
});
