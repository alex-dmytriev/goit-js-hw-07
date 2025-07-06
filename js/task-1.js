console.log("--- Task #1 Result ---");

const categoryItems = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoryItems.length}`);

const catItems = document.querySelectorAll("#categories .item");

catItems.forEach((catItem) => {
  const catName = catItem.querySelector("h2").textContent;
  const catNameItems = catItem.querySelectorAll("ul>li");

  console.log(`Category: ${catName}`);
  console.log(`Elements: ${catNameItems.length}`);
});

// Containers styling
categoryItems.forEach((item) => {
  Object.assign(item.style, {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: "16px",
    borderRadius: "8px",
    padding: "16px",
    width: "392px",
    background: "#f6f6fe",
    marginBottom: "24px",
  });
});

// Category names styling
const catNames = document.querySelectorAll("h2");

catNames.forEach((catName) => {
  Object.assign(catName.style, {
    font: "600 24px / 1.33333 'Montserrat', sans-serif",
    letterSpacing: "0.04em",
    color: "#2e2f42",
  });
});

// Category items styling
const catSubItems = document.querySelectorAll("#categories .item>ul>li");

catSubItems.forEach((subItem) => {
  Object.assign(subItem.style, {
    font: "400 16px / 1.5 'Montserrat', sans-serif",
    letterSpacing: "0.04em",
    color: "#2e2f42",
    border: "1px solid #808080",
    borderRadius: "4px",
    paddingLeft: "16px",
    width: "360px",
    marginBottom: "8px",
  });
});
