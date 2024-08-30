"use client"
import dynamic from 'next/dynamic';
import { useState } from "react"
import Link from "@/components/Link"

// import ArtDots from "@/components/ArtDots"
const ArtDots = dynamic(() => import('@/components/ArtDots'), { ssr: false })

export default function Home() {
  const [lang, setLang] = useState<"en" | "zh">("en")

  const handleLangChange = () => {
    // @ts-ignore
    document.startViewTransition(() => {
      setLang(lang === "en" ? "zh" : "en")
    })
  }

  return (
    <>
      <div className="absolute z-10 top-0 left-0 w-full h-full pointer-events-none overflow-hidden grayscale mix-blend-multiply opacity-40">
        <img
          src="https://wxa.wxs.qq.com/wxad-design/yijie/heroBg.webp"
          className="absolute top-0 left-0 w-full h-full object-cover scale-x-[2]"
          alt="aragakey"
        />
      </div>
      <ArtDots />
      <div className="relative flex flex-col mx-auto my-16 px-8 max-w-[864px]">
        <div
          className="absolute z-10 top-1 right-8 flex items-center justify-center w-8 h-8 bg-white border border-solid border-neutral-200 shadow-sm rounded-md cursor-pointer transition-all hover:bg-neutral-50 hover:border-neutral-300 active:scale-95 | sm:top-2"
          onClick={handleLangChange}
        >
          <svg className="w-5 text-neutral-500" viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="m478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4ZM334.83 362L368 281.65L401.17 362Zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9Z"
            />
          </svg>
        </div>
        <div className="relative overflow-hidden duration-500 opacity-100 delay-500">
          <div className="pb-0">
            <svg className="w-20 | sm:w-28" viewBox="0 0 50 12" fill="none">
              <path
                d="M48.3359 8.31445C48.3359 7.875 48.6934 7.51172 49.1387 7.51172C49.5781 7.51172 49.9414 7.875 49.9414 8.31445C49.9414 8.75977 49.5781 9.12305 49.1387 9.12305C48.6934 9.12305 48.3359 8.75977 48.3359 8.31445Z"
                fill="black"
              />
              <path
                d="M48.373 2.80664C48.1094 3.66797 46.2695 8.90039 46.2637 8.91797L46.1055 9.3457C45.5957 10.7168 44.9102 11.1738 43.7031 11.1738C43.4746 11.1738 43.1992 11.1504 43.0176 11.1152V10.1309C43.1172 10.1484 43.3223 10.1602 43.4922 10.1602C44.1953 10.1602 44.5293 9.92578 44.6641 9.31641L44.7402 9.04688L42.5312 2.80664H43.9727L45.4551 7.72852H45.4961L46.9961 2.80664H48.373Z"
                fill="black"
              />
              <path
                d="M39.3574 9.10547C37.6992 9.10547 36.6445 8.00977 36.6445 6.17578V5.54883C36.6445 3.82031 37.6758 2.70117 39.3047 2.70117C40.957 2.70117 41.9531 3.86133 41.9531 5.60742V6.19922H37.9277V6.3457C37.9277 7.38867 38.4902 8.08008 39.375 8.08008C40.0371 8.08008 40.4883 7.75195 40.6465 7.21875H41.8828C41.6953 8.2207 40.8867 9.10547 39.3574 9.10547ZM37.9277 5.29102H40.6816V5.2793C40.6816 4.40039 40.1367 3.70898 39.3105 3.70898C38.4727 3.70898 37.9277 4.40039 37.9277 5.2793V5.29102Z"
                fill="black"
              />
              <path
                d="M32.2695 6.82617V9H30.9688V0.580078H32.2695V5.4375H32.3223L34.5488 2.80664H36.0898L33.7461 5.49023L36.2422 9H34.6895L32.7676 6.26367L32.2695 6.82617Z"
                fill="black"
              />
              <path
                d="M26.3438 9.09375C25.1426 9.09375 24.3164 8.37305 24.3164 7.21875C24.3164 6.11719 25.0781 5.41992 26.502 5.41992H28.0723V4.82812C28.0723 4.11914 27.6504 3.72656 26.9238 3.72656C26.2148 3.72656 25.8105 4.0957 25.7637 4.64648H24.5449C24.5977 3.5918 25.3008 2.71289 26.9531 2.71289C28.3301 2.71289 29.3555 3.39844 29.3555 4.78125V9H28.1191V8.23828H28.0723C27.8027 8.71289 27.2578 9.09375 26.3438 9.09375ZM26.7363 8.10352C27.4922 8.10352 28.0723 7.63477 28.0723 6.96094V6.27539H26.7246C25.9688 6.27539 25.623 6.63281 25.623 7.14844C25.623 7.79297 26.1621 8.10352 26.7363 8.10352Z"
                fill="black"
              />
              <path
                d="M20.2383 10.2656C21.1348 10.2656 21.6914 9.74414 21.6914 8.84766V7.95117H21.6445C21.4043 8.49023 20.7422 8.92969 19.8867 8.92969C18.4629 8.92969 17.4727 7.91602 17.4727 6.04102V5.5957C17.4727 3.74414 18.457 2.72461 19.8867 2.72461C20.7363 2.72461 21.4043 3.1582 21.668 3.70312H21.7148V2.80664H22.9863V8.90625C22.9863 10.5527 21.627 11.2676 20.2266 11.2676C18.5391 11.2676 17.7246 10.4531 17.6074 9.42188H18.8965C19.002 9.88477 19.4883 10.2656 20.2383 10.2656ZM20.2676 3.78516C19.3418 3.78516 18.7969 4.45312 18.7969 5.66016V6.0293C18.7969 7.21289 19.3418 7.9043 20.2676 7.9043C21.1582 7.9043 21.6914 7.21289 21.6914 6.0293V5.66016C21.6914 4.49414 21.1289 3.78516 20.2676 3.78516Z"
                fill="black"
              />
              <path
                d="M13.1016 9.09375C11.9004 9.09375 11.0742 8.37305 11.0742 7.21875C11.0742 6.11719 11.8359 5.41992 13.2598 5.41992H14.8301V4.82812C14.8301 4.11914 14.4082 3.72656 13.6816 3.72656C12.9727 3.72656 12.5684 4.0957 12.5215 4.64648H11.3027C11.3555 3.5918 12.0586 2.71289 13.7109 2.71289C15.0879 2.71289 16.1133 3.39844 16.1133 4.78125V9H14.877V8.23828H14.8301C14.5605 8.71289 14.0156 9.09375 13.1016 9.09375ZM13.4941 8.10352C14.25 8.10352 14.8301 7.63477 14.8301 6.96094V6.27539H13.4824C12.7266 6.27539 12.3809 6.63281 12.3809 7.14844C12.3809 7.79297 12.9199 8.10352 13.4941 8.10352Z"
                fill="black"
              />
              <path
                d="M7.13281 9V2.80664H8.43359V3.62109H8.48047C8.63867 3.23438 9.10156 2.71875 9.96289 2.71875C10.1328 2.71875 10.2793 2.73047 10.4023 2.75391V3.90234C10.291 3.87305 10.0625 3.85547 9.8457 3.85547C8.80273 3.85547 8.45117 4.5 8.45117 5.33203V9H7.13281Z"
                fill="black"
              />
              <path
                d="M2.51953 9.09375C1.31836 9.09375 0.492188 8.37305 0.492188 7.21875C0.492188 6.11719 1.25391 5.41992 2.67773 5.41992H4.24805V4.82812C4.24805 4.11914 3.82617 3.72656 3.09961 3.72656C2.39062 3.72656 1.98633 4.0957 1.93945 4.64648H0.720703C0.773438 3.5918 1.47656 2.71289 3.12891 2.71289C4.50586 2.71289 5.53125 3.39844 5.53125 4.78125V9H4.29492V8.23828H4.24805C3.97852 8.71289 3.43359 9.09375 2.51953 9.09375ZM2.91211 8.10352C3.66797 8.10352 4.24805 7.63477 4.24805 6.96094V6.27539H2.90039C2.14453 6.27539 1.79883 6.63281 1.79883 7.14844C1.79883 7.79297 2.33789 8.10352 2.91211 8.10352Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-2 text-xs font-medium | sm:text-base">
            <div>
              {lang === "en"
                ? "my vocation is to create elegant and refined UIs."
                : "我的天职是创造优雅和精致的 UI。"}
            </div>
          </div>
        </div>
        <div
          className="grid mt-10 w-full gap-3 grid-cols-12"
          style={{
            gridAutoRows: "minmax(150px, auto)",
          }}
        >
          <div className="p-6 bg-neutral-50 border border-solid border-neutral-200 rounded-md row-start-1 row-end-2 col-start-1 col-end-13 | sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-6">
            <div className="-ml-1 flex items-center justify-center w-8 h-8 border border-solid border-neutral-200 bg-white shadow-sm rounded-lg">
              <svg className="w-5 h-5 text-neutral-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 6.39A9.97 9.97 0 0 0 17.42 10c.78 0 1.53-.09 2.25-.26c.21.71.33 1.47.33 2.26c0 4.41-3.59 8-8 8c-3 0-5.61-1.66-7-4.11L6.75 14v-1A1.25 1.25 0 0 1 8 11.75A1.25 1.25 0 0 1 9.25 13v1H12m4-2.25A1.25 1.25 0 0 0 14.75 13A1.25 1.25 0 0 0 16 14.25A1.25 1.25 0 0 0 17.25 13A1.25 1.25 0 0 0 16 11.75"
                />
              </svg>
            </div>
            <div className="mt-2 text-base font-medium">
              {lang === "en" ? "Aragakey." : "蒋毅杰"}
            </div>
            <div className="mt-4 flex flex-col gap-2 text-xs text-neutral-500">
              <div className="flex gap-2 items-center">
                <div className="w-1 h-1 bg-neutral-300 rounded-full" />
                <div>
                  {lang === "en" ? "Design Engineer" : "设计工程师"} @
                  <a
                    href="https://www.tencent.com/en-us/"
                    target="_blank"
                    className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-4"
                  >
                    {lang === "en" ? "Tencent" : "腾讯"}
                  </a>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-1 h-1 bg-neutral-300 rounded-full" />
                <div>13534042031; endless818@yeah.net</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-1 h-1 bg-neutral-300 rounded-full" />
                <div>
                  {lang === "en"
                    ? "08-18-1993; Shanghai, China"
                    : "1993-08-18; 中国上海"}
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-neutral-50 border border-solid border-neutral-200 rounded-md row-start-2 row-end-3 col-start-1 col-end-13 | sm:row-start-2 sm:row-end-3 sm:col-start-1 sm:col-end-6">
            <div className="flex flex-col gap-2 text-xs text-neutral-500">
              <div>
                {lang === "en"
                  ? "I’ve been working as a senior design engineer (UX engineer) at WeChat Ads Team for 9 years."
                  : "我在微信广告设计团队担任设计工程师（UX 工程师），已超过 9 年。"}
              </div>
              <div>
                {lang === "en"
                  ? "I’m passionate about creative & "
                  : "我保持着对这些事的热情：创意设计与"}
                <a
                  href="https://wxad.design/abc/functional-motion"
                  target="_blank"
                  className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-4"
                >
                  {lang === "en" ? "motion design" : "动效设计"}
                </a>
                , React,{" "}
                <a
                  href="https://wxad.design/abc/font-family"
                  target="_blank"
                  className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-4"
                >
                  CSS
                </a>
                , {lang === "en" ? "and" : "和"}{" "}
                <a
                  href="https://wxad.design/abc/generative"
                  target="_blank"
                  className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-4"
                >
                  {lang === "en" ? "generative art" : "生成艺术"}
                </a>
                {lang === "en" ? "." : "。"}
              </div>
              <div>
                {lang === "en"
                  ? "my vocation is to create elegant and refined UIs."
                  : "我认为自己的天职，是创造优雅和精致的 UI。"}
              </div>
            </div>
          </div>
          <div className="relative border border-solid border-neutral-200 rounded-md hidden row-start-1 row-end-3 col-start-6 col-end-13 | sm:block">
            <div className="absolute top-[6px] left-[6px] right-[6px] bottom-[6px] bg-neutral-50 border border-solid border-neutral-100 rounded-md overflow-hidden">
              <img
                className="relative top-28 -left-4 block w-full h-full object-contain origin-bottom scale-150"
                src="https://wxa.wxs.qq.com/wxad-design/yijie/the-aragakey-avatar-1.webp"
                alt="aragakey"
              />
            </div>
          </div>
          <div className="p-6 bg-neutral-50 border border-solid border-neutral-200 rounded-md row-start-3 row-end-4 col-start-1 col-end-13 | sm:row-start-3 sm:row-end-4 sm:col-start-1 sm:col-end-8">
            <div className="-ml-1 flex items-center justify-center w-8 h-8 border border-solid border-neutral-200 bg-white shadow-sm rounded-lg">
              <svg className="w-5 h-5 text-neutral-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m8.8 10.95l2.15-2.175l-1.4-1.425l-.4.4q-.275.275-.687.288T7.75 7.75t-.3-.712t.3-.713l.375-.375L7 4.825L4.825 7zm8.2 8.225L19.175 17l-1.125-1.125l-.4.375q-.3.3-.7.3t-.7-.3t-.3-.7t.3-.7l.375-.4l-1.425-1.4l-2.15 2.15zM17.6 5l1.425 1.425zM4 21q-.425 0-.712-.288T3 20v-2.825q0-.2.075-.387t.225-.338l4.075-4.075L3.05 8.05Q2.625 7.625 2.625 7t.425-1.05l2.9-2.9q.425-.425 1.05-.412t1.05.437L12.4 7.4l3.775-3.8q.3-.3.675-.45t.775-.15t.775.15t.675.45L20.4 4.95q.3.3.45.675T21 6.4t-.15.763t-.45.662l-3.775 3.8l4.325 4.325q.425.425.425 1.05t-.425 1.05l-2.9 2.9q-.425.425-1.05.425t-1.05-.425l-4.325-4.325L7.55 20.7q-.15.15-.337.225T6.825 21zm1-2h1.4l9.8-9.775L14.775 7.8L5 17.6zM15.5 8.525l-.725-.725L16.2 9.225z"
                />
              </svg>
            </div>
            <div className="mt-2 mb-6 text-base font-medium">
              {lang === "en" ? "Works" : "作品"}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <img
                    className="w-4 grayscale"
                    src="https://wxa.wxs.qq.com/wxad-design/yijie/top-logo.webp"
                    alt="top-logo"
                  />
                  <Link
                    href="https://wxad.design/abc/bm"
                    img="https://wxa.wxs.qq.com/wxad-design/yijie/bm-cover-abc.webp"
                  >
                    {lang === "en"
                      ? "Best Moments - Most Liked WeChat Moments Ads"
                      : "朋友圈广告年度评选 & 榜单"}
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <svg width="18" height="17" className="w-4 grayscale">
                    <g fill="#07c160" fillRule="evenodd">
                      <path
                        d="M7 6.5c.003-.644.356-1.002 1-1h4.25c2.971.01 5.5 2.279 5.5 5.25v.75c0 2.982-2.518 5.5-5.5 5.5H8.5c-1 0-1.5-.856-1.5-1.5v-9c.003-.644.356-1.002 1-1"
                        opacity="0.2"
                      />
                      <path d="M11.955 9.097c.31.565.49 1.178.045 1.653-.234.25-.803.25-1 .25H7V6.5c0-.644.356-1 1-1h2l1.955 3.597z" />
                      <path
                        d="M8 5.5c-.644 0-1 .606-1 1.25V11H1.25c-.507 0-1.047-.356-.95-1 .031-.208.099-.385.208-.567L5.262.567a1.167 1.167 0 012.022.038L10 5.5H8z"
                        opacity="0.82"
                      />
                    </g>
                  </svg>
                  <Link
                    href="https://wxad.design/adui"
                    img="https://wxa.wxs.qq.com/wxad-design/yijie/adui-cover-3.webp"
                  >
                    {lang === "en"
                      ? "AD UI - WeChat Ads' Design System"
                      : "AD UI - 微信广告后台设计语言"}
                  </Link>
                </div>
                <a
                  href="https://wxad.design/abc/adui"
                  target="_blank"
                  className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-4 whitespace-nowrap"
                >
                  {lang === "en" ? "read it" : "更多"}
                </a>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 grayscale"
                    viewBox="0 0 120 98"
                    fill="none"
                  >
                    <path
                      d="M57.83 29.94C55 29.94 52.7 27.63 52.7 24.77C52.7 21.91 55 19.6 57.83 19.6C60.66 19.6 62.96 21.91 62.96 24.77C62.96 27.63 60.66 29.94 57.83 29.94ZM28.92 29.94C26.09 29.94 23.79 27.63 23.79 24.77C23.79 21.91 26.09 19.6 28.92 19.6C31.75 19.6 34.05 21.91 34.05 24.77C34.05 27.63 31.75 29.94 28.92 29.94ZM43.37 0C19.42 0 0 16.31 0 36.43C0 47.41 5.84 57.29 14.99 63.97C15.72 64.5 16.2 65.36 16.2 66.35C16.2 66.67 16.13 66.97 16.05 67.28C15.32 70.03 14.15 74.42 14.1 74.63C14.01 74.98 13.87 75.33 13.87 75.7C13.87 76.5 14.52 77.16 15.32 77.16C15.63 77.16 15.89 77.04 16.15 76.89L25.65 71.36C26.36 70.95 27.12 70.69 27.95 70.69C28.39 70.69 28.82 70.76 29.23 70.88C33.66 72.16 38.44 72.88 43.39 72.88C44.19 72.88 44.98 72.86 45.77 72.82C44.83 69.98 44.31 66.99 44.31 63.89C44.31 45.54 62.02 30.66 83.87 30.66C84.66 30.66 84.86 30.69 85.64 30.72C82.36 13.31 65.01 0 43.37 0Z"
                      fill="#07c160"
                    />
                    <path
                      d="M95.9 58.71C93.41 58.71 91.39 56.67 91.39 54.16C91.39 51.65 93.41 49.61 95.9 49.61C98.39 49.61 100.41 51.65 100.41 54.16C100.41 56.67 98.39 58.71 95.9 58.71ZM71.8 58.71C69.31 58.71 67.29 56.67 67.29 54.16C67.29 51.65 69.31 49.61 71.8 49.61C74.29 49.61 76.31 51.65 76.31 54.16C76.31 56.67 74.29 58.71 71.8 58.71ZM107.5 86.82C115.12 81.25 119.99 73.02 119.99 63.87C119.99 47.1 103.81 33.51 83.85 33.51C63.89 33.51 47.7 47.1 47.7 63.87C47.7 80.64 63.88 94.23 83.85 94.23C87.97 94.23 91.96 93.64 95.65 92.57C95.99 92.47 96.34 92.41 96.71 92.41C97.4 92.41 98.03 92.62 98.63 92.97L106.54 97.57C106.76 97.7 106.98 97.8 107.24 97.8C107.91 97.8 108.45 97.26 108.45 96.59C108.45 96.29 108.33 95.99 108.26 95.7C108.21 95.53 107.24 91.86 106.63 89.58C106.56 89.32 106.5 89.07 106.5 88.81C106.5 87.99 106.9 87.27 107.51 86.83"
                      fill="#07c160"
                    />
                  </svg>
                  <Link
                    href="https://ad.weixin.qq.com"
                    img="https://wxa.wxs.qq.com/wxad-design/yijie/wxad-cover-inner.png"
                  >
                    {lang === "en"
                      ? "WeChat Ads Official Website"
                      : "微信广告官网"}
                  </Link>
                </div>
                <a
                  href="https://wxad.design/abc/wxad"
                  target="_blank"
                  className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-4 whitespace-nowrap"
                >
                  {lang === "en" ? "read it" : "更多"}
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 bg-neutral-50 border border-solid border-neutral-200 rounded-md row-start-4 row-end-5 col-start-1 col-end-13 | sm:row-start-3 sm:row-end-4 sm:col-start-8 sm:col-end-13">
            <div className="-ml-1 flex items-center justify-center w-8 h-8 border border-solid border-neutral-200 bg-white shadow-sm rounded-lg">
              <svg className="w-5 h-5 text-neutral-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20 6c.58 0 1.05.2 1.42.59c.38.41.58.86.58 1.41v11c0 .55-.2 1-.58 1.41c-.37.39-.84.59-1.42.59H4c-.58 0-1.05-.2-1.42-.59C2.2 20 2 19.55 2 19V8c0-.55.2-1 .58-1.41C2.95 6.2 3.42 6 4 6h4V4c0-.58.2-1.05.58-1.42C8.95 2.2 9.42 2 10 2h4c.58 0 1.05.2 1.42.58c.38.37.58.84.58 1.42v2zM4 8v11h16V8zm10-2V4h-4v2zm-2 3a2.25 2.25 0 0 1 2.25 2.25c0 1.25-1.01 2.25-2.25 2.25a2.25 2.25 0 0 1-2.25-2.25C9.75 10 10.76 9 12 9m4.5 9h-9v-1.12c0-1.25 2-2.25 4.5-2.25s4.5 1 4.5 2.25z"
                />
              </svg>
            </div>
            <div className="mt-2 mb-6 text-base font-medium">
              {lang === "en" ? "Experience" : "经历"}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 grayscale"
                    viewBox="0 0 120 98"
                    fill="none"
                  >
                    <path
                      d="M57.83 29.94C55 29.94 52.7 27.63 52.7 24.77C52.7 21.91 55 19.6 57.83 19.6C60.66 19.6 62.96 21.91 62.96 24.77C62.96 27.63 60.66 29.94 57.83 29.94ZM28.92 29.94C26.09 29.94 23.79 27.63 23.79 24.77C23.79 21.91 26.09 19.6 28.92 19.6C31.75 19.6 34.05 21.91 34.05 24.77C34.05 27.63 31.75 29.94 28.92 29.94ZM43.37 0C19.42 0 0 16.31 0 36.43C0 47.41 5.84 57.29 14.99 63.97C15.72 64.5 16.2 65.36 16.2 66.35C16.2 66.67 16.13 66.97 16.05 67.28C15.32 70.03 14.15 74.42 14.1 74.63C14.01 74.98 13.87 75.33 13.87 75.7C13.87 76.5 14.52 77.16 15.32 77.16C15.63 77.16 15.89 77.04 16.15 76.89L25.65 71.36C26.36 70.95 27.12 70.69 27.95 70.69C28.39 70.69 28.82 70.76 29.23 70.88C33.66 72.16 38.44 72.88 43.39 72.88C44.19 72.88 44.98 72.86 45.77 72.82C44.83 69.98 44.31 66.99 44.31 63.89C44.31 45.54 62.02 30.66 83.87 30.66C84.66 30.66 84.86 30.69 85.64 30.72C82.36 13.31 65.01 0 43.37 0Z"
                      fill="#07c160"
                    />
                    <path
                      d="M95.9 58.71C93.41 58.71 91.39 56.67 91.39 54.16C91.39 51.65 93.41 49.61 95.9 49.61C98.39 49.61 100.41 51.65 100.41 54.16C100.41 56.67 98.39 58.71 95.9 58.71ZM71.8 58.71C69.31 58.71 67.29 56.67 67.29 54.16C67.29 51.65 69.31 49.61 71.8 49.61C74.29 49.61 76.31 51.65 76.31 54.16C76.31 56.67 74.29 58.71 71.8 58.71ZM107.5 86.82C115.12 81.25 119.99 73.02 119.99 63.87C119.99 47.1 103.81 33.51 83.85 33.51C63.89 33.51 47.7 47.1 47.7 63.87C47.7 80.64 63.88 94.23 83.85 94.23C87.97 94.23 91.96 93.64 95.65 92.57C95.99 92.47 96.34 92.41 96.71 92.41C97.4 92.41 98.03 92.62 98.63 92.97L106.54 97.57C106.76 97.7 106.98 97.8 107.24 97.8C107.91 97.8 108.45 97.26 108.45 96.59C108.45 96.29 108.33 95.99 108.26 95.7C108.21 95.53 107.24 91.86 106.63 89.58C106.56 89.32 106.5 89.07 106.5 88.81C106.5 87.99 106.9 87.27 107.51 86.83"
                      fill="#07c160"
                    />
                  </svg>
                  <a
                    href="https://ad.weixin.qq.com/best-moments"
                    target="_blank"
                    className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-4"
                  >
                    {lang === "en" ? "Tencent WeChat Ads" : "微信广告设计团队"}
                  </a>
                </div>
                {lang === "en" ? "2015 - now" : "2015 - 至今"}
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <img
                    className="w-4 h-3 grayscale object-cover"
                    src="https://wxa.wxs.qq.com/wxad-design/yijie/hust-logo.webp"
                    alt="hust-logo"
                  />
                  <a
                    href="https://eic.hust.edu.cn/"
                    target="_blank"
                    title="Huazhong University of Science and Technology"
                    className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-4"
                  >
                    {lang === "en" ? "EIC HUST" : "华中科技大学 - 通信工程"}
                  </a>
                </div>
                2011 - 2015
              </div>
            </div>
          </div>
          <div className="p-6 bg-neutral-50 border border-solid border-neutral-200 rounded-md row-start-5 row-end-6 col-start-1 col-end-13 | sm:row-start-4 sm:row-end-5 sm:col-start-1 sm:col-end-5">
            <div className="-ml-1 flex items-center justify-center w-8 h-8 border border-solid border-neutral-200 bg-white shadow-sm rounded-lg">
              <svg className="w-5 h-5 text-neutral-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M1 20q-.425 0-.712-.288T0 19t.288-.712T1 18h1V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v13h1q.425 0 .713.288T24 19t-.288.713T23 20zm9.5-2h3q.2 0 .35-.15t.15-.35t-.15-.35t-.35-.15h-3q-.2 0-.35.15t-.15.35t.15.35t.35.15M4 15h16V5H4zm8-5"
                />
              </svg>
            </div>
            <div className="mt-2 mb-6 text-base font-medium">
              {lang === "en" ? "Skills" : "技能"}
            </div>
            <div className="flex flex-wrap text-xs text-neutral-600 gap-1">
              {["react", "vue", "typescript", "scss", "next.js", "node.js"].map(
                (skill) => (
                  <div
                    className="flex items-center px-2 h-7 bg-neutral-200 bg-opacity-50 rounded-md"
                    key={skill}
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
            <div className="my-4 border border-b-[1px] border-dashed border-neutral-200 scale-y-50" />
            <div className="flex flex-wrap text-xs text-neutral-600 gap-1">
              {(lang === "en"
                ? ["motion design", "creative coding"]
                : ["动效设计", "创意编程"]
              ).map((skill) => (
                <div
                  className="flex items-center px-2 h-7 bg-neutral-200 bg-opacity-50 rounded-md"
                  key={skill}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 bg-neutral-50 border border-solid border-neutral-200 rounded-md row-start-6 row-end-7 col-start-1 col-end-13 | sm:row-start-4 sm:row-end-5 sm:col-start-5 sm:col-end-13">
            <div className="-ml-1 flex items-center justify-center w-8 h-8 border border-solid border-neutral-200 bg-white shadow-sm rounded-lg">
              <svg className="w-5 h-5 text-neutral-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 22q-.65 0-1.175-.312T10 20.85q-.825 0-1.412-.587T8 18.85V15.3q-1.475-.975-2.363-2.575T4.75 9.25q0-3.025 2.113-5.137T12 2t5.138 2.113T19.25 9.25q0 1.925-.888 3.5T16 15.3v3.55q0 .825-.587 1.413T14 20.85q-.3.525-.825.838T12 22m-2-3.15h4v-.9h-4zm0-1.9h4V16h-4zM9.8 14h1.45v-2.7l-2.2-2.2l1.05-1.05l1.9 1.9l1.9-1.9l1.05 1.05l-2.2 2.2V14h1.45q1.35-.65 2.2-1.912t.85-2.838q0-2.2-1.525-3.725T12 4T8.275 5.525T6.75 9.25q0 1.575.85 2.838T9.8 14M12 9"
                />
              </svg>
            </div>
            <div className="mt-2 mb-6 text-base font-medium">
              {lang === "en" ? "Crafts" : "玩具"}
            </div>
            <div className="grid grid-cols-1 gap-3 | sm:grid-cols-2">
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 grayscale" viewBox="0 0 24 24">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M21 9v6M3 15V9m9 12v-6m0-12v6m0 6L3 9l9-6l9 6z" />
                      <path d="m12 21l-9-6l9-6l9 6z" />
                    </g>
                  </svg>
                  <a
                    href="https://codepen.io/aragakey"
                    target="_blank"
                    className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-4"
                  >
                    {lang === "en"
                      ? "Generative Arts on Codepen"
                      : "Codepen 生成艺术主页"}
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 grayscale" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7 17h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"
                    />
                  </svg>
                  <a
                    href="https://wxad.design/abc"
                    target="_blank"
                    className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-4"
                  >
                    {lang === "en" ? "Blog posts" : "个人博客文章"}
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 grayscale" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M8.667 9.417a2.583 2.583 0 1 0 0 5.166h2.583v-2.531a4.511 4.511 0 0 1 0-.104V9.417zm2.583-1.5H8.667a2.583 2.583 0 0 1 0-5.167h2.583zm1.5-5.167v5.167h2.583a2.584 2.584 0 0 0 0-5.167zm2.583 6.666a2.583 2.583 0 0 0-2.583 2.542v.083a2.583 2.583 0 1 0 2.583-2.625m-6.666 6.667a2.584 2.584 0 1 0 2.583 2.584v-2.584z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    href="https://www.figma.com/community/plugin/849480985478663675/copy-css-react-tailwind-style"
                    target="_blank"
                    className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-4"
                  >
                    {lang === "en"
                      ? "Figma Plugin - Copy Style"
                      : "Figma 插件 - 一键复制样式"}
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 grayscale" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6.525q.5 0 .75.313t.25.687t-.262.688T11.5 5H5v14h14v-6.525q0-.5.313-.75t.687-.25t.688.25t.312.75V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"
                    />
                  </svg>
                  <a
                    href="https://wxa.wxs.qq.com/wxad-design/yijie/wxad-tiptap-hovers.mp4"
                    target="_blank"
                    className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-4"
                  >
                    {lang === "en"
                      ? "Wxad Tiptap - WYSIWYG editor"
                      : "Wxad Tiptap - 富文本编辑器"}
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <img
                    className="w-4 grayscale"
                    src="https://wxa.wxs.qq.com/wxad-design/yijie/top-logo.webp"
                    alt="logo"
                  />
                  <a
                    href="https://wxad.design/best-hearts"
                    target="_blank"
                    className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-4"
                  >
                    {lang === "en"
                      ? "Best Hearts - from Best Moments"
                      : "Best Hearts - 来自朋友圈广告评选"}
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 grayscale" viewBox="0 0 5 5" fill="none">
                    <g style={{ mixBlendMode: "luminosity" }}>
                      <path
                        d="M2.5 4.8125C3.77716 4.8125 4.8125 3.77716 4.8125 2.5C4.8125 1.22284 3.77716 0.1875 2.5 0.1875C1.22284 0.1875 0.1875 1.22284 0.1875 2.5C0.1875 3.77716 1.22284 4.8125 2.5 4.8125Z"
                        fill="#000B76"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.562499 2.9375C0.555813 2.93081 0.549451 2.9238 0.543437 2.9165C0.4987 2.70424 0.488423 2.48616 0.512999 2.27062C0.637124 1.91306 0.944249 1.5625 1.375 1.5625C1.875 1.5625 2.39581 1.85419 2.9375 2.4375L2.83037 4.47281C2.72118 4.49094 2.61068 4.50003 2.5 4.5C1.62437 4.5 0.880062 3.93725 0.609249 3.15363C0.627062 3.05856 0.611499 2.9865 0.562499 2.9375Z"
                        fill="url(#paint0_linear_237_12)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.502375 2.40131C0.664438 2.80044 0.976125 3 1.4375 3C2.4375 3 2.75 1.625 3.6875 1.625C3.99813 1.625 4.24188 1.72794 4.41875 1.93381C4.47281 2.11768 4.50018 2.30835 4.5 2.5C4.5 3.60456 3.60456 4.5 2.5 4.5C1.39544 4.5 0.5 3.60456 0.5 2.5C0.5 2.46688 0.500812 2.434 0.502375 2.40131Z"
                        fill="url(#paint1_linear_237_12)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_237_12"
                        x1="1.71874"
                        y1="1.5625"
                        x2="1.71874"
                        y2="4.37378"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1026F6" />
                        <stop offset="1" stopColor="#000B76" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_237_12"
                        x1="2.5"
                        y1="1.625"
                        x2="2.5"
                        y2="6.37499"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#0099FF" />
                        <stop offset="1" stopColor="#0019FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <a
                    href="https://codepen.io/aragakey"
                    target="_blank"
                    className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-4"
                  >
                    {lang === "en"
                      ? "Flow - atomic-class fluid component"
                      : "Flow - 原子类流式组件"}
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 grayscale" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M3 3v18h18V3H3zm16 2v14H5V5h14zM7 7h6v6H9v2H7V7zm8 6h-2v2h-2v2h2v-2h2v2h2v-2h-2v-2zm0 0h2v-2h-2v2zM9 9v2h2V9H9z"
                    ></path>
                  </svg>
                  <a
                    href="https://wxad.design/pixie"
                    target="_blank"
                    className="relative text-inherit hover:text-blue-500 underline decoration-dotted decoration-current underline-offset-4"
                  >
                    {lang === "en"
                      ? "Pixie - A tool for design reviews."
                      : "Pixie - 设计走查小工具"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
