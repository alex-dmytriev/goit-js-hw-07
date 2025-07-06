function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

const onClick = (e) => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
};

btnEl.addEventListener("click", onClick);

// Widget Styling
const widgetEl = document.querySelector(".widget");

Object.assign(widgetEl.style, {
  display: "flex",
  flexDirection: "column",
  width: "345px",
  alignItems: "center",
});

// Text Styling
const textEl = document.querySelector(".widget > p");

Object.assign(textEl.style, {
  font: "400 16px / 1.5 'Montserrat', sans-serif",
  letterSpacing: "0.04em",
  color: "#2e2f42",
});

// Button Styling
Object.assign(btnEl.style, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: "10px",
  borderRadius: "8px",
  padding: "8px 16px",
  width: "148px",
  height: "40px",
  border: "none",
  backgroundColor: "#4e75ff",
  font: "500 16px / 1.5 'Montserrat', sans-serif",
  letterSpacing: "0.04em",
  color: "#fff",
});
