const refs = {
  inputEl: document.querySelector("#name-input"),
  nameOutputEl: document.querySelector("#name-output"),
  titleEl: document.querySelector("h1"),
};

const onInput = (e) => {
  const input = e.currentTarget;

  if (input.value.trim().length > 0) {
    refs.nameOutputEl.textContent = input.value.trim();
  } else {
    refs.nameOutputEl.textContent = "Anonymous";
  }
};

refs.inputEl.addEventListener("input", onInput);

//Styling
Object.assign(refs.inputEl.style, {
  font: "400 16px / 1.5 'Montserrat', sans-serif",
  letterSpacing: "0.04em",
  color: "#2e2f42",
  paddingLeft: "16px",
  width: "360px",
  border: "1px solid #808080",
  borderRadius: "4px",
});

Object.assign(refs.titleEl.style, {
  font: "600 24px/1.33333 'Montserrat', sans-serif",
  letterSpacing: "0.04em",
  color: "#2e2f42",
});
