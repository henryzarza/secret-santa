import { useState } from 'react'

import Hamburger from '../Hamburger'

const NAV_LINKS = [
  {
    link: '/dashboard',
    text: 'Dashboard',
  },
  {
    link: '/our-group',
    text: 'Our Group',
  },
  {
    link: '/wish-list',
    text: 'My Wish List',
  },
]

const Nav = () => {
  const [isHamburger, setIsHamburger] = useState(true)

  return (
    <>
      <div
        className={`flex h-screen w-[460px] flex-col justify-between bg-supernova px-12 pb-12 pt-[160px] transition-transform duration-500 ${
          isHamburger ? '-translate-x-[120%]' : 'translate-x-0'
        }`}
      >
        <nav>
          <ul>
            {NAV_LINKS.map(({ link, text }) => (
              <li
                key={link}
                className="font-condensed text-[72px] uppercase leading-none tracking-wide"
              >
                <a className="hover:text-orangeRed" href={link}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <h6 className="mb-2 font-condensed text-5xl uppercase text-spanishGreen">
            Past Events
          </h6>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="/" className="hover:text-orangeRed">
                <strong className="text-2xl font-bold">Smith Christmas</strong>
                <div>December 23, 2024</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="absolute left-8 top-6">
        <Hamburger
          toggleNav={() => setIsHamburger((prevValue) => !prevValue)}
          isHamburger={isHamburger}
        />
      </div>
    </>
  )
}

export default Nav
