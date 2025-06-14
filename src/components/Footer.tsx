import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hince-primary text-white">
      {/* Main Footer Content */}
      <div className="px-5 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex flex-col">
            <svg
              width="64"
              height="58"
              viewBox="0 0 65 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-8"
            >
              <g clipPath="url(#clip0_10_199)">
                <path
                  d="M30.5718 36.4986L14.5543 29.1749L34.0402 23.1025L50.0576 30.4263L30.5718 36.4986Z"
                  fill="white"
                />
                <path
                  d="M14.5544 0.709961H0.307739V58.8921H14.5544V0.709961Z"
                  fill="white"
                />
                <path
                  d="M64.3042 0.709961H50.0576V58.8921H64.3042V0.709961Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_10_199">
                  <rect
                    width="64"
                    height="58.1821"
                    fill="white"
                    transform="translate(0.307739 0.709961)"
                  />
                </clipPath>
              </defs>
            </svg>

            {/* Company Info */}
            <div className="text-xs leading-relaxed opacity-65 space-y-3">
              <div>
                <p className="font-arial">
                  VIVAWAVE Co., Ltd. | CEO. Heo Jaeseok
                </p>
                <p className="font-arial">
                  (Hapjeong-dong 364-29) B1F~4F, 18, Dongmak-ro, Mapo-gu, Seoul,
                  Republic of Korea
                </p>
                <p className="font-arial">
                  Business Registration No.{" "}
                  <span className="underline">6328800936</span>
                </p>
              </div>

              <div>
                <p className="font-arial">
                  E-commerce Permit Registration No.{" "}
                  <span className="underline">2019-SeoulMapo-1141</span>
                </p>
              </div>

              <div>
                <p className="font-arial">
                  Contact. 1644-7161 | Fax. 02-6008-2717
                </p>
                <p className="font-arial">
                  Email. <span className="underline">cs@vivawave.co.kr</span> |
                  Personal Information Manager.{" "}
                  <span className="underline">Jaeseok Heo</span>
                </p>
              </div>

              <p className="font-arial">Hosting by Cafe24</p>

              <div className="space-y-1">
                <div>
                  <span className="underline font-noto-kr">이용약관</span>
                  <span className="mx-2">|</span>
                  <span className="underline font-noto-kr font-medium">
                    개인정보처리방침
                  </span>
                </div>
                <p className="font-arial">
                  © 2020 VIVAWAVE Co., Ltd. All rights reserved.
                </p>
              </div>
            </div>
          </div>

          {/* Customer Center */}
          <div>
            <h3 className="font-constantia text-sm font-bold opacity-90 mb-6">
              Customer Center
            </h3>
            <div className="space-y-4">
              <div className="font-constantia text-3xl font-bold tracking-wider">
                1644-7161
              </div>
              <div className="text-xs">
                <p className="font-arial">10:00 - 17:00</p>
                <p className="font-noto-kr">토,일요일 휴무</p>
              </div>
            </div>
          </div>

          {/* Order Tracking & Partnership */}
          <div>
            <h3 className="font-constantia text-sm font-bold opacity-90 mb-6">
              Order Tracking
            </h3>
            <div className="space-y-2 text-xs opacity-65">
              <a href="#" className="block underline font-noto-kr">
                주문내역
              </a>
              <a href="#" className="block underline font-noto-kr">
                배송조회
              </a>
            </div>

            <h3 className="font-constantia text-sm font-bold opacity-90 mt-8 mb-4">
              Partnership
            </h3>
            <div className="space-y-2 text-xs opacity-65">
              <a href="#" className="block underline font-noto-kr">
                도매/제휴문의
              </a>
              <a href="#" className="block underline font-noto-kr">
                해외수출문의
              </a>
            </div>
          </div>

          {/* SNS */}
          <div>
            <h3 className="font-constantia text-sm font-bold opacity-90 mb-6">
              SNS
            </h3>
            <div className="space-y-2 text-xs opacity-65 mb-8">
              <a href="#" className="block underline font-arial">
                Instagram
              </a>
              <a href="#" className="block underline font-arial">
                Kakaotalk
              </a>
              <a href="#" className="block underline font-arial">
                Twitter
              </a>
              <a href="#" className="block underline font-arial">
                Weibo
              </a>
              <a href="#" className="block underline font-arial">
                Red
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 flex items-center justify-center">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 31 31"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.13245 21.8457C9.33245 22.2957 10.6074 22.5207 11.8824 22.5207C15.7074 22.5207 18.1074 20.7957 19.5324 19.3707C21.5574 17.2707 22.6824 14.2707 22.5324 11.4207C22.5324 11.1957 22.6075 11.0457 22.7575 10.8957C22.9825 10.7457 23.1325 10.5957 23.3575 10.4457C23.2075 10.4457 23.0574 10.5207 22.9074 10.5207C22.6075 10.5207 22.3825 10.3707 22.3074 10.1457C22.2324 9.9207 22.3074 9.6207 22.5324 9.4707C22.7575 9.3207 22.9074 9.2457 23.0574 9.0957C22.7575 9.0957 22.4575 9.1707 22.1574 9.2457C21.9324 9.2457 21.7824 9.2457 21.6325 9.0957C21.0324 8.4207 20.1325 8.0457 19.1574 8.0457C18.1074 8.0457 17.1325 8.4957 16.5325 9.3207C15.8575 10.1457 15.6325 11.1957 15.8574 12.1707C15.9325 12.3207 15.8575 12.5457 15.7074 12.6957C15.5575 12.8457 15.4074 12.8457 15.2575 12.8457C12.2574 12.6957 9.40745 11.3457 7.30745 9.1707C6.93245 10.5957 7.45745 12.0957 8.65745 12.9207C8.88245 13.0707 8.95745 13.3707 8.88245 13.5957C8.80745 13.8207 8.58245 14.0457 8.35745 13.9707C7.98245 13.9707 7.60745 13.8957 7.23245 13.8207C7.53245 15.0207 8.58245 15.9957 9.85745 16.2957C10.0824 16.3707 10.3074 16.5957 10.3074 16.8207C10.3074 17.1207 10.1574 17.3457 9.85745 17.4207C9.55745 17.4957 9.18245 17.5707 8.88245 17.5707C9.48245 18.4707 10.5324 19.0707 11.6575 19.0707C11.8825 19.0707 12.1075 19.2207 12.1824 19.4457C12.2575 19.6707 12.1824 19.8957 11.9574 20.0457C10.8324 21.0207 9.48245 21.6207 8.13245 21.8457Z"
                  />
                </svg>
              </a>
              {/* Back to top button */}
              <a
                href="#"
                className="ml-auto w-8 h-8 border border-white rounded-full flex items-center justify-center"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M6 1L1 6h3v5h4V7h3L6 1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
