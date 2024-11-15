function menu() {
  function createProduct(name, description, price) {
    const product = document.createElement("li");
    product.classList.toggle("product-section");

    const productTitle = document.createElement("h2");
    productTitle.classList.toggle("product-title");
    productTitle.textContent = name;

    const productDescription = document.createElement("p");
    productDescription.classList.toggle("product-description");
    productDescription.textContent = description;

    const productPrice = document.createElement("h2");
    productPrice.classList.toggle("product-price");
    productPrice.textContent = `R$${price},00`;

    const productImg = document.createElement("div");
    productImg.classList.toggle("product-img");

    product.appendChild(productTitle);
    product.appendChild(productDescription);
    product.appendChild(productPrice);
    product.appendChild(productImg);
    return product;
  }

  function appendChildren(parent, ...children) {
    for (const child of children) {
      parent.appendChild(child);
    }
  }

  const content = document.querySelector("#content");

  const menuTitle = document.createElement("h1");
  menuTitle.classList.toggle("menu-title");

  const menuSubtitle1 = document.createElement("h1");
  menuSubtitle1.classList.toggle("menu-subtitle");
  menuSubtitle1.textContent = "Refeições Principais";

  const mainDishes = document.createElement("ul");
  mainDishes.classList.toggle("main-dishes");

  const product1 = createProduct(
    "Strongoff",
    "Feito ao Estilo Brasileiro, com batata palha!",
    15
  );
  const product2 = createProduct(
    "Feijão Tropeiro",
    "Prato Clássico Paulista!",
    20
  );
  const product3 = createProduct(
    "Caldo de Mandioca",
    "Perfeito para Esquentar no Frio!",
    10
  );

  mainDishes.appendChild(product1);
  mainDishes.appendChild(product2);
  mainDishes.appendChild(product3);

  const menuSubtitle2 = document.createElement("h1");
  menuSubtitle2.classList.toggle("menu-subtitle");
  menuSubtitle2.textContent = "Sobremesas";

  const desserts = document.createElement("ul");
  desserts.classList.toggle("desserts");

  const product4 = createProduct(
    "Pudim",
    "Ótima opção para um jantar romântico, uma celebração especial ou simplesmente para se" +
      "deliciar com algo doce e delicioso",
    15
  );
  const product5 = createProduct(
    "Mousse de Maracujá",
    "Sobremesa refrescante e leve que" +
      " é perfeita para os dias quentes de verão",
    20
  );

  desserts.appendChild(product4);
  desserts.appendChild(product5);

  const menuSubtitle3 = document.createElement("h1");
  menuSubtitle3.classList.toggle("menu-subtitle");
  menuSubtitle3.textContent = "Bebidas";

  const beverages = document.createElement("ul");
  beverages.classList.toggle("beverages");

  const product6 = createProduct(
    "Limonada",
    "Bebida refrescante e clássica que" +
      "é perfeita para os dias quentes de verão",
    6
  );

  beverages.appendChild(product6);

  appendChildren(
    content,
    menuTitle,
    menuSubtitle1,
    mainDishes,
    menuSubtitle2,
    desserts,
    menuSubtitle3,
    beverages
  );
}

export default menu;
