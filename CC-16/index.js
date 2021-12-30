const input = document.getElementById("input");
const display = document.getElementById("display");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  var newValue = input.value.replace(" ", "");

  const count = (newValue) =>
    [...newValue].filter((k) => "aeiou".includes(k.toLowerCase())).length;

  display.innerHTML = `There are ${count(
    input.value
  )} wovels in  <span style="color:red">${input.value}</span>
  `;
  input.value = "";
});
