const accordion = document.querySelectorAll(".block");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    // Check if the clicked element already has the "active" class
    const isOpen = this.classList.contains("active");

    // Remove "active" class from all elements with a delay
    for (let j = 0; j < accordion.length; j++) {
      accordion[j].classList.remove("active");
    }

    // If the clicked element wasn't open, open it after a delay
    if (!isOpen) {
      setTimeout(() => {
        this.classList.add("active");
      }, accordion.length * 120);
    }
  });
}
