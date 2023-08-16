/* begin open / close cart */
document.querySelector("#shopping-bag").addEventListener("click", () => {
  console.log("1");
  document.querySelector(".joxsox-cart").classList.toggle("right-[0]");
  console.log("2");
  document.querySelector("#cart-overlay").classList.toggle("hidden");
  console.log("3");
  document.querySelector("#joxsox-slider").classList.add("z-0");
  console.log("4");
});

document.querySelector("#cart-close-btn").addEventListener("click", () => {
  document.querySelector(".joxsox-cart").classList.toggle("right-[0]");
  document.querySelector("#cart-overlay").classList.toggle("hidden");
});
/* end open / close cart */

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navItems = document.getElementById("nav-items");
const joxsoxHeader = document.getElementById("joxsox-header");
const joxsoxBrand = document.getElementById("joxsox-brand");
const joxsoxTagline = document.getElementById("joxsox-tagline");
const mobileMenuCloseBtn = document.getElementById("mobile-menu-close-btn");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuCloseBtn.classList.remove("sm:hidden");
  joxsoxBrand.classList.add("hidden");
  joxsoxTagline.classList.add("hidden");
  joxsoxHeader.classList.remove("max-h-20");
  joxsoxHeader.classList.add("h-screen");
  navItems.classList.remove("sm:hidden");
  navItems.classList.add(
    "absolute",
    "top-0",
    "bg-white",
    "z-40",
    "w-[100%]",
    "pt-4"
  );
});

mobileMenuCloseBtn.addEventListener("click", () => {
  mobileMenuCloseBtn.classList.add("sm:hidden");
  joxsoxBrand.classList.remove("hidden");
  joxsoxTagline.classList.remove("hidden");
  joxsoxHeader.classList.add("max-h-20");
  joxsoxHeader.classList.remove("h-screen");
  navItems.classList.add("sm:hidden");
  navItems.classList.remove(
    "absolute",
    "top-0",
    "bg-white",
    "z-40",
    "w-[100%]",
    "pt-4"
  );
});
