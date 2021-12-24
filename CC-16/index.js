const input = document.getElementById("input");
const display = document.getElementById("display");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  var wovels = "aei";
  var result = input.value.match(wovels);
  var count = result.length;
  console.log(count);

  display.innerText = `There are  wovels in  ${input.value}`;
  input.value = "";
});
