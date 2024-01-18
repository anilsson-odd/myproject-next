import { useStoreContext } from '@/context/store';
import LogoWhite from './LogoWhite';
import { FaAlignJustify } from 'react-icons/fa';

const Navbar = () => {
  const { toggleSidebar } = useStoreContext();

  return (
    <div className='bg-sky-700 border-b-2 border-solid border-sky-600 pl-4 h-16'>
      <div className='flex justify-between items-middle h-full'>
        <div className='inline-block color-white mt-4' onClick={toggleSidebar}>
          <div className='inline-block align-middle'>
            <FaAlignJustify />
          </div>
        </div>
        <div className='flex items-end'>
          <LogoWhite />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
