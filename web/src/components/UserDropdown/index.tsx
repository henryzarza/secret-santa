import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { useAuth } from 'src/auth'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'
import MyAccount from '../MyAccount'
import SlideOut from '../SlideOut'

const UserDropdown = () => {
  const [isDropdownShowing, setIsDropdownShowing] = useState(false)
  const [isSlideOutOpen, setIsSlideOutOpen] = useState(false)
  const { logOut } = useAuth()

  return (
    <>
      <div className="relative">
        <button
          className="flex items-center gap-2 text-black dark:text-white"
          onClick={() => setIsDropdownShowing((prevValue) => !prevValue)}
        >
          <motion.div animate={{ rotate: isDropdownShowing ? '-180deg' : '0' }}>
            <Icon id="chevron" size={24} />
          </motion.div>
          <Avatar avatar="/images/placeholder__avatar-01.png" alt="Avatar" />
          <div className="text-left">
            <small className="text-sm">Logged in as</small>
            <h6 className="text-lg font-bold">Cody Fisher</h6>
          </div>
        </button>

        <AnimatePresence>
          {isDropdownShowing && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 60 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-6 top-6 inline-block bg-white py-5 pl-4 pr-5 before:absolute before:-top-6 before:left-8 before:border-[12px] before:border-transparent before:border-b-white"
            >
              <ul className="flex flex-col gap-2">
                <button
                  className="flex cursor-pointer items-center gap-x-3 font-condensed text-3xl uppercase leading-none text-black hover:text-pastelMagenta"
                  onClick={() => setIsSlideOutOpen(true)}
                >
                  <div className="text-pastelMagenta">
                    <Icon id="user" size={32} />
                  </div>
                  Account
                </button>
                <button
                  className="flex cursor-pointer items-center gap-x-3 font-condensed text-3xl uppercase leading-none text-black hover:text-pastelMagenta"
                  onClick={() => setIsSlideOutOpen(true)}
                >
                  <div className="text-pastelMagenta">
                    <Icon id="calendar" size={32} />
                  </div>
                  My Events
                </button>
                <button
                  className="flex cursor-pointer items-center gap-x-3 font-condensed text-3xl uppercase leading-none text-black hover:text-pastelMagenta"
                  onClick={logOut}
                >
                  <div className="text-pastelMagenta">
                    <Icon id="logout" size={32} />
                  </div>
                  Logout
                </button>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* My Account - Slide out */}
      <SlideOut
        isOpen={isSlideOutOpen}
        toggleOpen={() => setIsSlideOutOpen(false)}
      >
        <MyAccount />
      </SlideOut>
    </>
  )
}

export default UserDropdown
