import React from "react";
import Image from "next/image";

const Navigation = () => {
  return (
    <>
      <div
        id="cart-overlay"
        class="top=0 right-0 bottom-0 left-0 fixed opacity-50 bg-black w-[100%] h-[100%] hidden z-20"
      ></div>
      <div class="joxsox-cart bg-white h-[100%] w-[80%] max-w-[320px] fixed z-30 top-0 right-[-100%] transition-all .8s ease-in-out text-center">
        <button id="cart-close-btn" class="top-4 right-4 absolute">
          <img src="/img/close.png" alt="" class="h-5" />
        </button>
        <p class="pt-10">No products in the cart.</p>
      </div>

      <div class="h-[38px] bg-color-primary-dark flex justify-center items-center">
        <img src="/img/delivery.png" alt="" class="h-[20px] pr-2" />
        <span class="font-futura font-bold text-gray-300 text-[12px] leading-none tracking-wider">
          FREE SHIPPING WITH ORDERS OF $30 OR MORE!
        </span>
      </div>
      <header id="joxsox-header" class="bg-white max-h-20 relative">
        <div class="lg:container">
          <div class="flex place-content-between items-center">
            <div class="flex justify-start gap-3 items-center">
              <div id="joxsox-brand" class="p-2">
                <img
                  src="/img/logo.png"
                  alt="JoxSox Logo"
                  class="sm:w-20 md:w-40 absolute top-2"
                />
              </div>
              <div id="joxsox-tagline" class="mr-12 p-2">
                <h2 class="font-futura font-bold text-base uppercase sm:ml-20 md:ml-40 text-color-primary-medium leading-tight">
                  The Ultimate
                  <br />
                  Performance
                  <br />
                  Socks
                </h2>
              </div>
              <nav id="joxsox-nav" class="font-futura text-base font-bold">
                <button
                  id="mobile-menu-btn"
                  class="flex justify-center items-center lg:hidden font-[300]"
                >
                  <img src="/img/menu.png" alt="" class="h-[14px] pr-2" />
                  Menu
                </button>
                <ul id="nav-items" class="sm:hidden lg:flex lg:gap-8">
                  <li class="flex gap-2.5 items-center sm:place-content-between lg:place-content-start group">
                    <span class="sm:p-4 lg:p-0">SHOP MENS</span>
                    <img src="/img/caret-down.png" alt="" class="h-2.5" />
                    {/* begin mega menu mens */}
                    <div
                      id="joxsox-mega-menu-mens"
                      class="lg:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] hidden group-hover:block absolute sm:top-[56px] lg:top-[50px] sm:w-full lg:w-[650px] animate-moveUp z-40"
                    >
                      <div class="h-5"></div>
                      <div class="bg-color-primary-dark h-full">
                        <div class="grid sm:grid-cols-1 lg:grid-cols-3">
                          <div class="">
                            <ul class="flex flex-col items-start">
                              <li>Cushioned Socks</li>
                              <li>Alpha Pro Socks</li>
                              <li>Evolution Socks</li>
                              <li>Energy Socks</li>
                              <li>Supralite Socks</li>
                              <li>Ultra Socks</li>
                              <li>Dress Socks</li>
                            </ul>
                          </div>

                          <div class="">
                            <ul class="flex flex-col items-start">
                              <li>Pullovers</li>
                              <li>Polos</li>
                              <li>Performance T-Shirts</li>
                              <li>Underwear</li>
                            </ul>
                          </div>

                          <div class="">
                            <ul class="flex flex-col items-start">
                              <li>Shoes</li>
                              <li>Insoles</li>
                              <li>Muscle Relief Gel</li>
                              <li>Sunglasses</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="flex gap-2.5 items-center sm:place-content-between lg:place-content-start group">
                    <span class="sm:p-4 lg:p-0">SHOP WOMENS</span>
                    <img src="/img/caret-down.png" alt="" class="h-2.5" />
                    {/* begin mega menu womens */}
                    <div
                      id="joxsox-mega-menu-womens"
                      class="lg:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] hidden group-hover:block absolute sm:top-[112px] lg:top-[50px] sm:w-full lg:w-[650px] animate-moveUp z-40"
                    >
                      <div class="h-5"></div>
                      <div class="bg-color-primary-dark h-full">
                        <div class="grid sm:grid-cols-1 lg:grid-cols-2">
                          <div class="">
                            <ul class="flex flex-col items-start">
                              <li>Cushioned Socks</li>
                              <li>Alpha Pro Socks</li>
                              <li>Evolution Socks</li>
                              <li>Energy Socks</li>
                              <li>Supralite Socks</li>
                              <li>Ultra Socks</li>
                            </ul>
                          </div>

                          <div class="">
                            <ul class="flex flex-col items-start">
                              <li>Insoles</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="flex gap-2.5 items-center sm:place-content-between lg:place-content-start group">
                    <span class="sm:p-4 lg:p-0">SHOP BY PRODUCT</span>
                    <img src="/img/caret-down.png" alt="" class="h-2.5" />
                    {/* begin mega menu products */}
                    <div
                      id="joxsox-mega-menu-products"
                      class="lg:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] hidden group-hover:block absolute sm:top-[168px] lg:top-[50px] sm:w-full lg:w-[650px] animate-moveUp z-40"
                    >
                      <div class="h-5"></div>
                      <div class="bg-color-primary-dark h-full">
                        <div class="grid sm:grid-cols-1 lg:grid-cols-3">
                          <div class="">
                            <ul class="flex flex-col items-start">
                              <li>Cushioned Socks</li>
                              <li>Alpha Pro Socks</li>
                              <li>Evolution Socks</li>
                              <li>Energy Socks</li>
                              <li>Supralite Socks</li>
                              <li>Ultra Socks</li>
                              <li>Dress Socks</li>
                            </ul>
                          </div>

                          <div class="">
                            <ul class="flex flex-col items-start">
                              <li>Outterwear</li>
                              <li>Polos</li>
                              <li>Performance T-Shirts</li>
                              <li>Underwear</li>
                            </ul>
                          </div>

                          <div class="">
                            <ul class="flex flex-col items-start">
                              <li>Shoes</li>
                              <li>Insoles</li>
                              <li>Muscle Gel</li>
                              <li>Sunglasses</li>
                              <li>All Products</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
              <button
                id="mobile-menu-close-btn"
                class="bottom-10 m-auto p-4 absolute w-full text-base flex sm:hidden justify-center items-center"
              >
                <img src="/img/close.png" alt="" class="h-[10px] pr-1" />
                Close
              </button>
            </div>
            <div>
              <div class="flex gap-6 items-center p-2">
                <ul class="flex gap-8">
                  <li>
                    <img
                      src="/img/magnifier.png"
                      alt=""
                      class="h-6 hover:opacity-50"
                    />
                  </li>
                  <li>
                    <img
                      src="/img/user.png"
                      alt=""
                      class="h-6 hover:opacity-50"
                    />
                  </li>
                  <li>
                    <img
                      id="shopping-bag"
                      src="/img/shopping-bag.png"
                      alt=""
                      class="h-6 hover:opacity-50"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
