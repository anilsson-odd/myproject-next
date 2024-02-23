import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const Logo = () => {
  return (
    <h1 className={`block text-center ${merriweather.className}`}>
      <span className='inline-block tracking-widest text-xl text-blue-500 first-letter:text-2xl'>
        Mega
      </span>{' '}
      <span className='inline-block tracking-widest text-xl text-blue-500 first-letter:text-2xl'>
        Store
      </span>
    </h1>
  );
};
export default Logo;
