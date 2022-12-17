///////////////////////////////////////////////////
// DOM CHALLENGE
///////////////////////////////////////////////////
// header

let logo = document.createElement("div");
logo.className = "logo";
logo.textContent = "Ahmed";
logo.style.cssText = "color: green;font-weight: bold;font-size: 2em";

let home = document.createElement("li");
home.textContent = "Home";
let about = document.createElement("li");
about.textContent = "About";
let service = document.createElement("li");
service.textContent = "Service";
let contact = document.createElement("li");
contact.textContent = "Contact";
let ul = document.createElement("ul");
ul.appendChild(home);
ul.appendChild(about);
ul.appendChild(service);
ul.appendChild(contact);
ul.style.cssText = "display: flex;list-style-type: none;gap: 1em;color: #777;";
let nav = document.createElement("nav");
nav.appendChild(ul);

let header = document.createElement("header");
header.appendChild(logo);
header.appendChild(nav);
header.style.cssText =
  "display: flex; justify-content: space-between;height: 75px; align-items: center;padding-inline: 2rem";

// main

let main = document.createElement("main");
main.style.cssText =
  "background-color: #eee;display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;padding: 2rem;";

let box;
for (let i = 0; i < 15; i++) {
  box = document.createElement("div");
  box.style.cssText =
    "text-align: center;background-color: #fff;padding: 2rem; border-radius: 5px";

  let span = document.createElement("span");
  span.textContent = i + 1;
  span.style.cssText = "display: block;font-weight: bold; font-size: 2rem;";

  let span2 = document.createElement("span");
  span2.textContent = "Product";
  span2.style.cssText =
    "color: #777; margin-top: 10px; display: block;letter-spacing: 2px";

  box.appendChild(span);
  box.appendChild(span2);

  main.appendChild(box);
}

let footerP = document.createElement("p");
footerP.textContent = "Copyright 2022";
footerP.style.cssText = "color: #fff; font-weight: bold; font-size:1.5rem";

let footer = document.createElement("footer");
footer.appendChild(footerP);
footer.style.cssText =
  "background-color: green;padding: .5rem; text-align: center;";

let body = document.body;
body.style.cssText = "font-family: arial;background-color: #fff;";
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);
