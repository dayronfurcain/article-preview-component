import { useState } from 'react'
import ShareButton from './components/ShareButton'
import AvatarDescription from './components/AvatarDescription'
import ListOfIcons from './components/ListOfIcons'

function App() {
  const [show, setShow] = useState(false)

  return (
    <main className='bg-[hsl(206.25deg,_42.11%,_92.55%)] min-h-screen flex flex-col items-center '>
      <article className='relative shadow-sm bg-white w-[327px] h-[512px] mt-[74px] rounded-[10px] md:w-[728px] md:h-[280px] md:mt-[260px] md:flex'>
        <div className='h-[200px] bg-[url("./assets/drawers.jpg")] bg-cover bg-[0_-16px] rounded-t-[10px] md:h-full md:w-[284px] md:bg-no-repeat md:bg-[0_0] md:rounded-l-[10px] md:rounded-r-none'></div>

        <div className='font-manrope h-[calc(100%_-_200px)] flex flex-col md:h-auto md:flex-1'>
          <div className='px-8 pt-9 md:px-10 md:pt-8'>
            <h2 className='text-[hsl(217.14deg,_10.55%,_39.02%)] font-bold text-[16px] tracking-[.2px] md:text-xl'>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h2>

            <p className='text-[hsl(216.92deg,_5.83%,_56.27%)] font-medium text-[13px] mt-3 tracking-[.15px] leading-[20px]'>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          <ListOfIcons show={show} />
          <AvatarDescription show={show} />
        </div>

        <ShareButton handleClick={() => setShow(!show)} show={show} />
      </article>
      <footer className='attribution mt-8'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href='https://www.frontendmentor.io/profile/dayronfurcain'
          target='_blank'
        >
          Dayron Furcain
        </a>
        .
      </footer>
    </main>
  )
}

export default App
