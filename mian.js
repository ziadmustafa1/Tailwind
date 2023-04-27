const btn = document.querySelector("#btn");
const btnminu = document.querySelector("#btnminu");

btnminu.addEventListener('click', () => {
  btnminu.classList.add("hidden");
});

btn.addEventListener('click', () => {
  if (window.innerWidth < 768) {
    btnminu.classList.toggle("hidden");
  }
});