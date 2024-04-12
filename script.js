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
  let bgColor = `linear-gradient(${a}, ${color1.value}, ${color2.value})`;
  body.style.background = bgColor;
  css.textContent = "background: " + body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", () => {
  debugger;
  let gradAng = "to right";
  color1.setAttribute("value", "#"+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, "0"));
  color2.setAttribute("value", "#"+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, "0"));
  for (let i = 0; i < angles.length; i++) {
    // console.log(angles[i].id);
    switch (true) {
      case angles[i].id === "to-right":
        gradAng = "to right";
        break;
      case angles[i].id === "to-bottom":
        gradAng = "to bottom";
        break;
      case angles[i].id === "bottom-right":
        gradAng = "to bottom right";
        break;
      case angles[i].id === "bottom-left":
        gradAng = "to bottom left";
        break;
      default:
    }
  }
  setGradient(gradAng)
})

for (let i = 0; i < angles.length; i++) {
  angles[i].addEventListener("click", (e) => {
    // console.log(e.target.id)
    switch(true) {
      case e.target.id === "to-right":
        setGradient("to right");
        break;
      case e.target.id === "to-bottom":
        setGradient("to bottom");
        break;
      case e.target.id === "bottom-right":
        setGradient("to bottom right");
        break;
      case e.target.id === "bottom-left":
        setGradient("to bottom left");
        break;
      default:
        setGradient("to left");      
    }
  })
}

button.addEventListener("click", () => {
  let copyText = document.getElementById("copytext");
  navigator.clipboard.writeText(copyText.innerText);
});