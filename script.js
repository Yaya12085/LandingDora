const btn = document.querySelector("#mobile-menu-button");
const menu = document.querySelector("#mobile-menu");
const menu_item = document.querySelectorAll(".menu-item");

// Add Event Listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

for (let i = 0; i < menu_item.length; i++) {
  menu_item[i].onclick = function () {
    for (let j = 0; j < menu_item.length; j++) {
      if (menu_item[j] != this) {
        menu_item[j].classList.remove("bg-color_1");
        menu_item[j].classList.remove("text-white");
      }
    }
    menu_item[i].classList.add("bg-color_1");
    menu_item[i].classList.add("text-white");

    menu.classList.add("hidden");
  };
}
