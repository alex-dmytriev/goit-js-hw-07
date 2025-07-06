const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
const titleEl = document.querySelector("h1");

const onInput = (e) => {
  const input = e.currentTarget;

  if (input.value.trim().length > 0) {
    nameOutputEl.textContent = input.value.trim();
  } else {
    nameOutputEl.textContent = "Anonymous";
  }
};

inputEl.addEventListener("input", onInput);

//Styling
Object.assign(inputEl.style, {
  font: "400 16px / 1.5 'Montserrat', sans-serif",
  letterSpacing: "0.04em",
  color: "#2e2f42",
  paddingLeft: "16px",
  width: "360px",
  border: "1px solid #808080",
  borderRadius: "4px",
});

Object.assign(titleEl.style, {
  font: "600 24px/1.33333 'Montserrat', sans-serif",
  letterSpacing: "0.04em",
  color: "#2e2f42",
});
