"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRTL } from "@/hooks/useRTL";
import "swiper/css";
import "swiper/css/navigation";

interface SliderContainerProps<T> {
  title?: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function SliderContainer<T>({ title, items, renderItem }: SliderContainerProps<T>) {
  const { isRTL } = useRTL();

  return (
    <div className="mt-16 slider-container" dir={isRTL ? 'rtl' : 'ltr'}>
      {title && <h2 className="text-2xl font-semibold mb-6">{title}</h2>}

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }}
        className="relative"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .slider-container .swiper-button-next,
        .slider-container .swiper-button-prev {
          background-color: white;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .slider-container .swiper-button-next:after,
        .slider-container .swiper-button-prev:after {
          font-size: 16px;
          color: white;
        }

        .slider-container .swiper-button-next {
          ${isRTL ? 'left: 5px; right: auto;' : 'right: 5px;'}
          background-color: var(--color-primary);
        }

        .slider-container .swiper-button-prev {
          ${isRTL ? 'right: 5px; left: auto;' : 'left: 5px;'}
          background-color: var(--color-primary);
        }

        .slider-container .swiper-button-disabled {
          opacity: 0;
          cursor: default;
        }

        /* Fix arrow directions for RTL */
        ${isRTL ? `
          .slider-container .swiper-button-next:after {
            transform: rotate(180deg);
          }
          .slider-container .swiper-button-prev:after {
            transform: rotate(180deg);
          }
        ` : ''}
      `}</style>
    </div>
  );
}
