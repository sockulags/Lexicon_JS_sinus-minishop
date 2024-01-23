![poster](poster.png)

# DOM exercises
## Kom igång 
Ladda ner sinus minishop. All din kod ska skrivas i *script.js*.
I denna övning kommer du få öva på:

- Leta reda på saker i DOM och ändra innehåll
- Lyssna efter events på olika element
- Lägga till ny HTML med JS


## DOM Selecta!
![screen](screen.png)

**1.** Byt *namn* på första hoodien från *Ash* till *Potato*.
```js
const hoodieOne =  document.querySelector(".art-1 h3")
hoodieOne.innerText = "Potato"
```

<details>
    <summary>Tips</summary>
    använd .innerText
</details>

**2.** Byt *namn* på *Home* till *Start*.
```js
const home = document.querySelector("nav").firstElementChild;
home.innerText = "Start"
```

**3.** Byt *namn* på *Contact* till *Mail Us*.
```js
Array.from(document.querySelectorAll('*'))
    .filter(element => element.innerText === "Contact")
    .forEach(element=> element.innerText = "Mail Us");
```

**4.** Byt ut informationen om *Sinus Hoodie  - Fire*.
```js
document.querySelector(".art-2 p").innerText = "Some other information about this hoodie";
```

**5.** Byt *bakgrundsfärg* och *text* på en knapp.

<details>
    <summary>Tips</summary>
    använd el.style.backgroundColor
</details>

```js
const btn = document.querySelector(".art-2 button");
btn.style.backgroundColor = "red";
btn.innerText="BUY";
```

**6.** Byt bakgrundsfärg på någon av produkterna.
```js
document.querySelector(".art-2 figure").style.backgroundColor = "lightgreen"
```

**7.** Byt ut adressen på sidan.
```js
const addressChange = document.querySelector("section article p");
const newAddress = addressChange.innerText.split("\n");
newAddress[1] = "Nygatan 23";
newAddress[2] = "70255 Örebro";
addressChange.innerHTML = newAddress.join("<br>");
```

**8.** Byt färg på samtliga `<p>`.
<details>
    <summary>Tips</summary>
    använd .querySelectorAll()
</details>

```js
document.querySelectorAll("p").forEach(p => p.style.color = "hotpink");
```

**9.** Ändra text på samtliga knappar till *add to cart*.
```js
document.querySelectorAll("button").forEach(button => {
    button.innerText = "Add to cart";
});
```

**10.** Lägg till classen *active* på menyalternativet *home*.
<details>
    <summary>Tips</summary>
    använd el.classList.add()
</details>

```js
home.classList.add("active") 
```
**11.** Ta bort classen *logo* på logotypen.
<details>
    <summary>Tips</summary>
    använd el.classList.remove()
</details>

```js
document.querySelector(".logo").classList.remove("logo");
```

## Add Content

**12.** Lägg till ett nytt menyalternativ.
```js
const newOption = Object.assign(document.createElement("a"), { href: "#", innerText: "New Option" });
document.querySelector("nav img").insertAdjacentElement("beforebegin",newOption);
document.querySelector("section").firstElementChild.appendChild(newOption);
```

**13.** Lägg till en ny produkt med följande info.

|el|beskrivning|
|---|---|
|img |hoodie-forrest.png|
|h2 | Sinus Hoodie |
|h3 |Forrest|
|p|Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.|

<details>
    <summary>Tips</summary>
    använd el.insertAdjecentHTML('beforeend',...)
</details>

```js
const createNewElement = (tag, props) => Object.assign(document.createElement(tag), props);
const newProduct = createNewElement("article", {classList: ["art-4"]});
newProduct.append(
    createNewElement("figure", {innerHTML: "<img src='img/hoodie-forrest.png' alt='hoodie'/>"   }),
    createNewElement("h2", {innerText: "Sinus Hoodie"}),
    createNewElement("h3", {innerText: "Forrest"}),
    createNewElement("p", {innerText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores."}),
    createNewElement("button", {innerText: "Add to cart"})
);
document.querySelector("main").appendChild(newProduct);
```

## Events
**14.** Lyssna efter ett klick på logotypen (```.logo```). När den registrerar ett klick skall du console.log:a "found you!";

```js
//I have removed it in an earlier, so we just get the element.
// document.querySelector(".logo").classList.remove("logo");
document.querySelector("header img").addEventListener("click", function(){
    console.log("Found you!");
})
```

**15.** Lyssna efter klick på samtliga produkter ( ```<article>```). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".
```js
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

```
