import Image from 'next/image';
import Link from 'next/link';
import { IoIosCube } from 'react-icons/io';
import Logo from '@/components/Logo';
import main from '@/../public/shop.png';
import paths from '@/utils/paths';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '300',
  display: 'swap',
});

export default async function Home() {
  return (
    <>
      <div className='text-center mt-8'>
        <Logo />
      </div>
      <div className='text-sky-500 text-center italic'>
        Helping customers to find the perfect computer since 2023!
      </div>
      <div className='flex items-center justify-center mt-24 w-full'>
        <div className='text-sky-400 border-solid border-l-4 border-sky-400 leading-6 text-lg pl-5 pr-32 w-2/5'>
          <p>
            I&apos;m baby pour-over PBR&B shabby chic, crucifix beard vinyl
            prism poke pork belly drinking vinegar meh man braid truffaut shaman
            letterpress. Vexillologist tonx swag ethical. 90&apos;s selvage
            JOMO, craft beer crucifix hexagon iceland flannel synth. Literally
            cred whatever gochujang distillery hoodie banjo church-key cloud
            bread vibecession tonx blog typewriter forage bespoke. Chia
            aesthetic kickstarter +1 you probably haven&apos;t heard of them
            viral fixie tumeric locavore DSA affogato. Sus same austin chambray
            woke blackbird spyplane mlkshk selvage truffaut next level mustache
            normcore jawn.
          </p>
        </div>
        <div className='w-1/5'>
          <Image src={main.src} width={500} height={500} alt='store image' />
        </div>
      </div>
      <div className={`flex justify-center ${poppins.className}`}>
        <Link href={paths.store()}>
          <button
            type='button'
            className='bg-sky-700 border-none border-black rounded-full text-white text-4xl py-3 px-10 mt-8 hover:bg-sky-800 active:bg-sky-900'
          >
            Start Browsing{' '}
            <div className='inline-block align-middle'>
              <IoIosCube />
            </div>
          </button>
        </Link>
      </div>
    </>
  );
}
