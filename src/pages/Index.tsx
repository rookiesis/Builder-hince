import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroProducts = [
    {
      title: "Raw Glow",
      subtitle: "RAW GLOW DEWY BALL",
      image:
        "https://images.pexels.com/photos/7433333/pexels-photo-7433333.jpeg",
    },
  ];

  const mostLovedProducts = [
    {
      id: 1,
      name: "로 글로우 젤 틴트",
      subtitle: "로 로즈",
      image:
        "https://images.pexels.com/photos/9219006/pexels-photo-9219006.jpeg",
    },
    {
      id: 2,
      name: "슬림 스틱 멜팅 매트",
      subtitle: "페이드아웃",
      image:
        "https://images.pexels.com/photos/9219006/pexels-photo-9219006.jpeg",
    },
    {
      id: 3,
      name: "트루 디멘션 래디언스 밤",
      subtitle: "릴 모브",
      image:
        "https://images.pexels.com/photos/9219006/pexels-photo-9219006.jpeg",
    },
    {
      id: 4,
      name: "로 글로우 듀이 볼",
      subtitle: "로로즈 듀",
      image:
        "https://images.pexels.com/photos/9219006/pexels-photo-9219006.jpeg",
    },
    {
      id: 5,
      name: "세컨 스킨 메쉬 매트 쿠션+리필 SET",
      subtitle: "포슬린",
      image:
        "https://images.pexels.com/photos/9219006/pexels-photo-9219006.jpeg",
    },
    {
      id: 6,
      name: "오 드 퍼퓸",
      subtitle: "더 필로우",
      image:
        "https://images.pexels.com/photos/9219006/pexels-photo-9219006.jpeg",
    },
  ];

  const promoProducts = [
    {
      title: "뉴 뎁스 듀얼 컬러 스틱",
      englishTitle: "New Depth Dual Color Stick",
      description:
        "듀얼 컬러로 쉽고 빠르게 또렷한 눈매를 연출해주는 멀티 라이너",
      image: "/api/placeholder/600/600",
    },
    {
      title: "킹스베리 비타 콜라겐 마스크",
      englishTitle: "Kings Berry Vita Collagen Mask",
      description: "킹스베리 비타 레시피로 화잘먹#끌올탱글광피부",
      image: "/api/placeholder/600/600",
    },
    {
      title: "무드인핸서 립 글로우",
      englishTitle: "Mood Enhancer Lip Glow",
      description: "선명하고 촉촉한 비건 고보습 립 글로우",
      image: "/api/placeholder/600/600",
    },
  ];

  const socialImages = [
    "/api/placeholder/432/432",
    "/api/placeholder/432/432",
    "/api/placeholder/432/432",
    "/api/placeholder/432/432",
    "/api/placeholder/432/432",
    "/api/placeholder/432/432",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[1200px] bg-hince-primary overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroProducts[0].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-hince-primary/20"></div>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/15 rounded flex items-center justify-center text-white hover:bg-black/25 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/15 rounded flex items-center justify-center text-white hover:bg-black/25 transition-colors">
          <ChevronRight size={24} />
        </button>

        {/* Content */}
        <div className="absolute bottom-32 left-8 text-white">
          <h1 className="font-constantia text-6xl mb-2 tracking-tight">
            {heroProducts[0].title}
          </h1>
          <p className="font-arial text-xl mb-12">{heroProducts[0].subtitle}</p>
          <a
            href="#"
            className="text-white text-base font-arial underline opacity-75 hover:opacity-100 tracking-wide"
          >
            GO SHOP &gt;
          </a>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-8 flex items-center">
          <div className="w-18 h-0.5 bg-white mr-4"></div>
          <div className="w-72 h-0.5 bg-white/30"></div>
        </div>
      </section>

      {/* Most Loved Section */}
      <section className="bg-hince-light py-20">
        <div className="max-w-6xl mx-auto px-8">
          {/* Section Header */}
          <div className="mb-20">
            <p className="font-constantia text-sm text-hince-dark/65 mb-1">
              BEST
            </p>
            <h2 className="font-constantia text-6xl text-hince-dark tracking-tight">
              Most Loved
            </h2>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-4xl mx-auto">
            {mostLovedProducts.map((product) => (
              <div key={product.id} className="text-center hince-product-card">
                <div className="relative mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[373px] object-cover border border-hince-primary/30 rounded-sm"
                  />
                </div>
                <div className="mb-4">
                  <h3 className="font-noto-kr text-xl text-hince-dark font-bold leading-8">
                    {product.name}
                  </h3>
                  <p className="font-noto-kr text-xl text-hince-dark leading-8">
                    {product.subtitle}
                  </p>
                </div>
                <a
                  href="#"
                  className="text-hince-dark text-base font-arial underline hover:text-hince-primary transition-colors"
                >
                  SHOP
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Promotions Carousel */}
      <section className="relative">
        {promoProducts.map((product, index) => (
          <div
            key={index}
            className="relative h-[1200px] flex"
            style={{ display: index === currentSlide ? "flex" : "none" }}
          >
            {/* Product Image */}
            <div className="flex-1 relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/15 rounded flex items-center justify-center text-white">
                <ChevronLeft size={24} />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/15 rounded flex items-center justify-center text-white">
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 bg-white flex items-center">
              <div className="px-8 py-20 max-w-2xl">
                <p className="font-noto-kr text-sm text-hince-dark/65 mb-4">
                  {product.title}
                </p>
                <h2 className="font-constantia text-6xl text-hince-dark mb-8 leading-tight tracking-tight">
                  {product.englishTitle}
                </h2>
                <p className="font-noto-kr text-xl text-hince-dark mb-12 leading-relaxed">
                  {product.description}
                </p>
                <a
                  href="#"
                  className="text-hince-primary text-base font-arial underline opacity-75 hover:opacity-100 tracking-wide"
                >
                  GO SHOP &gt;
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {promoProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-hince-primary"
                  : "bg-hince-primary/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Social Media Section */}
      <section className="h-[1200px] flex">
        {/* Left Side - Store Image */}
        <div className="flex-1 relative">
          <img
            src="/api/placeholder/960/1200"
            alt="Store"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Social Content */}
        <div className="flex-1 bg-hince-light relative">
          {/* Section Header */}
          <div className="px-8 py-8">
            <p className="font-constantia text-sm text-hince-dark/65 mb-1">
              SNS
            </p>
            <h2 className="font-constantia text-6xl text-hince-dark tracking-tight mb-8">
              @hince_official
            </h2>
            <a
              href="#"
              className="text-hince-primary text-base font-arial underline opacity-75 hover:opacity-100 tracking-wide"
            >
              FOLLOW US ON INSTAGRAM &gt;
            </a>
          </div>

          {/* Instagram Grid */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 transform -rotate-12 scale-75">
              {socialImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Social ${index + 1}`}
                  className="w-48 h-48 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section className="h-[1200px] flex">
        {/* Left Side - Store Image */}
        <div className="flex-1 relative">
          <img
            src="/api/placeholder/960/1200"
            alt="hince hannam store"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Store Info */}
        <div className="flex-1 bg-white flex flex-col justify-center">
          <div className="px-8 py-20 max-w-2xl">
            <p className="font-constantia text-sm text-hince-dark/65 mb-4">
              STORE
            </p>
            <h2 className="font-constantia text-6xl text-hince-dark mb-8 leading-tight tracking-tight">
              hince hannam
            </h2>
            <p className="font-noto-kr text-xl text-hince-dark mb-12 leading-relaxed">
              힌스 전 제품 큐레이션 존과,
              <br />
              다채로운 영감을 선사하는 센슈얼 룸에서
              <br />
              당신만의 분위기를 마주해 보세요.
            </p>
            <a
              href="#"
              className="text-hince-primary text-base font-arial underline opacity-75 hover:opacity-100 tracking-wide"
            >
              SHOW MORE &gt;
            </a>
          </div>

          {/* Store Image */}
          <div className="px-8">
            <img
              src="/api/placeholder/600/629"
              alt="Store interior"
              className="w-full max-w-lg object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <Footer />

      {/* Chat Button */}
      <div className="fixed bottom-8 right-8">
        <img
          src="/api/placeholder/100/40"
          alt="Customer support chat"
          className="cursor-pointer hover:opacity-90 transition-opacity"
        />
      </div>
    </div>
  );
};

export default Index;
