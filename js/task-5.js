function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.querySelector("body"),
  btnEl: document.querySelector(".change-color"),
  spanEl: document.querySelector(".color"),
  widgetEl: document.querySelector(".widget"),
  textEl: document.querySelector(".widget > p"),
};

const onClick = (e) => {
  const randColor = getRandomHexColor();

  refs.bodyEl.style.backgroundColor = randColor;
  refs.spanEl.textContent = randColor;
};

refs.btnEl.addEventListener("click", onClick);

// Widget Styling

Object.assign(refs.widgetEl.style, {
  display: "flex",
  flexDirection: "column",
  width: "345px",
  alignItems: "center",
  padding: "100px 88px",
});

// Text Styling
Object.assign(refs.textEl.style, {
  font: "400 16px / 1.5 'Montserrat', sans-serif",
  letterSpacing: "0.04em",
  color: "#2e2f42",
});

// Button Styling
Object.assign(refs.btnEl.style, {
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
