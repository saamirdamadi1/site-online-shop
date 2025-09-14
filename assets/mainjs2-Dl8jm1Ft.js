let p=(...t)=>{t.forEach(e=>{document.querySelector(".root").insertAdjacentHTML("beforeend",e)})},o=`
<div class="loader"><div class="loader1"></div></div>
`,n=()=>{document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{document.querySelector(".loader").remove(),document.querySelector("body").classList.remove("overflow-hidden"),document.querySelector("body").classList.add("overflow-auto")},5e3)})},x=`
    <header
      class="pd:w-[100%] pr-5 flex w-full pd:flex-row sm:flex-col sm:gap-[5px] sticky dark:bg-gray-900 flex-row items-center bg-white top-0 ed:relative z-50"
    >
      <a href="#">
        <div class="w-[76px] h-[76px]">
          <img src="./assets/images/shop-cart-apply-icon.png" alt="shop" />
        </div>
      </a>
          <div class="ed:inline-flex ed:flex-col pd:flex-row flex pd:gap-0 gap-7 items-center justify-center pd:justify-between pd:relative pd:w-[90%]">
      <div class=" flex flex-row mx-auto pd:absolute right-0 justify-center pd:justify-start">
        <div class="ed:flex hidden gap-8 items-center relative flex-row justify-center">
          <span></span>
          <div class="group/mega1 text-[13px] text-nowrap kalas">
            <p class="cursor-pointer">کالاها</p>
            <div
              class="w-[90%] top-4 group-hover/mega1:flex  flex-col right-[30px] pt-4 absolute hidden mega h-screen z-50"
            >
              <div class="w-[100%] h-[80%] relative bg-[#faf8f8f1] rounded-[10px] flex">
                <div class="bg-[aqua] rounded-r-[10px]">
                  <div class="w-[130px] flex cursor-pointer peer/1  hover:bg-[#fffdfd] text-red justify-center items-center h-1/8 rounded-tr-[10px]">
                    <p class="flex justify-center items-center gap-1">
                      <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]">
            <path fill-rule="evenodd" d="M7 1h10a3 3 0 013 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V4a3 3 0 013-3zm0 2a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H7zm5 17a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
          </svg>
                      موبایل</p>
                  </div>
                  <div class="w-[130px] flex cursor-pointer peer/2 hover:bg-[#fffdfd] text-red justify-center items-center h-1/8">
                    <p class="flex justify-center items-center gap-1">
                      <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]">
             <path fill-rule="evenodd" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v8.723l2.858 4.762A1 1 0 0122 20H2a1 1 0 01-.857-1.515L4 13.723V5zm2 8h12V6H6v7zm-.434 2l-1.8 3h16.468l-1.8-3H5.566z" clip-rule="evenodd"></path>
          </svg>
                      لپ‌تاپ</p>
                  </div>
                  <div class="w-[130px] flex cursor-pointer peer/3  hover:bg-[#fffdfd] text-red justify-center items-center h-1/8">
                    <p class="flex justify-center items-center gap-1">
                     <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]">
            <path fill-rule="evenodd" d="M7 3h10c1.56 0 2.898 1.066 2.994 2.5l.006.167v2.869a3.5 3.5 0 011.001 6.627L21 18a2 2 0 01-2 2v1h-2v-1H7v1H5v-1a2 2 0 01-2-2v-2.837a3.5 3.5 0 011-6.628V5.667c0-1.461 1.28-2.581 2.821-2.662L7 3zm1 11h8v-2l.005-.192A3.501 3.501 0 0118 8.837v-3.17c0-.3-.35-.614-.867-.661L17 5H7c-.543 0-.936.292-.993.592L6 5.667l.001 3.17A3.5 3.5 0 018 12v2zm-5-2a1.5 1.5 0 013 0v3a1 1 0 001 1h10a1 1 0 001-1v-3l.007-.145A1.5 1.5 0 0121 12l-.007.145A1.5 1.5 0 0119.5 13.5H19V18H5v-4.5h-.5A1.5 1.5 0 013 12z" clip-rule="evenodd"></path>
          </svg>
                      خانه و آشپزخانه</p>
                  </div>
                  <div class="w-[130px] flex cursor-pointer peer/4 hover:bg-[#fffdfd] text-red justify-center items-center h-1/8">
                    <p class="flex justify-center items-center gap-1">
                      <svg viewBox="0 0 24 24" class="w-[20px] h-[20px]">
          <path fill-rule="evenodd" d="M4.317 12.449L6 11.887V20a1 1 0 001 1h10a1 1 0 001-1v-8.113l1.684.562a1 1 0 001.23-.543l2-4.5a1 1 0 00-.542-1.334l-5-2A1 1 0 0017 4h-2a1 1 0 00-.993.883l-.011.273C13.93 6.234 13.196 7 12 7c-1.253 0-2-.84-2-2a1 1 0 00-1-1H7a1 1 0 00-.371.072l-5 2a1 1 0 00-.543 1.334l2 4.5a1 1 0 001.23.543zm-.981-4.906L7.193 6h.92l.05.19C8.622 7.821 10.038 9 12 9c2.037 0 3.485-1.271 3.887-3h.92l3.858 1.543-1.21 2.721-2.138-.713A1 1 0 0016 10.5V19H8v-8.5a1 1 0 00-1.316-.949l-2.139.713-1.21-2.721z" clip-rule="evenodd"></path>
          </svg>
                      مد و پوشاک</p>
                  </div>
                  <div class="w-[130px] flex cursor-pointer peer/5 hover:bg-[#fffdfd] text-red justify-center items-center h-1/8">
                    <p class="flex justify-center items-center gap-1">
                      <svg viewBox="0 0 18 18" class="w-[20px] h-[20px]">
            <g clip-path="url(#clip0_966_244914)"><path d="M3.179 9.91c.073-.393.497-.638.91-.493.8.282 1.827.728 2.27 1.006.407.256.4.372.387.64l-.003.05c-.003.075-.072.137-.156.137H3.382c-.236 0-.415-.191-.377-.401l.174-.938zM13.912 9.417c.412-.145.837.1.91.494l.173.938c.039.21-.14.401-.377.401h-3.205c-.084 0-.152-.062-.156-.138l-.002-.049c-.014-.268-.02-.384.386-.64.443-.278 1.47-.724 2.271-1.006z"></path><path fill-rule="evenodd" d="M3.043 4.116A2.25 2.25 0 014.987 3h8.027c.8 0 1.54.425 1.943 1.116l1.475 2.529.54-.216a.75.75 0 01.557 1.392l-.484.194c.136.47.205.958.205 1.452V15a.75.75 0 01-.75.75h-.75A.75.75 0 0115 15v-1.51c-3.96.825-8.044.828-12 .011V15a.75.75 0 01-.75.75H1.5A.75.75 0 01.75 15v-2.625c0-.027.001-.052.003-.076a.945.945 0 01-.003-.072v-2.76c0-.494.07-.982.205-1.452L.472 7.82a.75.75 0 11.557-1.392l.54.216 1.474-2.529zm-.435 4.509h13.046c.064.275.096.557.096.842v2.316l-.275.065a28.06 28.06 0 01-13.225-.055V9.467c0-.285.033-.567.096-.842h.262zM4.987 4.5a.75.75 0 00-.648.372L3.025 7.125h11.95l-1.313-2.253a.75.75 0 00-.648-.372H4.987z" clip-rule="evenodd"></path></g><defs><clipPath id="clip0_966_244914"><path d="M0 0h18v18H0z"></path></clipPath></defs>
          </svg>
                      خودرو </p>
                  </div>
                  <div class="p-10 w-[82%] gap-5 flex-col h-full absolute left-0 top-0 bg-white peer-hover/1:flex hover:flex hidden">
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>سامسونگ</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>شیایومی</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>لنووو</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>اپل</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>سونی</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>هوآوی</p>
                    </div>
                  </div>
                  <div class="p-10 gap-5 flex-col w-[82%] h-full absolute left-0 top-0 bg-white peer-hover/2:flex hover:flex hidden">
                      <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>ای سوز</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>اچ پی</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>لنووو</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>اپل</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>سونی</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>دل</p>
                    </div>
                  </div>
                  <div class="p-10 gap-5 flex-col  w-[82%] h-full absolute left-0 top-0 bg-white peer-hover/3:flex hover:flex hidden">
                      <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>ال‌جی</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>شیایومی</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>بوش</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>سامسونگ</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>سونی</p>
                    </div>
                  </div>
                  <div class="p-10 gap-27 flex-row w-[82%] h-full absolute left-0 top-0 bg-white peer-hover/4:flex hover:flex hidden">
                    <div class="flex flex-col gap-7">
                      <h1>مردانه</h1>
                        <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>تی شرت</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>شلولرک</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>شلوار</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>پیراهن مردانه</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>جوراب مردانه</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>کراوات مردانه</p>
                    </div>
                    </div>
                    <div class="flex flex-col gap-7">
                      <h1>زنانه</h1>
                        <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>روسری</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>پیراهن</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>مانتو</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>چادر</p>
                    </div>
                    </div>
                  </div>
                  <div class="p-10 gap-5 flex-col  w-[82%] h-full absolute left-0 top-0 bg-white peer-hover/5:flex hover:flex hidden">  
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>پژو</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>پراید</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>کوییک</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>تسلا</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>پیکان</p>
                    </div>
                    <div class="flex gap-2">
                      <span class="w-[2px] h-[17px] rounded-[1px] bg-red-500 block"></span>
                      <p>کمری</p>
                    </div></div>
                </div>
                <div class="">
                </div>
              </div>
            </div>
          </div>
          <span class="cursor-pointer bg-black dark:bg-white  hidden ad:block w-[1px] h-[24px]"></span>
          <div class="cursor-pointer text-[13px] text-nowrap">ویژه ها</div>
          <span class="cursor-pointer bg-black dark:bg-white block w-[1px] h-[24px]"></span>
          <div class="cursor-pointer text-[13px] text-nowrap">
            شما هم فروشنده باشید!
          </div>
          <span class="cursor-pointer bg-black dark:bg-white block w-[1px] h-[24px]"></span>
          <div class="cursor-pointer text-[13px] text-nowrap">
            کالاهای کارکرده
          </div>
          <span class="cursor-pointer bg-black dark:bg-white blockn ad:block w-[1px] h-[24px]"></span>
          <div class="cursor-pointer text-[13px] text-nowrap  block">سوالی دارید؟</div>
          <span class="cursor-pointer bg-black dark:bg-white hidden ed:block w-[1px] h-[24px]"></span>
          <div class="cursor-pointer text-[13px] text-nowrap hidden ed:block">طلای دیجیتال</div>
        </div>
        <div class="w-[50px] h-[50px] flex ed:hidden justify-center items-center">
          <svg viewBox="0 0 24 24" class="menu cursor-pointer dark:stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0" class="dark:stroke-white"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" class="dark:stroke-white" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g  clip-path="url(#000000clip0_105_1893)"> <circle class="dark:stroke-white" cx="12" cy="12" r="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect class="dark:stroke-white" height="0.01" stroke="#000000" stroke-linejoin="round" stroke-width="3" transform="rotate(90 12.01 12)" width="0.01" x="12.01" y="12"/> <rect height="0.01" class="dark:stroke-white" stroke="#000000" stroke-linejoin="round" stroke-width="3" transform="rotate(90 16.51 12)" width="0.01" x="16.51" y="12"/> <rect height="0.01" stroke="#000000" class="dark:stroke-white" stroke-linejoin="round" stroke-width="3" transform="rotate(90 7.51001 12)" width="0.01" x="7.51001" y="12"/> </g> <defs> <clipPath id="clip0_105_1893"> <rect fill="white" height="24" class="dark:stroke-white" transform="translate(0 0.000976562)" width="24"/> </clipPath> </defs> </g>

        </svg>
      </div>
    </div>
    <div class="pd:absolute relative flex justify-center gap-5 flex-row items-center pd:left-0">
      <div class="flex flex-row gap-5 jd:gap-5">
        <div class="w-[28px] h-full ml-2 rounded-[4px]">
            <a href="./weblog.html">
              <svg
                fill="#000000"
                class="dark:fill-white w-[28px] h-[28px]"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M333.187,237.405c32.761-23.893,54.095-62.561,54.095-106.123C387.282,58.893,328.389,0,256,0
            S124.718,58.893,124.718,131.282c0,43.562,21.333,82.23,54.095,106.123C97.373,268.57,39.385,347.531,39.385,439.795
            c0,39.814,32.391,72.205,72.205,72.205H400.41c39.814,0,72.205-32.391,72.205-72.205
            C472.615,347.531,414.627,268.57,333.187,237.405z M164.103,131.282c0-50.672,41.225-91.897,91.897-91.897
            s91.897,41.225,91.897,91.897S306.672,223.18,256,223.18S164.103,181.954,164.103,131.282z M400.41,472.615H111.59
            c-18.097,0-32.82-14.723-32.82-32.821c0-97.726,79.504-177.231,177.231-177.231s177.231,79.504,177.231,177.231
            C433.231,457.892,418.508,472.615,400.41,472.615z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <span class="bg-black hidden pd:block dark:bg-white w-[1px] h-[24px]"></span>
          <div class="w-[28px] h-full mr-2 pd:ml-10 rounded-[4px]">
            <a href="./shop.html">
              <svg
                fill="#000000"
                class="dark:fill-white w-[28px] h-[28px]"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 492.066 492.066"
                xml:space="preserve"
              >
                <g>
                  <g id="Icons_38_">
                    <path
                      d="M485.128,100.778c-7.25-10.449-19.168-16.69-31.902-16.69H212.607c-8.981,0-16.272,7.288-16.272,16.278
            c0,8.987,7.291,16.275,16.272,16.275h240.618c2.051,0,3.99,1,5.167,2.71c1.178,1.685,1.448,3.846,0.731,5.77L414.03,246.495
            c-0.906,2.454-3.29,4.108-5.899,4.108H155.277L115.001,78.741c-5.01-21.338-23.812-36.25-45.747-36.25h-44.84
            C10.92,42.491,0,53.42,0,66.906C0,80.395,10.92,91.32,24.414,91.32h43.38l54.232,231.405
            c4.908,20.918,23.108,35.574,44.474,36.146c-12.56,9.117-20.791,23.812-20.791,40.516c0,27.722,22.46,50.189,50.181,50.189
            c27.706,0,50.176-22.468,50.176-50.189c0-16.642-8.198-31.281-20.661-40.412h93.623c-12.481,9.131-20.679,23.77-20.679,40.412
            c0,27.722,22.471,50.189,50.175,50.189c27.723,0,50.198-22.468,50.198-50.189c0-16.642-8.204-31.281-20.678-40.412h22.757
            c13.495,0,24.416-10.928,24.416-24.415c0-13.486-10.92-24.414-24.416-24.414H169.232l-6.326-26.99h245.226
            c16.131,0,30.771-10.164,36.399-25.313l45.11-121.396C494.059,124.523,492.374,111.182,485.128,100.778z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
           <div class="hidden items-center ed:flex button2 justify-center">
          <svg
            class="w-[30px] cursor-pointer h-[30px] dark:fill-white"
            viewBox="0 0 24 24"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18H10"
              stroke="#000000"
              class="dark:stroke-white"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 12L16 12"
              stroke="#000000"
              class="dark:stroke-white"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#000000"
              class="dark:stroke-white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      </div>
      <div class="w-1/2 menu h-screen hidden right-0 border-l-1 dark:bg-gray-900 p-10 flex-col gap-10 items-center bg-white absolute z-50 top-0">
        <svg height="80px" class="cursor-pointer menu h-[80px] block mb-3" width="80px" viewBox="0 0 40 40">
              <g>
                <g>
                  <g>
                    <path fill="#231815" class="dark:fill-white" d="M20,28.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5S24.7,28.5,20,28.5z M20,12.5
                c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S24.1,12.5,20,12.5z"></path>
                  </g>
                  <g>
                    <path fill="#231815" class="dark:fill-white" d="M22.1,22.6c-0.1,0-0.3,0-0.4-0.1l-4.2-4.2c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l4.2,4.2
                c0.2,0.2,0.2,0.5,0,0.7C22.3,22.5,22.2,22.6,22.1,22.6z"></path>
                  </g>
                  <g>
                    <path fill="#231815" class="dark:fill-white" d="M17.9,22.6c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l4.2-4.2c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7
                l-4.2,4.2C18.2,22.5,18,22.6,17.9,22.6z"></path>
                  </g>
                </g>
              </g>
            </svg>
          <div class="cursor-pointer text-[13px] text-nowrap">ویژه ها</div>
          <div class="cursor-pointer text-[13px] text-nowrap">
            شما هم فروشنده باشید!
          </div>
          <div class="cursor-pointer text-[13px] text-nowrap">
            کالاهای کارکرده
          </div>
          <div class="cursor-pointer text-[13px] text-nowrap  block">سوالی دارید؟</div>
          <div class="cursor-pointer text-[13px] text-nowrap hidden ed:block">طلای دیجیتال</div>
      </div>
        </header>
        <div
          class="w-[150px] top-0 pb-10 flex-col animate__animated overflow-auto items-center gap-5 bg-white  dark:bg-gray-900 left-0 hidden absolute mega2 h-screen z-50"
        >
          <div
            class="flex items-center justify-center flex-col text-center cursor-pointer gap-2"
          >
            <svg
              height="80px"
              class="cursor-pointer close2 h-[80px] block mb-3"
              width="80px"
              viewBox="0 0 40 40"
            >
              <g>
                <g>
                  <g>
                    <path
                      fill="#231815"
                      class="dark:fill-white"
                      d="M20,28.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5S24.7,28.5,20,28.5z M20,12.5
                c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S24.1,12.5,20,12.5z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#231815"
                      class="dark:fill-white"
                      d="M22.1,22.6c-0.1,0-0.3,0-0.4-0.1l-4.2-4.2c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l4.2,4.2
                c0.2,0.2,0.2,0.5,0,0.7C22.3,22.5,22.2,22.6,22.1,22.6z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#231815"
                      class="dark:fill-white"
                      d="M17.9,22.6c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l4.2-4.2c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7
                l-4.2,4.2C18.2,22.5,18,22.6,17.9,22.6z"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <img
              src="./assets/images/near-slider-1.png"
              class="object-cover w-[80px] h-[80px] rounded-full outline-1 outline-blue-950 outline-offset-2"
              alt="near-slider-1"
            />
            <p
              class="text-[11px] w-[80px]"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              مشاوره خرید لپتاپ گیمینگ
            </p>
          </div>
          <div
            class="flex items-center justify-center flex-col text-center cursor-pointer gap-2"
          >
            <img
              src="./assets/images/near-slider-2.png"
              class="object-cover w-[80px] h-[80px] rounded-full outline-1 outline-blue-950 outline-offset-2"
              alt="near-slider-2"
            />
            <p
              class="text-[11px] w-[80px]"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              اقتصادی یعنی اونیکوما
            </p>
          </div>
          <div
            class="flex items-center justify-center flex-col text-center cursor-pointer gap-2"
          >
            <img
              src="./assets/images/near-slider-3.png"
              class="object-cover w-[80px] h-[80px] rounded-full outline-1 outline-blue-950 outline-offset-2"
              alt="near-slider-3"
            />
            <p
              class="text-[11px] w-[80px]"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              تلویزیون چی بخریم؟!
            </p>
          </div>
          <div
            class="flex items-center justify-center flex-col text-center cursor-pointer gap-2"
          >
            <img
              src="./assets/images/near-slider-4.png"
              class="object-cover w-[80px] h-[80px] rounded-full outline-1 outline-blue-950 outline-offset-2"
              alt="near-slider-4"
            />
            <p
              class="text-[11px] w-[80px]"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              کدوم رو بخریم۲
            </p>
          </div>
          <div
            class="flex items-center justify-center flex-col text-center cursor-pointer gap-2"
          >
            <img
              src="./assets/images/near-slider-5.png"
              class="object-cover w-[80px] h-[80px] rounded-full outline-1 outline-blue-950 outline-offset-2"
              alt="near-slider-4"
            />
            <p
              class="text-[11px] w-[80px]"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              شارژر مگ سیف بیسوس Simple Mini 3
            </p>
          </div>
          <div
            class="flex items-center justify-center flex-col text-center cursor-pointer gap-2"
          >
            <img
              src="./assets/images/near-slider-6.png"
              class="object-cover w-[80px] h-[80px] rounded-full outline-1 outline-blue-950 outline-offset-2"
              alt="near-slider-4"
            />
            <p
              class="text-[11px] w-[80px]"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              کیف لوازم آرایش جادار
            </p>
          </div>
          <div
            class="flex items-center justify-center flex-col text-center cursor-pointer gap-2"
          >
            <img
              src="./assets/images/cdc5c3bd9641e76ecb948e40020ca97e9931338a_1754937356.jpg"
              class="object-cover w-[80px] h-[80px] rounded-full outline-1 outline-blue-950 outline-offset-2"
              alt="near-slider-4"
            />
            <p
              class="text-[11px] w-[80px]"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              تلویزیون خونت میسوزه اگه این رو کار نذاری
            </p>
          </div>
        </div>
`,h=`
<!--start-header-bottom-->
    <header
      class="bg-white sticky dark:bg-gray-900 flex-col ed:top-0 top-31 border-b-1 border-b-gray-300 z-40 w-full h-[55px] flex justify-center items-center gap-3"
      dir="ltr"
    >
      <div
        class="w-full h-auto flex px-5 shadow-2xl flex-row justify-center items-center gap-3"
      >
        <form action="#" class="flex w-[100%] gap-5 justify-center items-center">
          <input
            type="submit"
            name="submit"
            id="submit"
            value="جستجو"
            class="cursor-pointer"
          />
          <input
            type="search"
            name="search"
            id="search"
            required
            placeholder=""
            class="border-1 w-[70%] rounded-[5px] text-center"
          />
          <svg
            fill="#000000"
            height="24px"
            width="24px"
            version="1.1"
            class="dark:fill-white"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 488.4 488.4"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
        s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
        S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
        S381.9,104.65,381.9,203.25z"
                />
              </g>
            </g>
          </svg>
        </form>
      </div>
      </header>  
    <!--end-header-bottom-->
`,v=()=>{let t=document.querySelector(".button2"),e=document.querySelector(".mega2"),s=document.querySelector(".close2"),c=document.querySelector("body"),[a,l,i]=document.querySelectorAll(".menu");a.addEventListener("click",()=>{l.classList.contains("hidden")?(l.classList.remove("hidden"),l.classList.add("flex"),c.classList.add("overflow-hidden")):(l.classList.add("hidden"),l.classList.remove("flex"),c.classList.remove("overflow-hidden"))}),i.addEventListener("click",()=>{l.classList.add("hidden"),l.classList.remove("flex"),c.classList.remove("overflow-hidden")}),t.addEventListener("click",()=>{e.classList.contains("hidden")?(e.classList.remove("hidden"),e.classList.add("flex","animate__jackInTheBox"),c.classList.add("overflow-hidden")):e.classList.contains("animate__rotateOut")&&(e.classList.remove("hidden","animate__rotateOut"),e.classList.add("flex","animate__jackInTheBox"),c.classList.add("overflow-hidden"))}),s.addEventListener("click",()=>{e.classList.remove("flex"),c.classList.remove("overflow-hidden"),e.classList.add("hidden","animate__rotateOut")})},g=`
    <!--start-footer-->
   <span class="block mt-[30px] bg-[#a1a3a8] w-full h-[1px]"></span>
    <footer class="w-[96%] mx-auto mt-[20px]">
      <div class="flex w-full justify-center relative md:flex-row flex-col gap-4 items-center">
        <div class="">
        <img
          src="./assets/images/shop-cart-apply-icon.png"
          alt="online-shop-logo"
        />
        </div>
        <div class="">
         <a
          href="#"
          class="flex gap-2 border-1 p-3 md:absolute md:left-2 justify-center items-center text-[12px] text-[#a1a3a8] border-[#a1a3a8] rounded-[10px]"
          >بازگشت به بالا<svg
            class="w-[15px] h-[15px]"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="#a1a3a8"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <path
                d="m 1 11 c 0 -0.265625 0.105469 -0.519531 0.292969 -0.707031 l 6 -6 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 l 6 6 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 s -0.105469 0.519531 -0.292969 0.707031 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 l -5.292969 -5.292969 l -5.292969 5.292969 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 z m 0 0"
                fill="#a1a3a8"
              />
        </g>
      </svg>
        </a>
        </div>
      </div>
      <div class="flex mt-10 gap-4 ad:flex-row flex-col items-center">
        <div class="w-1/2 text-justify">
          <p class="text-2xl text-[#62646b] dark:text-[#f0f0f0] mb-2">
            بزرگترین فروشگاه اینترنتی ایران
          </p>
          <p class="text-[#81858b] text-[13px] dark:text-[#0fff]">
                به‌سوی خرید آنلاین خوش‌آمدید! تجربه‌ای سریع و آسان در انتظار شماست.
                محصولات با کیفیت و قیمت مناسب در فروشگاه ما موجود است. تخفیف‌های
                ویژه برای اعضای وفادار ارائه می‌شود. ارسال رایگان برای سفارش‌های
                بالای ۲۵۰ هزار تومان. پشتیبانی ۲۴ ساعته برای پاسخ به تمام سؤال‌های
                شما.
          </p>
          <p class="text-[#81858b] text-[13px] hidden text-big dark:text-[#0fff]">
 گارانتی یک ساله برای اطمینان کامل از خرید. نقد و بررسی‌های واقعی مشتریان برای هر محصول. دسته‌بندی‌های هوشمند برای یافتن سریع محصول دلخواه. امکان مقایسه ویژگی‌ها و قیمت‌ها بین محصولات. پرداخت آنلاین یا نقدی درب منزل، به‌دلخواه شما. کد تخفیف ویژه برای اولین خرید شما. محصولات جدید هر روز در فروشگاه اضافه می‌شوند. آموزش‌های ویدئویی استفاده از محصولات در دسترس است. امکان بازگشت کالا در صورت عدم رضایت. پیشنهادهای شخصی‌سازی‌شده بر اساس سلیقه شما. دسته‌بندی‌های لوازم خانگی، دیجیتال، مد و ... . فروش ویژه فصلی با تخفیف‌های چشمگیر. بسته‌های هدیه‌ای برای مناسبت‌های خاص. سبد خرید هوشمند؛ افزودن به سبد و پرداخت در زمان دلخواه. تخفیف‌های گروهی برای خریدهای بزرگ. پروفایل شخصی برای مشاهده تاریخچه خرید. خبرنامه ایمیلی برای دریافت جدیدترین تخفیف‌ها. چت‌ربات هوشمند برای راهنمایی لحظه‌ای. امنیت تراکنش‌ها با رمزنگاری پیشرفته. پیشنهادهای فصلی برای تابستان، نوروز و ... . محصولات با گواهی اصالت و برند معتبر. امکان فیلتر بر اساس قیمت، برند و امتیاز. جستجوی پیشرفته با کلیدواژه‌های دقیق. نمایش جزئیات کامل محصول، شامل ابعاد و وزن. امکان ذخیره لیست علاقه‌مندی‌ها برای خرید بعدی. تخفیف‌های ویژه برای دانشجویان و سربازان. برنامه وفاداری با امتیازهای خرید. امکان خرید به صورت اقساطی بدون بهره. تخفیف‌های ویژه در روزهای تعطیل و جشن‌ها. سرویس بسته‌بندی هدیه با کارت تبریک. امکان انتخاب زمان دقیق تحویل کالا. نمایش نظرات و امتیازهای کاربران برای هر محصول. قابلیت مقایسه چند محصول به‌صورت همزمان. اطلاع‌رسانی لحظه‌ای از وضعیت سفارش از طریق پیامک. امکان ثبت نظرسنجی برای بهبود خدمات. پشتیبانی فنی برای محصولات الکترونیکی. گارانتی تعویض در صورت نقص فنی. فروش ویژه محصولات بازگشت‌پذیر. تخفیف‌های ویژه برای خریدهای اول ماه. امکان خرید به‌صورت پیش‌سفارش برای محصولات جدید. برنامه ارجاع دوستان برای دریافت اعتبار خرید. نمایش تخفیف‌های لحظه‌ای در بنرهای صفحه اصلی. امکان پرداخت با کیف پول دیجیتال. سرویس مشاوره آنلاین برای انتخاب محصول مناسب. امکان مشاهده فیلم‌های معرفی محصول. نمایش مقایسه قیمت با رقبای داخلی. تخفیف‌های ویژه برای خریدهای ترکیبی. امکان افزودن کد تخفیف در سبد خرید. نمایش زمان تخمینی تحویل در صفحه محصول. امکان خرید از طریق اپلیکیشن موبایل. ارسال پیام‌های یادآوری برای سبدهای رها شده. تخفیف‌های ویژه برای خریدهای بزرگ تجاری. نمایش تاریخچه قیمت برای بررسی کاهش‌ها. امکان ثبت شکایت و پیگیری آسان. سرویس جستجوی صوتی برای راحتی کاربران. نمایش گرافیک‌های ۳D برای برخی محصولات. امکان افزودن نظرات تصویری به بررسی‌ها. برنامه‌ریزی خودکار تخفیف‌ها بر اساس موجودی. پشتیبانی چند زبانه برای کاربران بین‌المللی. امکان انتخاب بسته‌بندی سبز و دوست‌دار محیط. تخفیف‌های مخصوص برای خریدهای شبانه‌روز. نمایش تخفیف‌های محدود به تعداد برای فرصت‌های ویژه. امکان استفاده از امتیازهای وفاداری برای خریدهای بعدی. سرویس تحویل در همان روز برای شهرهای بزرگ. امکان انتخاب روش تحویل از بین پست، پیک و دی‌اکس. نمایش تخفیف‌های دوره‌ای برای محصولات پرطرفدار. برنامه تخفیف‌های ماهانه برای دسته‌بندی‌های خاص. امکان دریافت گواهی اصالت محصول به‌صورت دیجیتال. سرویس مشاوره تخصصی برای انتخاب لوازم خانگی. تخفیف‌های ویژه برای مشتریان بازگشت‌پذیر. نمایش تخفیف‌های ترکیبی برای خرید چند محصول. امکان تنظیم اعلان‌های تخفیف برای محصولات دلخواه. سرویس ذخیره‌سازی اطلاعات کارت بانکی به‌صورت امن. پشتیبانی از روش‌های پرداخت بین‌المللی. نمایش جزئیات مالیات و هزینه‌های جانبی برای هر محصول. امکان خرید به‌صورت هدیه برای دیگران. سرویس پیگیری سفارش تا لحظه تحویل. نمایش تخفیف‌های ویژه برای مناسبت‌های ملی. امکان دریافت فاکتور الکترونیکی بلافاصله پس از خرید. سرویس مشاوره سفارشی برای طراحی منزل با محصولات ما. نمایش نظرسنجی‌های کوتاه برای بهبود تجربه خرید. امکان دریافت کد تخفیف از طریق شبکه‌های اجتماعی. سرویس ارسال خودکار ایمیل تأیید سفارش. نمایش تخفیف‌های ویژه برای کاربران ثبت‌نام‌شده. امکان استفاده از کوپن‌های مخصوص در سبد خرید. سرویس اعلان پر شدن موجودی برای محصولات دلخواه. نمایش نظرسنجی‌های رضایت‌مندی پس از دریافت محصول. امکان افزودن یادآوری برای خریدهای دوره‌ای. سرویس تخفیف‌های ویژه برای خریدهای ترکیبی دیجیتال و لوازم خانگی. نمایش تخفیف‌های ویژه برای خریدهای اولین بار. امکان تنظیم فیلترهای شخصی‌سازی‌شده برای نمایش محصولات. سرویس پشتیبانی زنده با ویدئو چت برای مشکلات فنی. نمایش تخفیف‌های ویژه برای محصولات پرفروش. با ما تجربه‌ای متفاوت و لذت‌بخش از خرید آنلاین داشته باشید.
          </p>
          <button class="text-[14px] text-blue-500 cursor-pointer see-more">مشاهده همه
            <svg width="10px" height="10px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(270)" class="fill-blue-500 inline-block">
        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

        <g id="SVGRepo_iconCarrier"> <path d="m 1 11 c 0 -0.265625 0.105469 -0.519531 0.292969 -0.707031 l 6 -6 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 l 6 6 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 s -0.105469 0.519531 -0.292969 0.707031 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 l -5.292969 -5.292969 l -5.292969 5.292969 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 z m 0 0" /> </g>

        </svg>
          </button>
        </div>
        <div class="w-1/2 flex justify-end h-2">
          <form action="./registered.html" class="ad:w-[70%] w-full gap-3 flex ed:flex-row flex-col">
            <input
              type="email"
              name="email"
              required
              oninvalid="this.setCustomValidity('ایمیل خود را وارد کنید')"
              oninput="this.setCustomValidity('')"
              class="ad:w-[80%] w-[90%] bg-[aqua] pr-[5px] dark:bg-gray-700 py-3 h-fit rounded-[5px]"
              id="email"
              placeholder="ایمیل خود را وارد کنید." />
            <input
              type="submit"
              value="ثبت"
              class="p-3 bg-red-500 rounded-[5px] dark:bg-gray-900 h-fit w-fit" />
          </form>
        </div>
      </div>
      <div class="w-full h-[100px] mt-25 text-center flex justify-center items-center text-[#81858b]">
        Copyright © 2025 - All right reserved by we online shoping
      </div>
    </footer>
    <!--end-footer-->
`,f=()=>{let t=document.querySelector(".see-more"),e=document.querySelector(".text-big");t.addEventListener("click",()=>{e.classList.contains("hidden")?(e.classList.remove("hidden"),e.classList.add("flex"),t.innerHTML=`بستن همه <svg width="10px" height="10px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(270)" class="fill-blue-500 inline-block">
        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

        <g id="SVGRepo_iconCarrier"> <path d="m 1 11 c 0 -0.265625 0.105469 -0.519531 0.292969 -0.707031 l 6 -6 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 l 6 6 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 s -0.105469 0.519531 -0.292969 0.707031 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 l -5.292969 -5.292969 l -5.292969 5.292969 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 z m 0 0" /> </g>
        </svg>`):(t.innerHTML=`مشاهده همه <svg width="10px" height="10px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(270)" class="fill-blue-500 inline-block">
        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

        <g id="SVGRepo_iconCarrier"> <path d="m 1 11 c 0 -0.265625 0.105469 -0.519531 0.292969 -0.707031 l 6 -6 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 l 6 6 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 s -0.105469 0.519531 -0.292969 0.707031 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 l -5.292969 -5.292969 l -5.292969 5.292969 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 z m 0 0" /> </g>
        </svg>`,e.classList.remove("flex"),e.classList.add("hidden"))})},w=`
    <!-- start-bottom-btn-->
    <div class="w-full h-auto">
      <div
        class="sm:p-2 ed:p-0 ed:w-[50px] ed:h-[50px] ed:flex justify-center ed:bottom-10 bottom-6 right-6 ed:right-10 fixed items-center dark:bg-gray-900 bg-red-400 rounded-full cursor-pointer z-50 bottom-btn hidden"
      >
        <svg
          fill="#ffffff"
          width="30px"
          height="30px"
          class=""
          viewBox="0 -8.56 105 105"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="_support-person_"
            data-name="
support-person
"
            d="M1183.552,975.061c.236-3.374.392-6.757.731-10.12a44.367,44.367,0,0,0-.771-11.4c-.483-3.069-.134-5.854,1.967-8.283a6.776,6.776,0,0,0,1.016-1.661,12.076,12.076,0,0,1,4.813-5.234c1.658-1.049,3.39-1.988,5.114-2.932a16.6,16.6,0,0,1,6.547-1.934c.87-.08,1.734-.241,2.6-.286a20.447,20.447,0,0,1,3.917-.036c2.064.306,4.058.644,6.12-.117a3.837,3.837,0,0,1,2.887.242,23.149,23.149,0,0,1,2.64,1.3,36.887,36.887,0,0,1,4.3,2.99,17.339,17.339,0,0,1,3.317,3.586,25.725,25.725,0,0,1,3.641,9.743,21.024,21.024,0,0,1-.465,9.708,3.788,3.788,0,0,0-.183,1.6,120.63,120.63,0,0,1,1.229,12.7c.013.217-.005.507.121.626.2.189.584.434.755.355,1.694-.764,3.373-1.56,5.014-2.43a1.389,1.389,0,0,0,.6-1.042c-.01-1.308-.135-2.615-.243-3.919-.081-.98-.244-1.95-.295-2.927a70.646,70.646,0,0,0-.683-7.5c-.568-3.554-.953-7.137-1.434-10.7a19.307,19.307,0,0,0-2.15-6.159,31.337,31.337,0,0,0-6.233-8.342c-3.627-3.5-8.188-4.909-12.8-6.25a5.848,5.848,0,0,0-3.536.055,27.893,27.893,0,0,1-7.032,1.437,46.179,46.179,0,0,0-13.118,3.89,14.007,14.007,0,0,0-5.933,5c-2.292,3.333-4.376,6.833-5.114,10.9-.466,2.568-.718,5.177-1.032,7.772-.21,1.73-.4,3.47-.514,5.208a13.927,13.927,0,0,0,0,3.592,34.561,34.561,0,0,1,.51,6.523c.049,5.575,0,11.152.059,16.73a15.48,15.48,0,0,1-1.157,5.738,3.93,3.93,0,0,1-2.431,2.489,21.86,21.86,0,0,1-3.778,1.011,12.125,12.125,0,0,1-6.1-.854,8.769,8.769,0,0,1-4.841-4.66c-.612-1.278-1.165-2.585-1.778-3.865a26.722,26.722,0,0,1-2.261-9.5,22.339,22.339,0,0,1,1.7-10.889,9.491,9.491,0,0,0,.784-2.15,7.2,7.2,0,0,1,3.212-4.744c.527-.385.963-.892,1.472-1.308,2.31-1.885,4.852-2.886,7.9-2.131.955.237,1.175.07,1.381-.861.26-1.174.352-2.381.657-3.537,1.754-6.67,3.853-13.206,7.818-18.97a19.253,19.253,0,0,1,1.617-2.06,30.434,30.434,0,0,1,15.1-9.335,64.713,64.713,0,0,1,16.821-2.182,7.858,7.858,0,0,1,1.958.1c4.755,1.294,9.463,2.706,13.244,6.125,1.052.951,2.173,1.826,3.226,2.774a19.993,19.993,0,0,1,5.4,8.486,26.389,26.389,0,0,1,1.656,6.987,2.4,2.4,0,0,0,.028.328,71.37,71.37,0,0,1,1.458,8.038,1.124,1.124,0,0,0,1.382,1.047c.754-.109,1.5-.3,2.249-.429a10.237,10.237,0,0,1,6.391.838,8.18,8.18,0,0,1,2.411,1.644,25.832,25.832,0,0,1,6.274,11.7,33.634,33.634,0,0,1,.653,10.419,5.14,5.14,0,0,1-.327,1.6c-1,2.406-2.005,4.816-3.105,7.177a12.51,12.51,0,0,1-3.113,3.773,5.655,5.655,0,0,1-2.9,1.415,24.286,24.286,0,0,1-6.844.431,14.578,14.578,0,0,1-2.569-.473,4.3,4.3,0,0,1-3.3-4.025c-.145-1.409-.074-2.84-.117-4.26a10.944,10.944,0,0,0-.153-1.944c-.048-.229-.547-.594-.695-.534-1.921.761-3.83,1.561-5.7,2.438-.308.145-.508.687-.6,1.082-.272,1.17-.522,2.345-.675,3.531a10.5,10.5,0,0,1-2.163,5.379c-.749.937-1.364,1.982-2.02,2.989a16.434,16.434,0,0,1-5.716,5.3c-2.649,1.514-5.377,2.893-8.041,4.383a13.085,13.085,0,0,1-6.935,1.543,22.215,22.215,0,0,1-7.373-1.284,40.4,40.4,0,0,0-4.384-1.3,4.925,4.925,0,0,1-2.467-1.509,53.25,53.25,0,0,1-5.887-7.86,4.021,4.021,0,0,1-.439-.878c-1.58-4.652-3.061-9.333-3.151-14.309-.034-1.86-.006-3.721-.006-5.576C1183.643,975.067,1183.6,975.063,1183.552,975.061Zm-16.178-2.088a1.193,1.193,0,0,0-.256.091c-.045.027-.058.108-.085.163l.244-.35c.408-.016.7-.155.7-.627a3.038,3.038,0,0,0,.931-.127c.543-.264,1.112-.375,1.4.189a2.089,2.089,0,0,1,.136,1.517,12.975,12.975,0,0,1-1.254,2.256c-1.087,1.742-2.217,3.455-3.281,5.206a7.315,7.315,0,0,0-.514,1.487c-.655.238-.539.832-.617,1.335a1.24,1.24,0,0,0-.233.1.424.424,0,0,0-.108.123l.248-.319a1.18,1.18,0,0,0,.633-1.3,4.958,4.958,0,0,0,1.1-.519c1.183-.954,2.324-1.966,3.492-2.94.247-.21.99.085,1.066.446a2.247,2.247,0,0,1,.053,1.252c-.523,1.2-1.138,2.353-1.755,3.508-.567,1.056-1.2,2.081-1.766,3.136a3.192,3.192,0,0,0-.245.922.6.6,0,0,0,.093.3c.127.291.3.314.5.057.795-1.036,1.565-2.094,2.388-3.1a1.719,1.719,0,0,1,1.816-.379,2,2,0,0,1,.879,1.652,6.156,6.156,0,0,1-.307,1.272c-.349.917-.754,1.812-1.107,2.724a2.513,2.513,0,0,0-.179.945c0,.164.23.463.351.461a5.562,5.562,0,0,0,1.592-.187c1.685-.541,2.169-1.147,1.881-2.9a28.9,28.9,0,0,1-.067-4.876c0-1.963.006-3.931-.078-5.89-.1-2.285-.312-4.566-.434-6.851-.089-1.634-.066-3.275-.18-4.907a13.61,13.61,0,0,0-.5-2.882,2.066,2.066,0,0,0-.98-1.216,5.134,5.134,0,0,0-4.432-.066,8.818,8.818,0,0,0-4.247,5.183c-.019.059.1.188.183.25s.214.1.26.061c.686-.528,1.327-1.125,2.047-1.6a13.809,13.809,0,0,1,2.289-1.22,2.04,2.04,0,0,1,1.994.837,1.361,1.361,0,0,1-.072,1.544c-.758,1.062-1.573,2.085-2.372,3.123-.33.428-.73.821-.569,1.441C1167.545,972.274,1167.379,972.548,1167.374,972.973Zm79.335,6.473a1.281,1.281,0,0,0,.6-1.349c.819-.22,1.629-.484,2.457-.645a1.426,1.426,0,0,1,1.571,1.294,4.826,4.826,0,0,1-.955,3.056c-.849,1.394-1.742,2.762-2.582,4.16-.34.565.2.717.551.921a1.126,1.126,0,0,0,1.486-.193,1.907,1.907,0,0,1,2.629-.411.932.932,0,0,0,1.168-.167,7.142,7.142,0,0,0,2.189-3.929,21.921,21.921,0,0,0,.355-10.02c-.543-2.77-1.112-5.538-1.69-8.305-.11-.529-.335-1.032-.481-1.558a6.656,6.656,0,0,0-2.256-3.133,4.323,4.323,0,0,0-3.408-.742c-1.086.07-.772,1.155-1.2,1.7a10.087,10.087,0,0,1-1.513,1.7,2.549,2.549,0,0,0-.928,2.617,7.953,7.953,0,0,0,.273.922,2.924,2.924,0,0,0,.825-.328c.764-.606,1.445-1.333,2.253-1.87a4.5,4.5,0,0,1,1.814-.621,1.458,1.458,0,0,1,1.453,1.982,16.073,16.073,0,0,1-.8,1.419q-.894,1.533-1.8,3.065a1.186,1.186,0,0,0-.235.121c-.039.032-.048.1-.072.155.076-.119.151-.24.225-.359a7.918,7.918,0,0,1,1.587.231c1.523.548,1.824,1.828,1.2,2.791-.766,1.174-1.54,2.339-2.3,3.515-.582.9-1.15,1.81-1.724,2.716a1.421,1.421,0,0,0-.6,1.366c-.431.007-.618.276-.7.654a5.515,5.515,0,0,0-.746.539c-.092.092-.062.312-.088.475.173-.065.44-.085.5-.2a4.441,4.441,0,0,0,.243-.9C1246.244,979.887,1246.477,979.665,1246.709,979.446Zm-18.155-15.5c-.065-1.408-.121-2.938-.214-4.467a15.763,15.763,0,0,0-.251-1.945,1.2,1.2,0,0,0-1.078-1.057c-.326-.038-.656-.008-.983-.036a18.713,18.713,0,0,1-13.158-6.47c-.5-.579-.963-1.193-1.493-1.742a.748.748,0,0,0-1.15.011c-.973,1.031-1.848,2.163-2.885,3.122a35.412,35.412,0,0,1-15.376,8.389c-3.317.859-2.86.714-2.854,3.962a8.982,8.982,0,0,0,.048.983,100.963,100.963,0,0,1,1.017,13.044,9.514,9.514,0,0,0,.136,1.633,44.14,44.14,0,0,0,5.5,15.654,9.606,9.606,0,0,0,3.787,3.993c1.742.882,3.529,1.675,5.3,2.495a1.737,1.737,0,0,0,.642.127,13.679,13.679,0,0,0,4.868-.3,28.853,28.853,0,0,0,10.681-5.5c2.843-2.435,4.464-5.579,5.918-8.885a.39.39,0,0,0,.007-.317c-.172-.237-.382-.641-.571-.637a14.575,14.575,0,0,0-2.927.256,38.882,38.882,0,0,1-7.368,1.451,1.223,1.223,0,0,0-.868.812,8.779,8.779,0,0,1-1.9,4.118c-1.287,1.854-4.862,2.579-6.57,1.852a10.98,10.98,0,0,1-4.906-3.7,6.052,6.052,0,0,1-.625-6.228,7.727,7.727,0,0,1,10.845-3.248,3.8,3.8,0,0,1,.539.373,2.835,2.835,0,0,0,3.293.449,17.237,17.237,0,0,1,4.728-1.221,20.763,20.763,0,0,0,5-1.452,2.639,2.639,0,0,0,1.912-2.718,18.9,18.9,0,0,1,.293-4.893C1228.66,969.268,1228.484,966.673,1228.554,963.944ZM1193.878,947.8l.17,0a28.26,28.26,0,0,0,.2,2.9,8,8,0,0,0,.731,2.109.894.894,0,0,0,.825.3.844.844,0,0,0,.405-.732,25.206,25.206,0,0,1-.689-6.084c0-.57-.525-1.133-.768-1.717-.123-.291-.25-.369-.477-.14-.148.146-.371.321-.377.488C1193.86,945.884,1193.878,946.842,1193.878,947.8Zm30.18-2.785a.931.931,0,0,0-.129-.431,3.7,3.7,0,0,0-3.6-1.692c-.216.031-.427.422-.541.69a.833.833,0,0,0,.1.613c.292.57.485.01.7-.1.286-.138.608-.5.819-.444a1.567,1.567,0,0,1,.974.729c.336.9.5,1.867.751,2.8a1.822,1.822,0,0,0,.3.471.991.991,0,0,0,.169-.273C1223.751,946.646,1223.887,945.907,1224.058,945.017Zm-8.35-3.566c.1.4.247,1,.4,1.6.794-.422.408-1.224.578-1.847a1.138,1.138,0,0,0-.13-.593c-.031-.087-.163-.221-.22-.207a.774.774,0,0,0-.453.232A3.008,3.008,0,0,0,1215.708,941.451Zm-13.013,7.216a5.882,5.882,0,0,0-.05-.628.9.9,0,0,0-.159-.269,3.038,3.038,0,0,0-.249.731c-.01.133.181.279.28.417C1202.576,948.836,1202.636,948.75,1202.695,948.667Z"
            transform="translate(-1157.5 -919.916)"
            fill-rule="evenodd"/>
        </svg>
      </div>
      <div
        class="w-[350px] h-[400px] animate__animated dark:bg-gray-900 flex-col fixed rounded-2xl cursor-auto hidden support z-50 bottom-18 ed:bottom-26 right-3 bg-red-700 border-1 border-[#a1a3a8]"
      >
        <div class="w-full h-1/6 flex">
          <svg
            height="80px"
            class="cursor-pointer close1 h-[80px] block mb-3 fill-white"
            width="80px"
            viewBox="0 0 40 40"
          >
            <g>
              <g>
                <g>
                  <path
                    fill=""
                    d="M20,28.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5S24.7,28.5,20,28.5z M20,12.5
      c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S24.1,12.5,20,12.5z"
                  ></path>
                </g>
                <g>
                  <path
                    fill=""
                    d="M22.1,22.6c-0.1,0-0.3,0-0.4-0.1l-4.2-4.2c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l4.2,4.2
      c0.2,0.2,0.2,0.5,0,0.7C22.3,22.5,22.2,22.6,22.1,22.6z"
                  ></path>
                </g>
                <g>
                  <path
                    fill=""
                    d="M17.9,22.6c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l4.2-4.2c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7
      l-4.2,4.2C18.2,22.5,18,22.6,17.9,22.6z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <p class="text-center text-white mt-[7px] flex items-center">
            پشتیبانی آنلاین
          </p>
        </div>
        <div
          class="w-full px-8 py-3 h-5/6 bg-white dark:bg-gray-700 rounded-b-2xl overflow-auto"
        >
          <p>
            سلام👋👋
            <br />
            اینجا می‌توانید تعدادی از پرسش های متداول را ببینید!
          </p>
          <div class="">
            <p
              class="text-[#535353] text-sm flex items-center cursor-pointer mt-3 dark:text-[#b4afaf] question"
            >
              چگونه میتوانم یک پروفایل ایجاد کنم؟<svg
                id="expandMore"
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7 fill-[#535353]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"
                ></path>
              </svg>
            </p>
            <div class="answer hidden text-justify mt-1">
              در وب سایت روی گزینه "ثبت نام" کلیک کنید. میتوانید با استفاده از
              شماره موبایل ثبت نام خود را انجام دهید. (کد فعال سازی برایتان
              پیامک میشود .) بعد از وارد نمودن کد فعالسازی ، ثبت نام انجام می
              شود. سپس روی گزینه تکمیل اطلاعات کلیک و اطلاعات خود را تکمیل
              نمایید.
            </div>
            <p
              class="text-[#535353] text-sm flex items-center cursor-pointer mt-3 dark:text-[#b4afaf] question2"
            >
              چطور در سایت سفارش خود را ثبت کنم ؟<svg
                id="expandMore"
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7 fill-[#535353]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"
                ></path>
              </svg>
            </p>
            <div class="answer2 hidden text-justify mt-1">
              بعد از ورود به پروفایل ، کالای مدنظر خود را به سبد خرید اضافه کنید
              ، پس از انتخاب آدرس میتوانید نوع پرداخت خود را انتخاب کنید.بعد از
              اتمام ثبت سفارش ، سیستم کد سفارش شما را نمایش خواهد داد.
            </div>
            <p
              class="text-[#535353] text-sm flex items-center cursor-pointer mt-3 dark:text-[#b4afaf] question3"
            >
              کالایی را که در طرح پیشنهاد شگفت انگیز می باشد می توان با تعداد
              بیش از یک عدد خریداری کرد؟
              <svg
                id="expandMore"
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7 fill-[#535353]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.707 9.29l-1.414 1.414 5 5a1 1 0 001.414 0l5-5-1.414-1.414L12 13.583 7.707 9.29z"></path>
              </svg>
            </p>
            <div class="answer3 hidden text-justify mt-1">
              به دلیل اینکه طرح پیشنهاد شگفت انگیز یک طرح تشویقی خرید است،
              دیجی‌کالا تعهدی در قبال سفارش‏‌های تعدادی ندارد و در صورتی که
              امکان فروش بیشتر از یک عدد وجود داشته باشد، هماهنگی‏‌های لازم با
              مشتری انجام خواهد شد.
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end-bottom-btn-->
`,u=()=>{let t=document.querySelector(".close1"),e=document.querySelector(".bottom-btn"),s=document.querySelector(".support"),c=document.querySelector(".question"),a=document.querySelector(".answer"),l=document.querySelector(".question2"),i=document.querySelector(".answer2"),d=document.querySelector(".question3"),r=document.querySelector(".answer3");e.addEventListener("click",()=>{s.classList.contains("hidden")?(s.classList.remove("hidden"),s.classList.add("flex")):(s.classList.remove("flex"),s.classList.add("hidden"))}),t.addEventListener("click",()=>{s.classList.remove("flex"),s.classList.add("hidden")}),c.addEventListener("click",()=>{a.classList.contains("hidden")?(a.classList.remove("hidden"),a.classList.add("flex")):(a.classList.remove("flex"),a.classList.add("hidden"))}),l.addEventListener("click",()=>{i.classList.contains("hidden")?(i.classList.remove("hidden"),i.classList.add("flex")):(i.classList.remove("flex"),i.classList.add("hidden"))}),d.addEventListener("click",()=>{r.classList.contains("hidden")?(r.classList.remove("hidden"),r.classList.add("flex")):(r.classList.remove("flex"),r.classList.add("hidden"))})},b=`
    <!--start-dark-btn-->
    <div class="w-full h-auto flex justify-center items-center ed:block">
      <div
        class="sm:p-2 ed:p-0 ed:w-[50px] ed:h-[50px] justify-center ed:bottom-10 rounded-full ed:left-6 bottom-6 flex fixed items-center dark:bg-gray-500 bg-yellow-400 cursor-pointer z-40 dark-btn"
      >
<svg version="1.1" width="30px" height="30px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xml:space="preserve" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path style="fill:#000000;" d="M144.777,207.493h-14.94v-14.94c0-9.267-7.514-16.783-16.783-16.783s-16.783,7.515-16.783,16.783 v14.94H81.33c-9.269,0-16.783,7.515-16.783,16.783s7.514,16.783,16.783,16.783h14.941v14.94c0,9.267,7.514,16.783,16.783,16.783 c9.269,0,16.783-7.515,16.783-16.783v-14.94h14.94c9.269,0,16.783-7.515,16.783-16.783S154.046,207.493,144.777,207.493z"/> <path style="fill:transparent;" d="M423.941,79.796c-15.667-15.666-32.934-28.737-51.276-39.234 c53.224,92.95,40.166,213.516-39.211,292.892s-199.942,92.435-292.891,39.211c10.497,18.342,23.568,35.609,39.234,51.276 c95.031,95.031,249.113,95.031,344.144,0S518.974,174.827,423.941,79.796z"/> <path style="fill:#000000;" d="M441.124,430.321c1.307-1.385,2.605-2.777,3.877-4.186c0.06-0.067,0.119-0.136,0.178-0.201 c43.185-47.845,66.816-109.139,66.816-174.067s-23.63-126.22-66.815-174.065c-0.06-0.067-0.117-0.136-0.178-0.201 c-1.274-1.408-2.569-2.799-3.877-4.186c-0.228-0.242-0.45-0.488-0.678-0.73c-1.524-1.601-3.068-3.187-4.637-4.756 c-1.853-1.853-3.737-3.664-5.639-5.456c-0.361-0.339-0.72-0.68-1.082-1.017c-1.918-1.787-3.858-3.548-5.824-5.273 c-0.134-0.117-0.272-0.233-0.406-0.351c-2.037-1.781-4.1-3.528-6.188-5.241c-0.069-0.055-0.136-0.112-0.203-0.168 c-2.182-1.787-4.394-3.534-6.629-5.248c-0.069-0.054-0.139-0.106-0.21-0.159c-4.536-3.469-9.18-6.782-13.926-9.937 c-0.008-0.005-0.017-0.012-0.025-0.017c-9.665-6.424-19.748-12.203-30.219-17.281c-14.79-7.183-30.351-12.973-46.251-17.212 c-5.785-1.547-11.958,0.112-16.192,4.352c-4.234,4.236-5.889,10.407-4.345,16.193c11.368,42.569,10.174,87.194-3.456,129.048 c-2.87,8.814,1.948,18.286,10.761,21.154c8.813,2.871,18.285-1.947,21.154-10.761c12.525-38.459,15.901-78.952,10.056-118.639 c4.608,1.871,9.155,3.894,13.619,6.06c3.227,1.566,6.399,3.226,9.541,4.941c47.923,87.779,32.288,197.631-38.756,268.675 c-42.782,42.782-99.668,66.343-160.183,66.346c-37.986,0.002-75.396-9.558-108.518-27.636c-1.707-3.13-3.36-6.29-4.917-9.502 c-2.172-4.474-4.196-9.026-6.069-13.643c80.695,11.76,163.502-15.088,221.833-73.419c6.554-6.554,6.554-17.18,0-23.736 c-6.554-6.552-17.18-6.552-23.736,0c-57.017,57.02-140.889,79.499-218.888,58.668c-5.785-1.542-11.958,0.111-16.193,4.343 c-4.236,4.233-5.896,10.404-4.353,16.192c4.234,15.886,10.024,31.447,17.209,46.246c5.078,10.469,10.855,20.55,17.278,30.214 c0.01,0.017,0.022,0.034,0.032,0.049c3.148,4.736,6.455,9.37,9.915,13.896c0.06,0.081,0.123,0.161,0.183,0.24 c1.707,2.227,3.449,4.431,5.229,6.606c0.064,0.077,0.129,0.154,0.193,0.233c1.703,2.074,3.439,4.125,5.209,6.149 c0.126,0.143,0.248,0.289,0.374,0.431c1.72,1.959,3.474,3.892,5.255,5.803c0.346,0.371,0.695,0.74,1.042,1.109 c1.787,1.896,3.595,3.778,5.443,5.625c49.131,49.131,114.455,76.189,183.94,76.189c69.483,0,134.807-27.058,183.94-76.189 c1.569-1.569,3.113-3.155,4.637-4.756C440.676,430.81,440.896,430.563,441.124,430.321z M412.074,412.072 c-42.792,42.792-99.687,66.36-160.204,66.36c-60.52,0-117.414-23.568-160.206-66.36c-0.029-0.029-0.057-0.06-0.086-0.089 c22.63,6.285,46.137,9.517,69.829,9.516c69.478-0.003,134.794-27.057,183.915-76.178c67.315-67.316,91.299-164.984,66.694-253.715 c0.018,0.018,0.039,0.037,0.059,0.055c52.45,52.449,73.759,124.431,63.925,192.749c-1.035,7.191-2.415,14.342-4.14,21.425 c-0.863,3.541-1.811,7.067-2.846,10.571c-0.517,1.752-1.057,3.499-1.618,5.241c-1.121,3.482-2.329,6.945-3.623,10.38 c-1.294,3.435-2.675,6.846-4.14,10.227s-3.019,6.735-4.659,10.056c-0.819,1.661-1.661,3.313-2.524,4.958 c-1.725,3.288-3.538,6.542-5.434,9.759C437.523,383.115,425.877,398.27,412.074,412.072z"/> </g>
</svg>
      </div>
    </div>
    <!--end-dark-btn -->
`,m=()=>{let t=document.querySelector("html"),e=document.querySelector(".dark-btn"),s=!0;e.addEventListener("click",()=>{s?(t.classList.add("dark"),e.innerHTML=`
             <svg width="30px" height="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.984 511.984" xml:space="preserve" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g> <path style="fill:#000000;" d="M255.992,85.333c-5.891,0-10.656-4.781-10.656-10.671V10.664C245.336,4.773,250.102,0,255.992,0 c5.906,0,10.672,4.773,10.672,10.664v63.998C266.664,80.552,261.898,85.333,255.992,85.333z"/> <path style="fill:#000000;" d="M255.992,511.984C255.992,511.984,256.008,511.984,255.992,511.984 c-5.875,0-10.656-4.781-10.656-10.656v-63.997c0-5.906,4.781-10.688,10.672-10.688l0,0c5.891,0,10.656,4.781,10.656,10.688v63.997 C266.664,507.203,261.898,511.984,255.992,511.984z"/> </g> <g> <path style="fill:#000000;" d="M135.324,135.316c-4.172,4.164-10.922,4.164-15.078,0L74.982,90.06 c-4.156-4.164-4.156-10.914,0-15.078c4.172-4.172,10.922-4.172,15.094,0l45.248,45.248 C139.496,124.394,139.496,131.152,135.324,135.316z"/> <path style="fill:#000000;" d="M437.018,437.003L437.018,437.003c-4.172,4.172-10.922,4.172-15.094,0l-45.249-45.25 c-4.172-4.172-4.172-10.921,0-15.077l0,0c4.172-4.172,10.922-4.172,15.094,0l45.249,45.249 C441.174,426.081,441.174,432.831,437.018,437.003z"/> </g> <g> <path style="fill:#000000;" d="M85.342,255.992c0,5.891-4.781,10.664-10.672,10.664H10.672c-5.891,0-10.656-4.773-10.672-10.664 c0-5.891,4.781-10.664,10.672-10.664H74.67C80.56,245.328,85.342,250.101,85.342,255.992z"/> <path style="fill:#000000;" d="M511.984,255.992L511.984,255.992c0,5.891-4.766,10.664-10.656,10.664h-63.997 c-5.891,0-10.672-4.773-10.672-10.664l0,0c0-5.891,4.781-10.664,10.672-10.664h63.997 C507.219,245.328,511.984,250.101,511.984,255.992z"/> </g> <g> <path style="fill:#000000;" d="M135.324,376.676c4.172,4.156,4.172,10.905,0,15.077l-45.248,45.25 c-4.172,4.172-10.922,4.172-15.094,0c-4.156-4.172-4.156-10.922,0-15.078l45.264-45.249 C124.402,372.504,131.152,372.504,135.324,376.676z"/> <path style="fill:#000000;" d="M437.018,74.974C437.018,74.982,437.018,74.974,437.018,74.974c4.155,4.171,4.155,10.921,0,15.085 l-45.265,45.256c-4.156,4.164-10.906,4.164-15.078,0l0,0c-4.172-4.164-4.172-10.922,0-15.086l45.249-45.256 C426.096,70.81,432.846,70.81,437.018,74.974z"/> <path style="fill:transparent;" d="M255.992,394.643c-76.45,0-138.651-62.186-138.651-138.651c0-76.458,62.201-138.66,138.651-138.66 c76.467,0,138.668,62.202,138.668,138.66C394.66,332.458,332.459,394.643,255.992,394.643z"/> </g> <path style="fill:#000000;" d="M255.992,106.661c-82.466,0-149.323,66.857-149.323,149.331c0,82.466,66.857,149.339,149.323,149.339 c82.482,0,149.34-66.873,149.34-149.339C405.332,173.518,338.474,106.661,255.992,106.661z M346.505,346.489 c-24.171,24.187-56.311,37.498-90.513,37.498c-34.187,0-66.326-13.312-90.497-37.498c-24.171-24.155-37.499-56.311-37.499-90.497 s13.328-66.334,37.499-90.505c24.171-24.178,56.311-37.491,90.497-37.491c34.202,0,66.342,13.313,90.513,37.491 c24.171,24.171,37.483,56.319,37.483,90.505C383.988,290.179,370.676,322.334,346.505,346.489z"/> </g>
</svg>
    `,s=!1):(t.classList.remove("dark"),e.innerHTML=`
      <svg version="1.1" width="30px" height="30px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xml:space="preserve" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path style="fill:#000000;" d="M144.777,207.493h-14.94v-14.94c0-9.267-7.514-16.783-16.783-16.783s-16.783,7.515-16.783,16.783 v14.94H81.33c-9.269,0-16.783,7.515-16.783,16.783s7.514,16.783,16.783,16.783h14.941v14.94c0,9.267,7.514,16.783,16.783,16.783 c9.269,0,16.783-7.515,16.783-16.783v-14.94h14.94c9.269,0,16.783-7.515,16.783-16.783S154.046,207.493,144.777,207.493z"/> <path style="fill:transparent;" d="M423.941,79.796c-15.667-15.666-32.934-28.737-51.276-39.234 c53.224,92.95,40.166,213.516-39.211,292.892s-199.942,92.435-292.891,39.211c10.497,18.342,23.568,35.609,39.234,51.276 c95.031,95.031,249.113,95.031,344.144,0S518.974,174.827,423.941,79.796z"/> <path style="fill:#000000;" d="M441.124,430.321c1.307-1.385,2.605-2.777,3.877-4.186c0.06-0.067,0.119-0.136,0.178-0.201 c43.185-47.845,66.816-109.139,66.816-174.067s-23.63-126.22-66.815-174.065c-0.06-0.067-0.117-0.136-0.178-0.201 c-1.274-1.408-2.569-2.799-3.877-4.186c-0.228-0.242-0.45-0.488-0.678-0.73c-1.524-1.601-3.068-3.187-4.637-4.756 c-1.853-1.853-3.737-3.664-5.639-5.456c-0.361-0.339-0.72-0.68-1.082-1.017c-1.918-1.787-3.858-3.548-5.824-5.273 c-0.134-0.117-0.272-0.233-0.406-0.351c-2.037-1.781-4.1-3.528-6.188-5.241c-0.069-0.055-0.136-0.112-0.203-0.168 c-2.182-1.787-4.394-3.534-6.629-5.248c-0.069-0.054-0.139-0.106-0.21-0.159c-4.536-3.469-9.18-6.782-13.926-9.937 c-0.008-0.005-0.017-0.012-0.025-0.017c-9.665-6.424-19.748-12.203-30.219-17.281c-14.79-7.183-30.351-12.973-46.251-17.212 c-5.785-1.547-11.958,0.112-16.192,4.352c-4.234,4.236-5.889,10.407-4.345,16.193c11.368,42.569,10.174,87.194-3.456,129.048 c-2.87,8.814,1.948,18.286,10.761,21.154c8.813,2.871,18.285-1.947,21.154-10.761c12.525-38.459,15.901-78.952,10.056-118.639 c4.608,1.871,9.155,3.894,13.619,6.06c3.227,1.566,6.399,3.226,9.541,4.941c47.923,87.779,32.288,197.631-38.756,268.675 c-42.782,42.782-99.668,66.343-160.183,66.346c-37.986,0.002-75.396-9.558-108.518-27.636c-1.707-3.13-3.36-6.29-4.917-9.502 c-2.172-4.474-4.196-9.026-6.069-13.643c80.695,11.76,163.502-15.088,221.833-73.419c6.554-6.554,6.554-17.18,0-23.736 c-6.554-6.552-17.18-6.552-23.736,0c-57.017,57.02-140.889,79.499-218.888,58.668c-5.785-1.542-11.958,0.111-16.193,4.343 c-4.236,4.233-5.896,10.404-4.353,16.192c4.234,15.886,10.024,31.447,17.209,46.246c5.078,10.469,10.855,20.55,17.278,30.214 c0.01,0.017,0.022,0.034,0.032,0.049c3.148,4.736,6.455,9.37,9.915,13.896c0.06,0.081,0.123,0.161,0.183,0.24 c1.707,2.227,3.449,4.431,5.229,6.606c0.064,0.077,0.129,0.154,0.193,0.233c1.703,2.074,3.439,4.125,5.209,6.149 c0.126,0.143,0.248,0.289,0.374,0.431c1.72,1.959,3.474,3.892,5.255,5.803c0.346,0.371,0.695,0.74,1.042,1.109 c1.787,1.896,3.595,3.778,5.443,5.625c49.131,49.131,114.455,76.189,183.94,76.189c69.483,0,134.807-27.058,183.94-76.189 c1.569-1.569,3.113-3.155,4.637-4.756C440.676,430.81,440.896,430.563,441.124,430.321z M412.074,412.072 c-42.792,42.792-99.687,66.36-160.204,66.36c-60.52,0-117.414-23.568-160.206-66.36c-0.029-0.029-0.057-0.06-0.086-0.089 c22.63,6.285,46.137,9.517,69.829,9.516c69.478-0.003,134.794-27.057,183.915-76.178c67.315-67.316,91.299-164.984,66.694-253.715 c0.018,0.018,0.039,0.037,0.059,0.055c52.45,52.449,73.759,124.431,63.925,192.749c-1.035,7.191-2.415,14.342-4.14,21.425 c-0.863,3.541-1.811,7.067-2.846,10.571c-0.517,1.752-1.057,3.499-1.618,5.241c-1.121,3.482-2.329,6.945-3.623,10.38 c-1.294,3.435-2.675,6.846-4.14,10.227s-3.019,6.735-4.659,10.056c-0.819,1.661-1.661,3.313-2.524,4.958 c-1.725,3.288-3.538,6.542-5.434,9.759C437.523,383.115,425.877,398.27,412.074,412.072z"/> </g>

</svg>
    `,s=!0)})},k=`
        <!--start-main-->
      <div class="w-[80%] my-15 flex flex-col ed:flex-row gap-7 ed:gap-0 items-center justify-between mx-auto">
         <div class="flex flex-col text-center items-center gap-2">
            <div class="w-[200px] h-[200px]">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     viewBox="0 0 460 460" xml:space="preserve">
<g>
    <path style="fill:#C2FBFF;" d="M230,0C102.975,0,0,102.974,0,230c0,115.344,84.906,210.857,195.627,227.449l264.371-228.393
        C459.489,102.464,356.71,0,230,0z"/>
    <path style="fill:#71E2F0;" d="M460,230c0-0.316-0.011-0.629-0.012-0.944l-59.373-59.373l-77.846,17.548L217.828,82.289H203.38
        L83.101,203.976l20.551,161.49l91.976,91.976C206.842,459.122,218.318,460,230,460C357.026,460,460,357.025,460,230z"/>
    
        <rect x="134.723" y="47.864" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 164.249 326.3948)" style="fill:#366796;" width="30" height="162.633"/>
    
        <rect x="228.96" y="114.18" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 438.332 439.9225)" style="fill:#273B7A;" width="162.633" height="30"/>
    <path style="fill:#5488A8;" d="M230,199.682l-160.615,10l22.038,134.873c2.661,16.284,18.338,29.607,34.838,29.607H230
        l28.668-82.24L230,199.682z"/>
    <path style="fill:#366796;" d="M230,199.682v174.48h103.739c16.5,0,32.177-13.323,34.838-29.607l22.038-134.873L230,199.682z"/>
    <rect x="220" y="199.682" style="fill:#71E2F0;" width="20" height="124.48"/>
    <rect x="150" y="199.682" style="fill:#71E2F0;" width="20" height="124.48"/>
    <rect x="290" y="199.682" style="fill:#71E2F0;" width="20" height="124.48"/>
    <rect x="59.385" y="169.682" style="fill:#121149;" width="341.23" height="40"/>
</g>
</svg>
            </div>
            <p>سبد خرید شما خالی می‌باشد!</p>
            <p>می‌توانید برای مشاهده محصولات بیشتر به <a href="./index.html" class="text-blue-900 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500">صفحه اصلی</a> بروید.</p>
        </div>
        <a href="./weblog.html">
        <div class="w-[300px] h-[100px] cursor-pointer border-1 border-[#e0e0e2] rounded-[10px] flex items-center gap-4">
            <div class="w-[50px] h-[50px] pr-2 pt-2 justify-center items-center">
                <svg fill="#f0b100" class="dark:fill-[#e0e0e0]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
                <g>
                  <g>
                    <path d="M333.187,237.405c32.761-23.893,54.095-62.561,54.095-106.123C387.282,58.893,328.389,0,256,0
            S124.718,58.893,124.718,131.282c0,43.562,21.333,82.23,54.095,106.123C97.373,268.57,39.385,347.531,39.385,439.795
            c0,39.814,32.391,72.205,72.205,72.205H400.41c39.814,0,72.205-32.391,72.205-72.205
            C472.615,347.531,414.627,268.57,333.187,237.405z M164.103,131.282c0-50.672,41.225-91.897,91.897-91.897
            s91.897,41.225,91.897,91.897S306.672,223.18,256,223.18S164.103,181.954,164.103,131.282z M400.41,472.615H111.59
            c-18.097,0-32.82-14.723-32.82-32.821c0-97.726,79.504-177.231,177.231-177.231s177.231,79.504,177.231,177.231
            C433.231,457.892,418.508,472.615,400.41,472.615z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="flex gap-2 flex-col">
                <h2>ورود به حساب کاربری</h2>
                <p class="text-[12px] text-[#717175] dark:text-[#e0e0e2]">
برای مشاهده محصولاتی که پیش‌تر به سبد خرید خود اضافه کرده‌اید وارد شوید.</p>
            </div>
        </div>
        </a>
    </div>
    <!--end-main-->
`;p(o,x,h,k,g,w,b);v();f();m();u();n();
