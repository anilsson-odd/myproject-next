import { useStoreContext } from '@/context/store';
import { FaAlignJustify } from 'react-icons/fa';
import { Button } from '@nextui-org/react';
import { useRouter } from "next/navigation";
import paths from '@/utils/paths';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { toggleSidebar } = useStoreContext();
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className='bg-sky-900 text-white border-b-2 border-solid border-slate-200 pl-4 h-16'>
      <div className='flex justify-between items-middle h-full'>
        <div className='inline-block mt-4' onClick={toggleSidebar}>
          <div className='inline-block align-middle'>
            <FaAlignJustify />
          </div>
        </div>
        <div className='flex gap-4 items-end pb-3.5'>
          {
            session
              ? <>
                  Signed in
                  <Button
                    className="text-white"
                    color="default"
                    variant="bordered"
                    size="sm"
                    radius="sm"
                    onClick={(e) => signOut()}
                  >
                    Sign Out
                  </Button>
                </>
              : <>
                  <Button
                    className="text-white"
                    color='default'
                    variant='bordered'
                    size='sm'
                    radius='sm'
                    onClick={(e) => router.push(paths.login())}
                  >
                    Sign In
                  </Button>
                  <Button
                    className="text-white"
                    color='default'
                    variant='bordered'
                    size='sm'
                    radius='sm'
                    onClick={(e) => router.push(paths.register())}
                  >
                    Sign Up
                  </Button>
                </>
          }
          <div className='pr-14'></div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
