const text = ["Java Full Stack Developer", "Spring Boot Developer", "Frontend Developer"];
let i = 0, j = 0, current = "", isDeleting = false;
const typing = document.querySelector(".typing");

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      current = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = text[i].substring(0, j--);
    }

    typing.innerHTML = current;

    if (j === text[i].length) isDeleting = true;
    if (j === 0) {
      isDeleting = false;
      i++;
    }
  } else {
    i = 0;
  }
  setTimeout(type, isDeleting ? 50 : 100);
}

// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
type();