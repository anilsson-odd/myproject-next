import Link from 'next/link';
import links from '@/utils/links';
import paths from '@/utils/paths';

const SidebarItems = ({ toggleSidebar }) => {
  return (
    <div className='flex justify-center items-center flex-col w-52'>
      {links.map((item, idx) => {
        return (
          <Link
            key={idx}
            href={paths.productsList(item.link)}
            className={
              false
                ? 'block pl-4 text-sky-700 text-2xl mt-4 no-underline w-4/5 border-solid border-l-2 border-slate-500 pl-3.5'
                : 'block pl-4 text-sky-700 text-2xl mt-4 no-underline w-4/5'
            }
            onClick={(e) => toggleSidebar && toggleSidebar()}
          >
            <div className='inline-block align-middle'>{item.icon}</div>{' '}
            {item.text}
          </Link>
        );
      })}
    </div>
  );
};
export default SidebarItems;
