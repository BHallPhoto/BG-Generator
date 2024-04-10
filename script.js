let color1 = document.querySelector(".color1"),
    color2 = document.querySelector(".color2"),
    css = document.querySelector("h3"),
    body = document.getElementById("gradient"),
    button = document.getElementById("copy"),
    random = document.getElementById("random");

console.log(document.styleSheets[1])

function setGradient() {
  let bgColor = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  body.style.background = bgColor;
  document.styleSheets[1].cssRules[5].style.background = bgColor;
  document.styleSheets[1].cssRules[8].style.background = bgColor;
  css.textContent = "background: " + body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", () => {
  color1.setAttribute("value", "#"+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, "0"));
  color2.setAttribute("value", "#"+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, "0"));
  setGradient()
})

button.addEventListener("click", () => {
  let copyText = document.getElementById("copytext");
  navigator.clipboard.writeText(copyText.innerText);
});