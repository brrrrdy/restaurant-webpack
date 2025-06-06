import homeImage from "./images/home.png";

function loadHomepage() {
  const content = document.getElementById("content");

  const img = document.createElement("img");
  img.src = homeImage;
  img.alt = "A woman smiling eating a salad";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "We make the best salads to ensure the biggest smiles.";

  content.appendChild(img);
  content.appendChild(paragraph);
}

export default loadHomepage;
