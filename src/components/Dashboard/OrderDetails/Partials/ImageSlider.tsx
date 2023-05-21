import React, { useRef, useState } from 'react';

const ImageSlider: React.FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
  ];

  const touchStartRef = useRef<number>(0);
  const touchStartTimeRef = useRef<number>(0);

  const prevSlide = (): void => {
    const index = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(index);
  };

  const nextSlide = (): void => {
    const index = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(index);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
    touchStartRef.current = event.touches[0].clientX;
    touchStartTimeRef.current = Date.now();
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => {
    const touchX = event.touches[0].clientX;
    const deltaX = touchStartRef.current - touchX;

    const delay = 150;
    const threshold = 10;

    if (deltaX > threshold && Date.now() - touchStartTimeRef.current > delay) {
      nextSlide();
      touchStartTimeRef.current = Date.now();
    } else if (
      deltaX < -threshold &&
      Date.now() - touchStartTimeRef.current > delay
    ) {
      prevSlide();
      touchStartTimeRef.current = Date.now();
    }
  };

  return (
    <div
      id='custom-controls-gallery'
      className='mxslg:h-auto mxslg:pb-5 relative h-[550px] w-[1000px]'
      data-carousel='slide'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className='mxslg:hidden relative h-full w-full overflow-hidden rounded-lg'>
        {images.map((image, index) => (
          <div
            className={`${
              index === activeIndex ? 'block' : 'hidden'
            } duration-700 ease-in-out`}
            data-carousel-item={index === activeIndex ? 'active' : ''}
            key={index}
          >
            <img
              src={image}
              className='absolute left-1/2 top-1/2 block h-auto min-w-full -translate-x-1/2 -translate-y-1/2 object-cover'
              alt=''
            />
          </div>
        ))}
      </div>
      <div className='mxslg:flex relative hidden h-auto w-full flex-col gap-5 overflow-hidden rounded-lg'>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} className='h-auto w-full object-cover' alt='' />
          </div>
        ))}
      </div>
      <div className='mxslg:hidden flex items-center justify-center pt-1'>
        <button
          type='button'
          className='group mr-4 flex h-full cursor-pointer items-center justify-center focus:outline-none'
          data-carousel-prev
          onClick={prevSlide}
        >
          <span className='dark:hover:text-pylon dark:group-focus:text-pylon text-gray-400 hover:text-gray-900 group-focus:text-gray-900'>
            <svg
              aria-hidden='true'
              className='h-6 w-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
                clipRule='evenodd'
              />
            </svg>
            <span className='sr-only'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          className='group flex h-full cursor-pointer items-center justify-center focus:outline-none'
          data-carousel-next
          onClick={nextSlide}
        >
          <span className='dark:hover:text-pylon dark:group-focus:text-pylon text-gray-400 hover:text-gray-900 group-focus:text-gray-900'>
            <svg
              aria-hidden='true'
              className='h-6 w-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
            <span className='sr-only'>Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
