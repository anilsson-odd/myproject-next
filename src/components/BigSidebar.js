import { useStoreContext } from '@/context/store';
import Logo from './Logo';
import SidebarItems from './SidebarItems';

const BigSidebar = () => {
  const { showSidebar } = useStoreContext();

  return (
    <div className={showSidebar ? 'w-96 max-md:w-0' : 'w-0'}>
      <div
        className={
          showSidebar
            ? 'flex flex-col items-center max-md:hidden border-r-2 h-screen'
            : 'hidden'
        }
      >
        <Logo />
        <SidebarItems />
      </div>
    </div>
  );
};
export default BigSidebar;
