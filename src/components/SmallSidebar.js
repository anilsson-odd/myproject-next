import { useStoreContext } from '@/context/store';
import SidebarItems from './SidebarItems';

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useStoreContext();
  return (
    <div
      className={
        showSidebar
          ? 'flex justify-center absolute top-0 left-0 p-5 h-screen w-screen md:hidden'
          : 'hidden'
      }
    >
      <div className='relative flex justify-center items-center bg-slate-300 opacity-80 shadow rounded-lg h-64 w-64'>
        <div
          className='flex justify-center items-center absolute top-[-5px] right-[-5px] cursor-default bg-gray-700 border-2 border-white rounded-full text-white w-6 h-6 p-1'
          onClick={(e) => toggleSidebar()}
        >
          X
        </div>
        <div className='flex justify-center items-center'>
          <SidebarItems toggleSidebar={() => toggleSidebar()} />
        </div>
      </div>
    </div>
  );
};
export default SmallSidebar;
