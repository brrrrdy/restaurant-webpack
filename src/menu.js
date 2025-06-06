function loadMenu() {
  const content = document.getElementById("content");

  const menuDiv = document.createElement("div");
  menuDiv.innerHTML = `
    <h2>Our Menu</h2>
    <ul>
      <li>Greek Salad</li>
      <li>Caesar Salad</li>
      <li>Quinoa Veggie Bowl</li>
    </ul>
  `;

  content.appendChild(menuDiv);
}

export default loadMenu;
