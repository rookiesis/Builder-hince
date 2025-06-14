import { useState } from "react";
import {
  Search,
  User,
  ShoppingBag,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const searchSuggestions = [
    "로 글로우 듀이 볼",
    "로 글로우 젤 틴트",
    "킹스베리 비타 나이트 크림",
    "트루 디멘션 래디언스 밤",
    "비타 베리어 너리싱 립 오일",
    "세컨 스킨 글로우 쿠션",
  ];

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-5 bg-white relative z-50">
        {/* Logo */}
        <div className="flex items-center">
          <svg
            width="115"
            height="35"
            viewBox="0 0 116 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_10_318)">
              <path
                d="M29.1388 14.6735L29.2762 15.5966L31.5316 16.4271C31.5914 18.079 31.6212 19.8834 31.6212 21.852V29.0932C31.6212 30.0073 31.6212 30.7332 31.6003 31.2948V34.5479C32.6996 34.5479 33.784 34.5151 34.8863 34.5151C35.9259 34.5151 36.9774 34.536 38.02 34.5449V20.8393V19.734C38.02 17.396 38.0648 15.1913 38.1544 13.1202L37.9065 12.9409C35.1193 13.5414 32.843 14.1209 29.1388 14.6735Z"
                fill="white"
              />
              <path
                d="M87.0025 32.1073C84.4255 32.1073 82.4419 31.4103 81.0519 30.0162C79.6618 28.6222 78.9647 26.4663 78.9608 23.5488C78.9608 21.0454 79.5104 19.0469 80.6097 17.5533C81.7091 16.0596 83.1171 15.3128 84.8338 15.3128C85.3914 15.2939 85.9481 15.3707 86.4797 15.5399L88.2183 21.1619L89.4611 20.9618C89.8693 18.6337 90.3443 16.4141 90.886 14.3031C88.8 13.4507 86.5674 13.0143 84.314 13.0186C80.7292 13.0186 77.7818 14.091 75.4716 16.2359C73.1614 18.3808 72.0084 21.1898 72.0123 24.663C72.0123 27.8494 73.0738 30.3906 75.1968 32.2866C77.3197 34.1825 80.0302 35.1354 83.3282 35.1454C86.0516 35.1297 88.7234 34.4005 91.0772 33.0304L90.895 31.6801C89.6157 31.9564 88.3113 32.0996 87.0025 32.1073Z"
                fill="#A36D6A"
              />
              <path
                d="M34.2113 8.8185C34.9708 8.82264 35.7144 8.60121 36.3479 8.18227C36.9814 7.76332 37.4763 7.16573 37.7698 6.46523C38.0634 5.76473 38.1423 4.99285 37.9967 4.24743C37.8511 3.50201 37.4874 2.81661 36.9518 2.27808C36.4162 1.73956 35.7328 1.37217 34.9882 1.22246C34.2436 1.07276 33.4713 1.14749 32.7692 1.43718C32.0671 1.72687 31.4668 2.21847 31.0444 2.84969C30.622 3.48091 30.3965 4.22332 30.3965 4.98283C30.3945 5.48533 30.4917 5.98328 30.6825 6.44817C30.8732 6.91306 31.1538 7.33575 31.5082 7.69205C31.8625 8.04834 32.2837 8.33123 32.7475 8.52453C33.2114 8.71782 33.7088 8.81772 34.2113 8.8185Z"
                fill="#A36D6A"
              />
              <path
                d="M115.298 22.2104C115.298 19.3446 114.475 17.0992 112.828 15.4741C111.181 13.849 108.843 13.0345 105.813 13.0305C102.352 13.0305 99.5023 14.092 97.2639 16.215C95.0254 18.3379 93.9081 21.0783 93.9121 24.436C93.9121 27.959 95.0752 30.6246 97.4013 32.4329C99.7274 34.2412 102.728 35.1444 106.402 35.1424C109.464 35.1486 112.483 34.4246 115.208 33.0304L115.029 31.6144C113.481 31.9027 111.908 32.0447 110.333 32.0386C106.948 32.0386 104.511 31.3794 103.023 30.061C101.53 28.7376 100.801 26.5749 100.801 23.5577H115.232C115.274 23.0947 115.298 22.6466 115.298 22.2104ZM108.427 21.377H100.89C100.961 19.8172 101.414 18.2987 102.211 16.9558C102.972 15.733 103.991 15.1226 105.27 15.1246C105.752 15.0998 106.232 15.211 106.655 15.4455C107.077 15.68 107.425 16.0283 107.66 16.451C108.177 17.3372 108.436 18.799 108.436 20.8363L108.427 21.377Z"
                fill="#A36D6A"
              />
              <path
                d="M23.8902 27.7998V19.8924C23.8902 17.7017 23.2668 16.0089 22.0201 14.814C20.7734 13.6191 19.0478 13.0217 16.8432 13.0217C14.3607 13.0217 11.8484 15.1815 9.30026 16.696V7.40557C9.30026 5.06952 9.34607 2.8659 9.43768 0.794715L9.18973 0.615479C6.39065 1.21294 4.08148 1.81039 0.317505 2.34512L0.451933 3.26819L2.79695 4.16437C2.8567 5.81335 2.88657 7.61966 2.88657 9.5833V29.2725C2.88657 30.0133 2.88657 30.784 2.88657 31.5757V34.5301C3.97394 34.5182 5.06928 34.5122 6.17258 34.5122C7.27588 34.5122 8.3274 34.5182 9.32715 34.5301V29.8012C9.32715 28.8752 9.31221 27.9073 9.31221 26.8916V18.8917C10.2592 18.0164 11.9141 16.1493 13.1628 16.1493C14.5947 16.1493 15.6721 16.5477 16.3951 17.3443C17.118 18.1409 17.4784 19.4642 17.4765 21.3144V30.7363C17.4765 31.1037 17.4765 31.4084 17.4765 31.6474V34.5361C18.531 34.5361 19.6452 34.5152 20.8252 34.5152C21.8558 34.5152 22.8745 34.5391 23.8991 34.548V29.1201C23.8902 28.6959 23.8902 28.2628 23.8902 27.7998Z"
                fill="#A36D6A"
              />
              <path
                d="M67.1072 27.7997V19.8924C67.1072 17.7017 66.4829 16.0089 65.2342 14.814C63.9855 13.6191 62.2609 13.0216 60.0602 13.0216C57.5748 13.0216 55.0625 15.2621 52.5173 16.9409V13.1441L52.1798 12.9648C49.303 13.5952 47.1014 14.1598 43.6212 14.6736L43.7586 15.5966L46.023 16.4301C46.0847 18.095 46.1156 19.9093 46.1156 21.8729V29.2724C46.1156 30.1567 46.1076 31.0787 46.0917 32.0386C46.0911 32.0466 46.0911 32.0546 46.0917 32.0625V34.53C47.185 34.5181 48.2804 34.5121 49.3777 34.5121C50.4681 34.5121 51.5136 34.5121 52.5203 34.53V28.2239C52.5203 27.7877 52.5203 27.3456 52.5203 26.8916V19.3278C53.291 18.3659 55.1312 16.1493 56.3769 16.1493C57.8108 16.1493 58.8882 16.5476 59.6091 17.3442C60.2664 18.0701 60.6069 19.2531 60.6666 20.8423V31.949V34.536C61.7271 34.536 62.8414 34.5151 64.0214 34.5151C65.0609 34.5151 66.0826 34.539 67.1132 34.548V30.7362C67.1132 29.9416 67.1072 28.9737 67.1072 27.7997Z"
                fill="#A36D6A"
              />
            </g>
            <defs>
              <clipPath id="clip0_10_318">
                <rect
                  width="114.981"
                  height="34.53"
                  fill="white"
                  transform="translate(0.317505 0.615479)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Account */}
          <button className="relative p-2">
            <User size={20} className="text-hince-dark" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-hince-primary rounded-full"></div>
          </button>

          {/* Search */}
          <button onClick={() => setIsSearchOpen(true)} className="p-2">
            <Search size={20} className="text-hince-dark" />
          </button>

          {/* Cart */}
          <button onClick={() => setIsCartOpen(true)} className="p-2">
            <ShoppingBag size={20} className="text-hince-dark" />
          </button>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 hince-search-overlay flex items-center justify-center">
          <div className="w-full max-w-md mx-5">
            {/* Search Input */}
            <div className="relative mb-8">
              <div className="flex items-center border-b border-hince-dark pb-4">
                <input
                  type="text"
                  placeholder="SEARCH"
                  className="flex-1 text-center text-2xl font-arial text-hince-dark/30 bg-transparent outline-none placeholder:text-hince-dark/30"
                  autoFocus
                />
                <Search size={24} className="text-hince-dark ml-2" />
              </div>
            </div>

            {/* Search Suggestions */}
            <div className="flex flex-wrap gap-2">
              {searchSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="px-5 py-2 bg-hince-primary text-white rounded-full text-sm font-noto-kr hover:bg-hince-primary/90 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-5 right-5 p-2"
          >
            <X size={24} className="text-hince-dark" />
          </button>
        </div>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/20">
          <div className="absolute right-0 top-0 h-full w-[450px] bg-white hince-cart-shadow rounded-l-[80px] flex flex-col">
            {/* Cart Header */}
            <div className="flex items-center justify-between p-8">
              <button onClick={() => setIsCartOpen(false)}>
                <X size={24} className="text-hince-dark" />
              </button>
              <h2 className="text-2xl font-constantia text-hince-primary">
                CART
              </h2>
            </div>

            {/* Cart Content */}
            <div className="flex-1 border-t border-hince-dark/30 relative">
              {/* Empty Cart */}
              <div className="flex flex-col items-center justify-center h-full px-8">
                <div className="w-full h-80 bg-hince-light mb-8 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <p className="text-hince-primary text-sm">
                      Let's Fill Your Bag!
                    </p>
                  </div>
                </div>

                {/* Promotion Banner */}
                <div className="w-full bg-hince-light p-4 rounded-lg mb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm text-hince-dark mb-2">
                        킹스베리 나이트 크림 3ml 증정
                      </h3>
                      <p className="text-xs text-hince-dark">
                        *전구매 사은품
                        <br />
                        *주문번호당 1개 증정
                        <br />
                        *회원한정/조기 소진시 종료
                      </p>
                    </div>
                    <div className="w-20 h-16 bg-gray-200 rounded"></div>
                  </div>
                </div>

                {/* Shop Button */}
                <button className="w-full bg-hince-primary text-white py-4 text-sm font-arial">
                  나만의 힌스 찾아보기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
