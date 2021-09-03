let tabHeaders = document.querySelectorAll(".n-tab a");
let tabContent = document.querySelectorAll(".tab-content");

console.log(document.querySelector(".wrap .active"));

for (let i = 0; i < tabHeaders.length; i++) {
  tabHeaders[i].addEventListener("click", function () {
    document.querySelector(".nav-links .active").classList.remove("active");
    tabHeaders[i].classList.add("active");

    document.querySelector(".wrap .active").classList.remove("active");
    tabContent[i].classList.add("active");
  });
}

let tableTab = document.querySelectorAll(".table-tab .t-tab");
let tableBody = document.querySelectorAll(".t-content");

for (let i = 0; i < tableTab.length; i++) {
  tableTab[i].addEventListener("click", function () {
    document.querySelector(".table-tab .t-tab").classList.remove("real-active");
    tableTab[i].classList.add("real-active");

    document.querySelector(".body .t-content").classList.remove("real-active");
    tableBody[i].classList.add("real-active");
  });
}
