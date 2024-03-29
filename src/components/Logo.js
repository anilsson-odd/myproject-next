import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const Logo = () => {
  return (
    <h1 className={`block text-center ${merriweather.className}`}>
      <span className='inline-block tracking-widest text-6xl text-sky-400 first-letter:text-7xl first-letter:text-sky-300'>
        Mega
      </span>{' '}
      <span className='inline-block tracking-widest text-6xl text-sky-400 first-letter:text-7xl first-letter:text-sky-300'>
        Store
      </span>
    </h1>
  );
};
export default Logo;
