import { useStoreContext } from '@/context/store';
import LogoAlt from './LogoAlt';
import { FaAlignJustify } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@nextui-org/react';

const Navbar = () => {
  const { toggleSidebar } = useStoreContext();

  return (
    <div className='bg-sky-50 border-b-2 border-solid border-slate-200 pl-4 h-16'>
      <div className='flex justify-between items-middle h-full'>
        <div className='inline-block color-white mt-4' onClick={toggleSidebar}>
          <div className='inline-block align-middle'>
            <FaAlignJustify />
          </div>
        </div>
        <div className='flex gap-4 items-end pb-2'>
          <Button color='primary' variant='bordered' size='sm' radius='sm'>
            Sign In
          </Button>
          <Button color='primary' variant='bordered' size='sm' radius='sm'>
            Sign Up
          </Button>
          <LogoAlt />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
