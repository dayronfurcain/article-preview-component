interface Props {
  handleClick: () => void
  show: boolean
}

function ShareButton({ handleClick, show }: Props) {
  return (
    <div
      onClick={handleClick}
      className={`${
        show
          ? 'bg-[hsl(212.73deg,_17.74%,_51.37%)]'
          : 'bg-[hsl(210deg,_43.75%,_93.73%)]'
      } w-[30px] flex justify-center items-center aspect-square absolute z-10 right-8 bottom-[25px]  rounded-full
      md:right-[42px] md:bottom-[37px]`}
    >
      <svg xmlns='http://www.w3.org/2000/svg' width='15' height='13'>
        <path
          fill={show ? '#FFF' : '#6E8098'}
          d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
        />
      </svg>
    </div>
  )
}

export default ShareButton
