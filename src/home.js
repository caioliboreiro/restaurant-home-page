function home() {
  const content = document.querySelector("#content");
  content.style.position = "relative";
  content.style.backgroundImage =
    "url('https://ewenbell.com/10k/hdcache/Special/honeycomb-6878.jpg')";

  const homeContent = document.createElement("div");
  homeContent.classList.toggle("home-content");

  const catchphrase = document.createElement("h1");
  catchphrase.classList.toggle("catchphrase");
  catchphrase.textContent = "Encha o seu estômago com comida saudável.";

  const makeOrderBtn = document.createElement("button");
  makeOrderBtn.classList.toggle("make-orderBtn");
  makeOrderBtn.textContent = "Fazer Pedido";

  homeContent.appendChild(catchphrase);
  homeContent.appendChild(makeOrderBtn);

  content.appendChild(homeContent);
}

export default home;
