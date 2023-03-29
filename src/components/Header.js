export const Header = () => {
  return (
    <header className='p-4 px-6 fixed top-0 right-0 left-0 md:p-6 flex justify-between items-center md:px-[150px] bg-[#161616] shadow-[0 4px 8px 0]'>
      <div>
        <h1 className='text-red-500 underline decoration-teal-500 font-bold text-2xl md:text-3xl'>
          Logo
        </h1>
      </div>
      <nav>
        <ul className='flex text-white text-sm font-semibold md:font-bold md:text-lg'>
          <li className='ml-2 md:ml-5'>
            <h2>Sell to Us</h2>
          </li>
          <li className='ml-2 md:ml-5'>
            <h2>Contact Us</h2>
          </li>
        </ul>
      </nav>
    </header>
  );
};
