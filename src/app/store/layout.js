'use client';
import BigSidebar from '@/components/BigSidebar';
import SmallSidebar from '@/components/SmallSidebar';
import Navbar from '@/components/Navbar';
import { useStoreContext } from '@/context/store';

const StoreLayout = ({ children }) => {
  const { showSidebar } = useStoreContext();

  return (
    <div className='flex flex-row'>
      <BigSidebar />
      <SmallSidebar />
      <div className='w-full'>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default StoreLayout;
