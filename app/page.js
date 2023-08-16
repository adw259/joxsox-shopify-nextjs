import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="hero" class="bg-color-primary-sky">
        <div class="container m-auto pt-20 grid sm:grid-cols-1 md:grid-cols-2">
          <div class="px-4">
            <h2 class="tracking-wide uppercase text-[3rem] leading-[3rem] md:text-[3.5rem] md:leading-[3.5rem] lg:text-[4.9rem] lg:leading-[4.9rem] font-futura font-bold text-color-primary-dark">
              The
              <span class="text-color-primary-medium">Ultimate</span>
              <br />
              Performance
              <br />
              Socks
            </h2>
            <h3 class="sm:text-2xl sm:leading-[36px] lg:text-4xl lg:leading-[54px] font-light py-5">
              Cooler. Drier. More Comfortable.
            </h3>
            <div class="flex justify-center">
              <button class="w-44 bg-color-primary-medium py-2 px-6 text-white text-base rounded-md font-light shadow-[0_15px_25px_-12px_rgba(0,0,0,0.4)]">
                SHOP NOW<i class="ml-2 fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
            <div class="mt-7  mb-8 px-8">
              <div
                id="joxsox-quotes-carousel"
                class="relative"
                data-te-carousel-init
                data-te-ride="carousel"
              >
                {/* Carousel items */}
                <div class="relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded-lg bg-white p-4">
                  {/* First item */}
                  <div
                    class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    data-te-carousel-active
                  >
                    <p class="text-xl text-center italic font-light">
                      Bart Knols received a Noble Prize in 2006 for showing that
                      the female mosquito is attracted equally to the smell of
                      limburger cheese and to the smell of human feet. Mosquitos
                      hate JoxSox.
                    </p>
                  </div>
                  {/* Second item */}
                  <div
                    class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                  >
                    <p class="text-xl text-center italic font-light">
                      The Empire State Building, which was constructed ahead of
                      schedule and under budget, only took 15 months to
                      complete. Our original, Cushioned series socks took over 2
                      years to perfect.
                    </p>
                  </div>
                  {/* Third item */}
                  <div
                    class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                  >
                    <p class="text-xl text-center italic font-light">
                      Representative Dan Burton once publicly questioned the use
                      of White House staff, postage and stationery to answer
                      mail address to “Socks”. At JoxSox, we welcome sock mail.
                    </p>
                  </div>
                  {/* Fourth item */}
                  <div
                    class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                  >
                    <p class="text-xl text-center italic font-light">
                      Reverend William Lee of Nottinghamshire, England invented
                      a sock knitting machine in 1589. It would be another 414
                      years before JoxSox perfected knitted socks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="aspect-square relative sm:mt-6 lg:mt-0">
            <div
              id="joxsox-slider"
              class="bg-[url('/img/blob-8.svg')] bg-contain bg-no-repeat bg-center h-full w-full absolute -top-14"
            ></div>

            <div
              id="joxsox-socks-carousel"
              class="relative"
              data-te-carousel-init
              data-te-ride="carousel"
            >
              {/* Carousel items */}
              <div class="relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded-l p-4">
                {/* First item */}
                <div
                  class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                  data-te-carousel-active
                >
                  <img
                    src="img/mens-energy-low-cut-white-red-navy-mel-176-removebg.png"
                    alt=""
                  />
                  <div class="absolute top-6 right-10 flex-col animate-moveUp2">
                    <div class="text-4xl leading-none text-slate-900 uppercase font-bold">
                      Cushioned Socks
                    </div>
                    <button class="text-base text-color-primary-medium font-light py-2 px-8 bg-color-primary-sky shadow-md mt-2 float-right flex items-center hover:text-white hover:bg-slate-900">
                      <a href="#cushioned">Read About Features</a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 ml-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Second item */}
                <div
                  class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <img
                    src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                    alt=""
                  />
                  <div class="absolute top-6 right-10 flex-col animate-moveUp2">
                    <div class="text-4xl leading-none text-slate-900 uppercase font-bold">
                      Alpha Pro Socks
                    </div>
                    <button class="text-base text-color-primary-medium font-light py-2 px-8 bg-color-primary-sky shadow-md mt-2 float-right flex items-center">
                      <a href="#alpha">Read About Features</a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 ml-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Third item */}
                <div
                  class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <img src="/img/MAL-174-joxsox.png" alt="" />
                  <div class="absolute top-6 right-10 flex-col animate-moveUp2">
                    <div class="text-4xl leading-none text-slate-900 uppercase font-bold">
                      Energy Socks
                    </div>
                    <button class="text-base text-color-primary-medium font-light py-2 px-8 bg-color-primary-sky shadow-md mt-2 float-right flex items-center">
                      <a href="#energy">Read About Features</a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 ml-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Fourth item */}
                <div
                  class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <img
                    src="/img/SUPRALITE-Men_s-Low-Cut-MSL-170-removebg-1536x1536.png"
                    alt=""
                  />
                  <div class="absolute top-6 right-10 flex-col animate-moveUp2">
                    <div class="text-4xl leading-none text-slate-900 uppercase font-bold">
                      Evolution Socks
                    </div>
                    <button class="text-base text-color-primary-medium font-light py-2 px-8 bg-color-primary-sky shadow-md mt-2 float-right flex items-center">
                      <a href="#evolution">Read About Features</a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 ml-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Fifth item */}
                <div
                  class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <img
                    src="/img/EVOLUTION-Men_s-Low-Cut-MVL-985-removebg-1024x1024.png"
                    alt=""
                  />
                  <div class="absolute top-6 right-10 flex-col animate-moveUp2">
                    <div class="text-4xl leading-none text-slate-900 uppercase font-bold">
                      Supralite Socks
                    </div>
                    <button class="text-base text-color-primary-medium font-light py-2 px-8 bg-color-primary-sky shadow-md mt-2 float-right flex items-center">
                      <a href="#supralite">Read About Features</a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 ml-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-socks" class="bg-white">
        <div class="container py-24">
          <h2 class="tracking-wide uppercase joxsox-section-heading flex justify-center text-color-primary-dark">
            <span class="text-color-primary-medium mr-5">Featured</span> Socks
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 sm:gap-16 md:gap-8 lg:grid-cols-4 lg:gap-8 mt-12 px-4">
            {/*  begin card  */}
            <div class="shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] transition duration-300 ease-in-out cursor-pointer">
              <div class="bg-color-primary-dark h-[44px] flex justify-center items-center text-white rounded-t-lg">
                <span class="ml-auto font-light pl-10">Energy Socks</span>
                <span class="ml-auto pr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                    />
                  </svg>
                </span>
              </div>
              <div class="bg-white">
                <img
                  src="/img/Mens-Energy-Low-Cut-MEL-171-s-400x400.jpg"
                  alt=""
                  class="p-6 mb-4 m-auto"
                />
              </div>
              <h2 class="pt-6 pb-2 bg-color-primary-sky text-color-primary-medium text-xl leading-snug uppercase text-center">
                Joxsox Men's Energy Low Cut Socks
              </h2>
              <div class="rounded-b-lg py-4 text-center text-white bg-color-primary-dark font-light tracking-wider">
                BUY NOW
              </div>
            </div>
            {/*  end card  */}

            {/*  begin card  */}
            <div class="shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] transition duration-300 ease-in-out cursor-pointer">
              <div class="bg-color-primary-dark h-[44px] flex justify-center items-center text-white rounded-t-lg">
                <span class="ml-auto font-light pl-10">Energy Socks</span>
                <span class="ml-auto pr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                    />
                  </svg>
                </span>
              </div>
              <div class="bg-white">
                <img
                  src="/img/CUSHIONED-Men_s-Low-Cut-MCL-501-1536x1536.jpg"
                  alt=""
                  class="p-6 mb-4 m-auto"
                />
              </div>
              <h2 class="pt-6 pb-2 bg-color-primary-sky text-color-primary-medium text-xl leading-snug uppercase text-center">
                Joxsox Men's Energy Low Cut Socks
              </h2>
              <div class="rounded-b-lg py-4 text-center text-white bg-color-primary-dark font-light tracking-wider">
                BUY NOW
              </div>
            </div>
            {/*  end card  */}

            {/*  begin card  */}
            <div class="shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] transition duration-300 ease-in-out cursor-pointer">
              <div class="bg-color-primary-dark h-[44px] flex justify-center items-center text-white rounded-t-lg">
                <span class="ml-auto font-light pl-10">Energy Socks</span>
                <span class="ml-auto pr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                    />
                  </svg>
                </span>
              </div>
              <div class="bg-white">
                <img
                  src="/img/Evolution-Men_s-Quarter-MVQ-9781-400x400.jpg"
                  alt=""
                  class="p-6 mb-4 m-auto"
                />
              </div>
              <h2 class="pt-6 pb-2 bg-color-primary-sky text-color-primary-medium text-xl leading-snug uppercase text-center">
                Joxsox Men's Energy Low Cut Socks
              </h2>
              <div class="rounded-b-lg py-4 text-center text-white bg-color-primary-dark font-light tracking-wider">
                BUY NOW
              </div>
            </div>
            {/*  end card  */}

            {/*  begin card  */}
            <div class="shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] transition duration-300 ease-in-out cursor-pointer">
              <div class="bg-color-primary-dark h-[44px] flex justify-center items-center text-white rounded-t-lg">
                <span class="ml-auto font-light pl-10">Energy Socks</span>
                <span class="ml-auto pr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                    />
                  </svg>
                </span>
              </div>
              <div class="bg-white">
                <img
                  src="/img/SUPRALITE-Men_s-Low-Cut-MSL-178-400x400.jpg"
                  alt=""
                  class="p-6 mb-4 m-auto"
                />
              </div>
              <h2 class="pt-6 pb-2 bg-color-primary-sky text-color-primary-medium text-xl leading-snug uppercase text-center">
                Joxsox Men's Energy Low Cut Socks
              </h2>
              <div class="rounded-b-lg py-4 text-center text-white bg-color-primary-dark font-light tracking-wider">
                BUY NOW
              </div>
            </div>
            {/*  end card  */}
          </div>
        </div>
      </section>

      <section id="our-products" class="bg-color-primary-dark">
        {/*  begin our products boxes  */}
        <div class="container py-24">
          <h2 class="tracking-wide uppercase joxsox-section-heading text-white flex justify-center">
            Our Products
          </h2>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 mt-12 px-4">
            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">CUSHIONED SOCKS</span>
            </div>

            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">ALPHA PRO SOCKS</span>
            </div>

            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">ENERGY SOCKS</span>
            </div>

            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">EVOLUTION SOCKS</span>
            </div>

            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">SUPRALITE SOCKS</span>
            </div>

            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">ULTRA SOCKS</span>
            </div>

            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">DRESS SOCKS</span>
            </div>

            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">SHOES</span>
            </div>

            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">BOXER BRIEFS</span>
            </div>

            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">T-SHIRTS</span>
            </div>

            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">POLO SHIRTS</span>
            </div>

            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">OUTERWEAR</span>
            </div>

            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">INSOLES</span>
            </div>

            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">SUNGLASSES</span>
            </div>

            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">MUSCLE GEL</span>
            </div>

            <div class="bg-white rounded-md flex justify-start items-center py-5 w-full hover:-translate-y-5 duration-500 ease-in-out">
              <img
                src="img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                alt=""
                class="h-16 pr-1 pl-3"
              />
              <span class="category-box-title">ALL PRODUCTS</span>
            </div>
          </div>
          {/*  end our products boxes  */}
        </div>
      </section>

      <section id="our-products" class="bg-white">
        <div class="container py-24">
          <div class="flex justify-center items-center">
            <img src="/img/logo.png" alt="" class="h-[113px] mr-4" />
            <h2 class="tracking-wide uppercase joxsox-section-heading text-color-primary-dark">
              Technology
            </h2>
          </div>

          {/*  begin cushioned card  */}
          <a name="cushioned"></a>
          <div class="my-20 bg-color-primary-medium xl:shadow-2xl rounded-xl m-auto px-14 py-12">
            <div class="grid lg:grid-cols-2 gap-4">
              <div class="sm:order-2 lg:order-1">
                <img
                  src="/img/CUSHIONED__Men_s_Low_cut____MCL-501-removebg-1-1024x1024.png"
                  alt=""
                  class=""
                />
              </div>
              <div class="sm:order-1 lg:order-2">
                <div class="joxsox-section-heading text-color-primary-light py-8">
                  Cushioned
                </div>
                <p class="text-white text-lg mb-4">
                  Cushioned, the original padded bottom Jox Sox add comfort to
                  every step you take. Originally designed for athletes whose
                  feet take a pounding, they are perfect for anyone who wears
                  socks. Padded only on the bottom, each step you take feels as
                  if you are walking on a cloud, without adding bulk or changing
                  your shoe size.
                </p>
                <p class="text-white text-lg">
                  Technical features include AirFlow Technology which allows air
                  to circulate to your feet keeping them cooler. Advanced Fibers
                  transfer moisture away from your feet, keeping them drier.
                  Padded Bottoms absorb shock and cushion your every step. Snug
                  Fit adds support and promotes circulation. 90% Cotton, 7%
                  Nylon, 3% Stretch Spandex.
                </p>
                <div class="joxsox-section-caption mt-8">
                  GUARANTEED FOR LIFE.
                </div>
                <button class="bg-white hover:bg-slate-800 hover:text-white text-base tracking-widest font-light uppercase shadow-lg flex items-center justify-center px-8 py-2 my-5 rounded-sm">
                  Shop For Cushioned socks
                  <span class="pl-3">
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
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div class="sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:items-center lg:place-content-around lg:mt-16">
              <img
                src="/img/airflow-technology-grey.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
              <img
                src="/img/moisture-management-grey-1.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
              <img
                src="/img/advanced-fibers-grey.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
              <img
                src="/img/padded-bottoms-grey.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
            </div>
          </div>
          {/*  end cushioned card  */}

          {/*  begin alpha pro card  */}
          <a name="alpha"></a>
          <div class="my-20 bg-color-primary-dark xl:shadow-2xl rounded-xl m-auto px-14 py-12">
            <div class="grid lg:grid-cols-2 gap-4">
              <div>
                <div class="joxsox-section-heading text-color-primary-light py-8">
                  ALPHA PRO
                </div>
                <p class="text-white text-lg mb-4">
                  Alpha, the leader of the pack. Professional, the best of the
                  best. Alpha Pro by Jox Sox, the most technologically advanced
                  sock we have ever offered. Snug Micro Mesh knit provides
                  support without adding bulk. Compression fit improves your
                  circulation and helps to reduce recovery time. 360° Air Flow
                  Technology keeps your feet cooler. Arch bands add additional
                  support and protection. Hydrophilic yarns absorb moisture
                  keeping you drier and reducing odor.
                </p>
                <p class="text-white text-lg">
                  Alpha Pro socks can help relieve foot pain, provide support
                  and stability, and keep you on the course, on the court, or
                  just back in the game of life.
                </p>
                <div class="joxsox-section-caption mt-8">
                  GUARANTEED FOR LIFE.
                </div>
                <button class="bg-white hover:bg-slate-800 hover:text-white text-base tracking-widest font-light uppercase shadow-lg flex items-center justify-center px-8 py-2 my-5 rounded-sm">
                  Shop For ALPHA PRO socks
                  <span class="pl-3">
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
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div>
                <img src="/img/MAL-174-joxsox.png" alt="" class="" />
              </div>
            </div>
            <div class="sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:items-center lg:place-content-around lg:mt-16">
              <img
                src="/img/AP_Compression_Icon.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
              <img
                src="/img/AP_360_Icon.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
              <img
                src="/img/AP_Recovery_Icon.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
              <img
                src="/img/AP_Moisture_Icon.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
            </div>
          </div>
          {/*  end alpha pro card  */}

          {/*  begin supralite card  */}
          <a name="supralite"></a>
          <div class="my-20 bg-color-primary-medium xl:shadow-2xl rounded-xl m-auto px-14 py-12">
            <div class="grid lg:grid-cols-2 gap-4">
              <div>
                <div class="joxsox-section-heading text-color-primary-light py-8">
                  SUPRALITE
                </div>
                <p class="text-white text-lg mb-4">
                  SupraLite, the thinnest, smoothest, softest and most absorbent
                  sock you can imagine. Specifically designed for runners and
                  cyclists, they are perfect for anyone looking for a sock so
                  thin it feels as if you are wearing nothing at all.
                </p>
                <p class="text-white text-lg">
                  SupraLites share the same technical features as Cushioned Jox
                  Sox, but without the padded bottoms. Advanced Fibers keep you
                  drier. Snug Fit adds support and promotes circulation.
                  Proprietary, cotton free, exceptionally light, FeatherWeight,
                  UltraThin yarns. 97% Microfiber Nylon, 3% Stretch Spandex.
                </p>
                <div class="joxsox-section-caption mt-8">
                  GUARANTEED FOR LIFE.
                </div>
                <button class="bg-white hover:bg-slate-800 hover:text-white text-base tracking-widest font-light uppercase shadow-lg flex items-center justify-center px-8 py-2 my-5 rounded-sm">
                  Shop For SUPRALITE socks
                  <span class="pl-3">
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
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div>
                <img
                  src="/img/SUPRALITE-Men_s-Low-Cut-MSL-170-removebg-1536x1536.png"
                  alt=""
                  class=""
                />
              </div>
            </div>
            <div class="sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:items-center lg:place-content-around lg:mt-16">
              <img
                src="/img/AirFlow-Icon-1024x216.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
              <img
                src="/img/Moisture-Icon-1024x209.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
              <img
                src="/img/Thin-Icon-1024x346.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
              <img
                src="/img/Advanced-Fibers-1024x254.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
            </div>
          </div>
          {/*  end supralite card  */}

          {/*  begin evolution card  */}
          <a name="evolution"></a>
          <div class="my-20 bg-color-primary-dark xl:shadow-2xl rounded-xl m-auto px-14 py-12">
            <div class="grid lg:grid-cols-2 gap-4">
              <div>
                <div class="joxsox-section-heading text-color-primary-light py-8">
                  EVOLUTION
                </div>
                <p class="text-white text-lg mb-4">
                  All new for 2022, our Evolution Series Socks are the next step
                  in performance and comfort.
                </p>
                <p class="text-white text-lg">
                  Knit with our special, proprietary blend of yarns, they are
                  the most luxurious, plush performance socks available today.
                </p>
                <p class="text-white text-lg">
                  Luxuriously padded bottoms are like walking on air. Padded
                  tabs protect your Achilles tendons. Mesh upper provides
                  ventilation. Compression band adds arch support. 42% Coolmax,
                  41% Cotton, 13% Nylon, 4% Spandex
                </p>
                <div class="joxsox-section-caption mt-8">
                  GUARANTEED FOR LIFE.
                </div>
                <button class="bg-white hover:bg-slate-800 hover:text-white text-base tracking-widest font-light uppercase shadow-lg flex items-center justify-center px-8 py-2 my-5 rounded-sm">
                  Shop For EVOLUTION socks
                  <span class="pl-3">
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
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div>
                <img
                  src="/img/EVOLUTION-Men_s-Low-Cut-MVL-985-removebg-1024x1024.png"
                  alt=""
                  class=""
                />
              </div>
            </div>
            <div class="sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:items-center lg:place-content-around lg:mt-16">
              <img
                src="/img/airflow-technology-grey.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
              <img
                src="/img/luxuriously-plush.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
              <img
                src="/img/moisture-management-grey.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
              <img
                src="/img/arch-support.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
            </div>
          </div>
          {/*  end evolution card  */}

          {/*  begin energy card  */}
          <a name="energy"></a>
          <div class="mt-20 bg-color-primary-medium xl:shadow-2xl rounded-xl m-auto px-14 py-12">
            <div class="grid lg:grid-cols-2 gap-4">
              <div class="sm:order-2 lg:order-1">
                <img
                  src="/img/mens-energy-low-cut-white-red-navy-mel-176-removebg.png"
                  alt=""
                  class=""
                />
              </div>
              <div class="sm:order-1 lg:order-2">
                <div class="joxsox-section-heading text-color-primary-light py-8">
                  ENERGY
                </div>
                <p class="text-white text-lg mb-4">
                  Our Energy series socks are designed to provide the quick
                  recovery today’s athletes are looking for while still keeping
                  you cooler and drier. Full support and massaging energy domes
                  make this the ultimate in performance, recovery and comfort.
                </p>
                <p class="text-white text-lg">
                  All over compression helps support your entire foot. Energy
                  domes provide a mini massage with every step. Cushioned tabs
                  help protect your Achilles tendon. Airflow Technology keeps
                  you cooler and drier. 32% Cotton, 30% Coolmax, 23% Spandex,
                  15% Polyester.
                </p>
                <div class="joxsox-section-caption mt-8">
                  GUARANTEED FOR LIFE.
                </div>
                <button class="bg-white hover:bg-slate-800 hover:text-white text-base tracking-widest font-light uppercase shadow-lg flex items-center justify-center px-8 py-2 my-5 rounded-sm">
                  Shop For ENERGY socks
                  <span class="pl-3">
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
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div class="sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:items-center lg:place-content-around lg:mt-16">
              <img
                src="/img/airflow-technology-grey-1.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
              <img
                src="/img/energy-label-moisture.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
              <img
                src="/img/energy-label-compression.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
              <img
                src="/img/energy-label-massaging.png"
                alt=""
                class="sm:max-h-[60px] lg:h-[40px]"
              />
            </div>
          </div>
          {/*  end energy card */}
        </div>
      </section>

      <section>
        <div class="container">
          <div class="text-center mb-10">
            <h2 class="tracking-wide uppercase joxsox-section-heading text-color-primary-medium">
              <span class="text-color-primary-dark">THE ULTIMATE</span>
              <span class="whitespace-nowrap">PERFORMANCE SOCKS</span>
            </h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 px-4">
            <div class="bg-black h-[280px] relative rounded-[.65rem] group">
              <div class="h-full bg-[url('/img/Mens-bottom-buy-box-scaled-11.jpg')] bg-center bg-cover opacity-80 group-hover:opacity-50 rounded-[.65rem] transition-all ease-in-out duration-[1500ms]"></div>
              <span class="absolute top-1/2 left-0 right-0 grid place-items-center sm:text-4xl md:text-3xl lg:text-4xl text-white uppercase group-hover:hidden">
                Shop Men's Socks
              </span>
              <div class="absolute top-1/2 left-0 right-0 grid place-items-center">
                <button class="border-2 border-white bg-transparent text-white rounded-md uppercase px-9 py-3 font-light hidden group-hover:block absolute -top-3">
                  Shop Now
                </button>
              </div>
            </div>

            <div class="bg-black h-[280px] relative rounded-[.65rem] group">
              <div class="h-full bg-[url('/img/womans-bottom-buy-box-1-scaled-11.jpg')] bg-center bg-cover opacity-80 group-hover:opacity-50 rounded-[.65rem] transition-all ease-in-out duration-[1500ms]"></div>
              <span class="absolute top-1/2 left-0 right-0 grid place-items-center sm:text-4xl md:text-3xl lg:text-4xl text-white uppercase group-hover:hidden">
                Shop Women's Socks
              </span>
              <div class="absolute top-1/2 left-0 right-0 grid place-items-center">
                <button class="border-2 border-white bg-transparent text-white rounded-md uppercase px-9 py-3 font-light hidden group-hover:block absolute -top-3">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
