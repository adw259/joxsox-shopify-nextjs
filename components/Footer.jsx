import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-[#051F3E]">
        <div class="container m-auto py-12 px-4">
          <div class="flex flex-col items-center md:flex-row place-content-between">
            <div class="text-[2rem] leading-[2rem] text-white sm:text-center md:text-left">
              FREE SHIPPING WITH
              <span class="whitespace-nowrap"> ORDERS OF $30 OR MORE!</span>
            </div>

            <button class="bg-color-primary-medium text-white text-base leading-none font-light px-9 py-4 rounded-lg hover:bg-white hover:text-color-primary-dark mt-3 md:mt-0">
              <span class="whitespace-nowrap">SHOP NOW</span>
            </button>
          </div>
        </div>

        <div class="bg-[#0c2a4e]">
          <div class="container m-auto py-20 px-4 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 xl:grid-cols-5 items-start">
            <div class="text-white">
              <div class="flex-col justify-start space-y-2">
                <img src="/img/logo.png" alt="" class="w-1/2 mb-5" />
                <div class="flex items-center justify-start space-x-2">
                  <span class="text-color-primary-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                      />
                    </svg>
                  </span>
                  <span class="text-white text-base font-light ml-2">
                    JoxSox
                  </span>
                </div>

                <div class="flex items-start justify-start space-x-2">
                  <span class="text-color-primary-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>
                  <span class="text-white text-base font-light ml-2">
                    6800 East Rogers Circle
                    <span class="whitespace-nowrap">Boca Raton, Fl 33487</span>
                  </span>
                </div>

                <div class="flex items-center justify-start space-x-2">
                  <span class="text-color-primary-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <span class="text-white text-base font-light ml-2">
                    info@joxsox.com
                  </span>
                </div>
              </div>
            </div>
            <div class="text-white">
              <div class="flex-col justify-start space-y-4">
                <h2 class="text-white text-xl leading-none">SHOP SOCKS</h2>
                <ul class="font-light text-base space-y-2">
                  <li class="joxsox-footer-link">
                    <a href="#">Cushioned Socks</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Alpha Pro Socks</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Energy Socks</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Supralite Socks</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Ultra Socks</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Evolution Socks</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Dress Socks</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-white">
              <div class="flex-col justify-start space-y-4">
                <h2 class="text-white text-xl leading-none">OTHER PRODUCTS</h2>
                <ul class="font-light text-base space-y-2">
                  <li class="joxsox-footer-link">
                    <a href="#">Shoes</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Boxer Briefs</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">T-shirts</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Polo Shirts</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Outerwear</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Insoles</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Sunglasses</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Muscle Gel</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="text-white">
              <div class="flex-col justify-start space-y-4">
                <h2 class="text-white text-xl leading-none">
                  CUSTOMER SERVICE
                </h2>
                <ul class="font-light text-base space-y-2">
                  <li class="joxsox-footer-link">
                    <a href="#">My Account</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Lifetime Guarantee</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Returns</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Size Charts</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="text-white">
              <div class="flex-col justify-start space-y-4">
                <h2 class="text-white text-xl leading-none">COMPANY</h2>
                <ul class="font-light text-base space-y-2">
                  <li class="joxsox-footer-link">
                    <a href="#">About Us</a>
                  </li>
                  <li class="joxsox-footer-link">
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
                <img
                  src="/img/auth.net_cc_logos-optimized.png"
                  alt=""
                  class="w-full mt-6"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script type="text/javascript" src="js/global.js"></script>
    </>
  );
};

export default Footer;
