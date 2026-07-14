import { Clock3 } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const HeroBanner = ({
  banners = [],
  logo,
  name,
  tagline,
  deliveryTime = "20-25 min",
  isOpen = true,
}) => {
  const images =
    banners.length > 0
      ? banners
      : [
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
        ];

  return (
    <section className="relative overflow-hidden rounded-[14px]">
      <div className="relative h-[260px] sm:h-[320px] lg:h-[420px]">
        <Swiper
modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={images.length > 1}
         
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="h-full w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${name} Banner ${index + 1}`}
                className="h-full w-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/35" />

              {/* Theme Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 35%, var(--primary-light) 140%)",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Store Card */}
        <div
          className="
            absolute
            bottom-5
            left-5
            right-5
            z-20
            rounded-[14px]
            bg-white/90
            backdrop-blur-xl
            p-5
            shadow-xl
          "
        >
          <div className="flex items-center gap-5">
            {/* Logo */}
            <img
              src={logo}
              alt={name}
              className="
                h-20
                w-20
                rounded-[14px]
                border-4
                border-white
                object-cover
                shadow-lg
              "
            />

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-slate-900">
                {name}
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                {tagline}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {/* Delivery Time */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-[10px]
                    bg-slate-100
                    px-3
                    py-1
                    text-sm
                  "
                >
                  <Clock3 size={15} />
                  <span>{deliveryTime}</span>
                </div>

                {/* Store Status */}
                <div
                  className="
                    rounded-[10px]
                    px-3
                    py-1
                    text-sm
                    font-semibold
                    text-white
                  "
                  style={{
                    background: isOpen
                      ? "var(--primary)"
                      : "#EF4444",
                  }}
                >
                  {isOpen ? "Open" : "Closed"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;