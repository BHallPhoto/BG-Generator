let color1 = document.querySelector(".color1"),
    color2 = document.querySelector(".color2"),
    css = document.querySelector("h3"),
    body = document.getElementById("gradient"),
    button = document.getElementById("copy"),
    random = document.getElementById("random"),
    angles = document.querySelectorAll(".angle-select");

// console.log(document.querySelectorAll(".angle-select")[0]);

function setGradient(a) {
  // console.log(a)
  let bgColor = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  body.style.background = bgColor;
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