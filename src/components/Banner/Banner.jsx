// Import Swiper styles
import { useLoaderData } from 'react-router';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Banner() {
  const data = useLoaderData();

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-2xl z-0"
      >
        {data
          ? data?.map((s) => (
              <SwiperSlide key={s.id}>
                <img className="max-h-[700px] w-full" src={s.image} alt="" />
              </SwiperSlide>
            ))
          : 'Loading...'}
      </Swiper>
    </>
  );
}
