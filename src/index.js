import loadHomepage from "./homepage";
import loadMenu from "./menu";
import loadContact from "./contact";
import loadAbout from "./about";

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

loadHomepage();

document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const tab = e.target.textContent;
    clearContent();

    if (tab === "Home") loadHomepage();
    else if (tab === "Menu") loadMenu();
    else if (tab === "About") loadAbout();
    else if (tab === "Contact") loadContact();
  }
});
