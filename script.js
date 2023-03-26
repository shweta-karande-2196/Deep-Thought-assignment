function num() {
  let number = document.querySelector(".number1");
  let sidebar1 = document.querySelector("#slide1");
  let sidebar2 = document.querySelector("#slide2");
  let section = document.querySelector("#section");

  number.addEventListener("click", function () {
    sidebar1.style.display = "hidden";
    sidebar1.style.width = "0";

    sidebar2.style.display = "block";
  });
}
