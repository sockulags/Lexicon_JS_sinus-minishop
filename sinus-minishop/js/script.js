const hoodieOne = document.querySelector(".art-1 h3");
hoodieOne.innerText = "Potato";

const home = document.querySelector("nav").firstElementChild;
home.innerText = "Start";

Array.from(document.querySelectorAll("*"))
  .filter((element) => element.innerText === "Contact")
  .forEach((element) => (element.innerText = "Mail Us"));

document.querySelector(".art-2 p").innerText =
  "Some other information about this hoodie";

const btn = document.querySelector(".art-2 button");
btn.style.backgroundColor = "red";
btn.innerText = "BUY";

document.querySelector(".art-2 figure").style.backgroundColor = "lightgreen";

const addressChange = document.querySelector("section article p");
const newAddress = addressChange.innerText.split("\n");
newAddress[1] = "Nygatan 23";
newAddress[2] = "70255 Örebro";
addressChange.innerHTML = newAddress.join("<br>");

document.querySelectorAll("p").forEach((p) => (p.style.color = "hotpink"));

document.querySelectorAll("button").forEach((button) => {
  button.innerText = "Add to cart";
});

home.classList.add("active");

document.querySelector(".logo").classList.remove("logo");

const newOption = Object.assign(document.createElement("a"), {
  href: "#",
  innerText: "New Option",
});
document
  .querySelector("nav img")
  .insertAdjacentElement("beforebegin", newOption);
document.querySelector("section").firstElementChild.appendChild(newOption);

const createNewElement = (tag, props) =>
  Object.assign(document.createElement(tag), props);
const newProduct = createNewElement("article", { classList: ["art-4"] });
newProduct.append(
  createNewElement("figure", {
    innerHTML: "<img src='img/hoodie-forrest.png' alt='hoodie'/>",
  }),
  createNewElement("h2", { innerText: "Sinus Hoodie" }),
  createNewElement("h3", { innerText: "Forrest" }),
  createNewElement("p", {
    innerText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.",
  }),
  createNewElement("button", { innerText: "Add to cart" })
);
document.querySelector("main").appendChild(newProduct);

//I have removed it in an earlier, so we just get the element.
// document.querySelector(".logo").classList.remove("logo");
document.querySelector("header img").addEventListener("click", function () {
  console.log("Found you!");
});

document.querySelector("main").addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    console.log(
      `Hi, Im article ${
        event.target.parentNode.parentNode.querySelector("h3").innerText
      }`
    );
  } else if (event.target.tagName !== "MAIN") {
    console.log(
      `Hi, Im article ${event.target.parentNode.querySelector("h3").innerText}`
    );
  }
});
