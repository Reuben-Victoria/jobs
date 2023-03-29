import image from "../assets/image.svg";
export const Home = () => {
  return (
    <main className='bg-background-homeBg px-6 md:px-[150px] pt-[100px] pb-[80px] md:pt-[162px] md:pb-[122px] grid md:grid-cols-2 gap-6 md:gap-8'>
      <div className='grid gap-6 md:gap-8'>
        <h1 className='text-4xl md:text-[54px] md:leading-[1.2] tracking-[-0.04em] font-normal md:font-light w-full md:max-w-[540px] '>
          We’re building the best culture to grow software companies
        </h1>
        <button className='text-lg font-medium md:text-xl md:font-bold max-w-fit text-text-buttonText font-manrope rounded-sm hover:opacity-80 py-3 md:py-1 px-3 md:px-[1.5rem] bg-background-buttonBg'>
          Let's Chat
        </button>
        <p className='text-[#161616] text-lg md:text-xl '>
          Relay Commerce operates & acquires exceptional e-commerce SaaS
          companies. We buy businesses that are ready to scale and pair them
          with our world-class operating team to accelerate growth.
        </p>
      </div>
      <div>
        <img src={image} alt='illustration' />
      </div>
    </main>
  );
};
