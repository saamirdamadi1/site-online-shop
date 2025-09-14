let a=`
    <!--start-main-->
    <div
      class="pd:w-[25%] pd:h-[30%] gd:w-[80%] sd:hidden gd:h-[90%] gd:border-1 gd:border-red-500 rounded-[10px] mx-auto mt-20 flex flex-col px-7 py-7 gap-3 relative"
    >
      <a href="./index.html">
        <div class="flex absolute right-1 justify-center items-center">
          <svg
            fill="#000000"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g data-name="Layer 2">
              <g data-name="arrow-ios-forward">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(-90 12 12)"
                  opacity="0"
                />

                <path
                  d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
                />
              </g>
            </g>
          </svg>
          صفحه اصلی
        </div>
      </a>
      <img
        src="./assets/images/shop-cart-apply-icon.png"
        alt="online-shop"
        class="mx-auto"
      />
      <p class="text-[22px]">ورود و ثبت‌نام‌</p>
      <p class="text-[12px] text-[#333335]">
        سلام!
        <br />
        لطفا شماره موبایل خود را وارد کنید.
      </p>
      <form
        action="./registered.html"
        class="flex flex-col juctify-center gap-11"
      >
        <input
          type="number"
          name="login"
          id="login"
          min="999999999"
          max="99999999999"
          class="border-1 border-[#777779] rounded-[5px] w-full h-[40px] px-2 focus:outline-red-500 focus:outline-1 email-tel"
          required
          autofocus
          placeholder="شماره موبایل"
        />
        <input
          type="submit"
          value="ورود"
          class="w-[100%] h-[40px] bg-red-500 rounded-[5px] text-white text-[16px] cursor-pointer submit2"
        />
      </form>
    </div>
    <div class="hidden sd:flex w-full h-screen">
      <div
        class="w-1/2 h-full relative flex gap-4 flex-col justify-center items-center"
      >
        <a href="./index.html">
          <div class="flex absolute top-18 right-6 justify-center items-center">
            <svg
              fill="#000000"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="Layer 2">
                <g data-name="arrow-ios-forward">
                  <rect
                    width="24"
                    height="24"
                    transform="rotate(-90 12 12)"
                    opacity="0"
                  />

                  <path
                    d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
                  />
                </g>
              </g>
            </svg>
            صفحه اصلی
          </div>
        </a>
        <img
          src="./assets/images/shop-cart-apply-icon.png"
          alt="online-shop"
          class="mx-auto"
        />
              <p class="text-[25px]">ورود و ثبت‌نام‌</p>
      <p class="text-[14px] text-[#333335]">
        سلام!
        <br />
        لطفا شماره موبایل خود را وارد کنید.
      </p>
        <form
        action="./registered.html"
        method="post"
        class="flex flex-col juctify-center gap-11"
      >
        <input
          type="number"
          name="login"
          id="login"
          min="999999999"
          max="99999999999"
          class="border-1 border-[#777779] rounded-[5px] w-full h-[40px] px-2 focus:outline-red-500 focus:outline-1 email-tel"
          required
          autofocus
          placeholder="شماره موبایل"
        />
        <input
          type="submit"
          value="ورود"
          class="w-[400px] h-[40px] bg-red-500 rounded-[5px] text-white text-[16px] cursor-pointer submit2"
        />
      </form>
      </div>
      <div class="w-1/2 h-full">
        <img
          src="./assets/images/sign-in-image.jpg"
          alt="icon"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
    <!--end-main-->
`,r=(...e)=>{e.forEach(t=>{document.querySelector(".root").insertAdjacentHTML("beforeend",t)})};r(a);
