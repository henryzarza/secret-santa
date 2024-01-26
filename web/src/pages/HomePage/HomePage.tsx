import { useState } from 'react'
import { MetaTags } from '@redwoodjs/web'

import Icon from 'src/components/Icon/Icon'
import CounterFilter from 'src/components/CounterFilter'
import Card from 'src/components/Card'
import { AvatarProps } from 'src/components/Avatar/Avatar'

const MOCK_DATA = [
  {
    avatar: '/images/placeholder__avatar-01.png',
    name: 'Wade Warren',
    email: 'wade.warren@example.com',
    indicator: 'success'
  },
  {
    avatar: '/images/placeholder__avatar-01.png',
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    indicator: 'warning'
  },
  {
    avatar: '/images/placeholder__avatar-01.png',
    name: 'Marvin McKinney',
    email: 'marvin.mckinney@example.com',
    indicator: 'error'
  },
  {
    avatar: '/images/placeholder__avatar-01.png',
    name: 'Darrell Steward',
    email: 'darrell.steward@example.com',
    indicator: 'error'
  },
  {
    avatar: '/images/placeholder__avatar-01.png',
    name: 'Jenny Jones',
    email: 'jenny.jones@example.com',
    indicator: 'warning'
  },
  {
    avatar: '/images/placeholder__avatar-01.png',
    name: 'Bessie Cooper',
    email: 'bessie.cooper@example.com',
    indicator: 'warning'
  },
  {
    avatar: '/images/placeholder__avatar-01.png',
    name: 'Robert Fox',
    email: 'robert.fox@example.com',
    indicator: 'success'
  },
  {
    avatar: '/images/placeholder__avatar-01.png',
    name: 'Eleanor Pena',
    email: 'eleanor.pena@example.com',
    indicator: 'success'
  }
]

const HomePage = () => {
  const [filterBy, setFilterBy] = useState<string | null>()

  return (
    <>
      <MetaTags title="Secret Santa" description="Secret Santa Home page" />

      <h2 className="font-handwriting font-bold text-xl lg:text-[32px] text-white mb-3 uppercase">
        4 weeks & 2 days until
      </h2>
      <div className="flex flex-wrap gap-3 justify-between items-center mb-6 md:mb-12">
        <h1 className="font-condensed flex-1 text-7xl leading-[0.8] lg:text-[150px] uppercase text-white font-normal">
          Smith Christmas
        </h1>
        <button className="text-black dark:text-white hover:text-supernova">
          <Icon id="edit" />
        </button>
        <button className="small bg-supernova rounded-full hover:bg-spicyMustard hover:text-white">
          Match
        </button>
      </div>
      <div className="flex flex-wrap gap-4 lg:gap-16 mb-6 md:mb-16">
        <CounterFilter
          status="error"
          quantity={2}
          text="Declined"
          isActive={filterBy === "error"}
          isDisabled={!!filterBy}
          handleSelected={setFilterBy}
        />
        <CounterFilter
          status="warning"
          quantity={3}
          text="Pending"
          isActive={filterBy === "warning"}
          isDisabled={!!filterBy}
          handleSelected={setFilterBy}
        />
        <CounterFilter
          status="success"
          quantity={3}
          text="Accepted"
          isActive={filterBy === "success"}
          isDisabled={!!filterBy}
          handleSelected={setFilterBy}
        />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-4 lg:gap-x-16 lg:gap-y-8 mb-6 md:mb-16">
        {MOCK_DATA
          .filter(el => filterBy ? el.indicator === filterBy : true)
          .map(user => (
            <Card
              key={user.email}
              avatar={{
                avatar: user.avatar,
                indicator: user.indicator as AvatarProps['indicator'],
                alt: user.name
              }}
              name={user.name}
              email={user.email}
              isCloseShowing={false}
            />
          ))
        }
      </div>
    </>
  )
}

export default HomePage
