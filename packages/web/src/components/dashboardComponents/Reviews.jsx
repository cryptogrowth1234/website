const Reviews = () => {
  return (
    <div className='w-full rounded-lg flex flex-col pb-72'>
      <div className='text-white flex flex-row bg-coincap p-2 rounded-t-lg space-x-2 items-center mt-1'>
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
          />
        </svg>
        <div className='flex flex-col'>
          <span className='text-lg'>Rate Us</span>
          <span className='text-sm leading-3'>Tell others what you think</span>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex flex-col px-4 py-6 w-6/12 space-y-5'>
          <span className='text-base font-semibold w-full'>
            Tell us your experience with our services. This will help us improve
            more in our system and serving you better. Thanks for your support
          </span>

          <form action=''>
            <textarea
              name=''
              id=''
              cols={20}
              rows={10}
              className='w-full p-4 text-black outline-none rounded-lg '
              placeholder='Share your experience with us'
            ></textarea>
            <input
              type='submit'
              value='Submit'
              className='bg-coincap text-white p-2 w-full transform -translate-y-10 z-50 rounded-b-lg cursor-pointer rounded-t-none'
            />
          </form>
        </div>
        <div className='w-6/12 flex justify-center '>
          {/* <Swiper
            className='flex flex-col'
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
          </Swiper> */}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
