function loadAbout() {
  const content = document.getElementById("content");

  const aboutDiv = document.createElement("div");
  aboutDiv.innerHTML = `
    <h2>About Smiling Salads</h2>
    <p>
      We are very cool.
    </p>
  `;

  content.appendChild(aboutDiv);
}

export default loadAbout;
