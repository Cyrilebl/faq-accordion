const blockSubtitle = document.querySelectorAll(".block__subtitle");
const blockText = document.querySelectorAll(".block__text");
const button = document.querySelectorAll(".button");

let currentlyOpenIndex = null;

blockSubtitle.forEach(function (subtitle, index) {
  subtitle.addEventListener("click", () => {
    // Find the corresponding "block__text" for the current "block__subtitle"
    let text = blockText[index];
    let buttonImg = button[index];

    // Check if the clicked subtitle is already open
    if (currentlyOpenIndex === index) {
      // Close the associated "block__text" and update the button image
      text.style.display = "none";
      buttonImg.src = "assets/images/icon-plus.svg";
      currentlyOpenIndex = null;
    } else {
      // Check if there is a currently open text block
      if (currentlyOpenIndex !== null) {
        blockText[currentlyOpenIndex].style.display = "none";
        button[currentlyOpenIndex].src = "assets/images/icon-plus.svg";
      }

      // Toggle the visibility of the clicked blockText
      text.style.display = "block";
      buttonImg.src = "assets/images/icon-minus.svg";
      currentlyOpenIndex = index;
    }
  });
});
