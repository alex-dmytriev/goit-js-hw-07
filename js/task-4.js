const formEl = document.querySelector(".login-form");
const inputs = formEl.elements;

const onSubmit = (e) => {
  e.preventDefault();

  const { email, password } = inputs;
  const resEmail = email.value.trim();
  const resPass = password.value.trim();

  if (!resEmail || !resPass) {
    alert("All form fields must be filled in");
  } else {
    const resObj = {
      email: resEmail,
      password: resPass,
    };

    console.log(resObj);
    formEl.reset();
  }
};

formEl.addEventListener("submit", onSubmit);

// Form styling
Object.assign(formEl.style, {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  gap: "8px",
  width: "360px",
});

// Label styling
const formLabelEls = formEl.querySelectorAll("label");

formLabelEls.forEach((el) => {
  Object.assign(el.style, {
    display: "flex",
    flexDirection: "column",
    font: "400 16px / 1.5 'Montserrat', sans-serif",
    color: "#2e2f42",
    width: "100%",
  });
});

// Inputs styling
const inputEls = formEl.querySelectorAll("label>input");

inputEls.forEach((el) => {
  Object.assign(el.style, {
    font: "400 16px / 1.5 'Montserrat', sans-serif",
    border: "1px solid #808080",
    borderRadius: "4px",
  });
});

// Button styling
const btnEl = formEl.querySelector("button");

Object.assign(btnEl.style, {
  borderRadius: "8px",
  padding: "8px 16px",
  width: "86px",
  height: "40px",
  font: "500 16px / 1.5 'Montserrat', sans-serif",
  letterSpacing: "0.04em",
  color: "#fff",
  backgroundColor: "#4e75ff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: "10px",
  border: "none",
  marginTop: "8px",
});
