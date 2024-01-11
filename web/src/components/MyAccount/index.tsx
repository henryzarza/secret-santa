import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

const MyAccount = () => {
  const [isDropdownShowing, setIsDropdownShowing] = useState(false)

  return (
    <div>
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative left-6 top-6 inline-block bg-white py-5 pl-4 pr-5 before:absolute before:-top-6 before:left-8 before:border-[12px] before:border-transparent before:border-b-white"
          >
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-x-3 font-condensed text-3xl uppercase text-black">
                <div className="text-pastelMagenta">
                  <Icon id="user" size={32} />
                </div>
                My Account
              </li>
              <li className="flex items-center gap-x-3 font-condensed text-3xl uppercase text-black">
                <div className="text-pastelMagenta">
                  <Icon id="calendar" size={32} />
                </div>
                My Event
              </li>
              <li className="flex items-center gap-x-3 font-condensed text-3xl uppercase text-black">
                <div className="text-pastelMagenta">
                  <Icon id="logout" size={32} />
                </div>
                Logout
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MyAccount
