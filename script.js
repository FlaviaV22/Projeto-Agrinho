window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  header.classList.toggle("ativo", window.scrollY > 50);

});