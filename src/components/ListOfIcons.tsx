import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'

interface Props {
  show: boolean
}

// right: -68px;
//     bottom: 96px;

function ListOfIcons({ show }: Props) {
  return (
    <div
      className={`list-of-icons w-full mt-[20px] px-8 rounded-b-[10px] bg-[hsl(218.82deg,_18.89%,_35.29%)] items-center gap-4 flex-1 md:absolute md:w-[248px] md:h-[55px] md:rounded-[10px] md:right-[-68px] md:bottom-[96px] ${
        show ? 'flex' : 'hidden'
      }`}
    >
      <span className='uppercase text-[13px] tracking-[5.2px] text-white'>
        Share
      </span>
      <div className='flex gap-4 '>
        <img src={facebook} alt='icon-facebook' className='w-5 h-5' />
        <img src={twitter} alt='icon-twitter' className='w-5 h-5' />
        <img src={pinterest} alt='icon-pinterest' className='w-5 h-5' />
      </div>
    </div>
  )
}

export default ListOfIcons
