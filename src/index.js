import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import loadAbout from "./about";
import createFooter from "./footer";
import "./styles.css";

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

const footer = createFooter();
document.body.appendChild(footer);

loadHome();

document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const tab = e.target.textContent;
    clearContent();

    if (tab === "Home") loadHome();
    else if (tab === "Menu") loadMenu();
    else if (tab === "About") loadAbout();
    else if (tab === "Contact") loadContact();
  }
});
