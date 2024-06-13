import avatarMichelle from '../assets/avatar-michelle.jpg'

interface Props {
  show: boolean
}

function AvatarDescription({ show }: Props) {
  return (
    <div
      className={`mt-8 px-8 items-center gap-4 md:px-10 md:mt-5 ${
        show ? 'hidden md:flex' : 'flex'
      }`}
    >
      <img
        src={avatarMichelle}
        alt='avatar-michelle'
        className='w-10 h-10 rounded-full'
      />

      <div className='flex flex-col'>
        <span className='text-[13px] font-bold tracking-[.1px] text-[hsl(217.14deg,_11.86%,_34.71%)]'>
          Michelle Appleton
        </span>
        <time
          dateTime='2020-06-28'
          className='text-[13px] font-medium tracking-[.1px] text-[hsl(225deg,_8.96%,_73.73%)]'
        >
          28 Jun 2020
        </time>
      </div>
    </div>
  )
}

export default AvatarDescription
