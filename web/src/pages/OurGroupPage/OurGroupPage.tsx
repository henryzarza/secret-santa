import { useState } from 'react'
import { Metadata } from '@redwoodjs/web'
import Accordion from 'src/components/Accordion'
import { AvatarProps } from 'src/components/Avatar/Avatar'
import Card from 'src/components/Card'
import EmptyCard from 'src/components/EmptyCard'
import Icon from 'src/components/Icon/Icon'
import SlideOut from 'src/components/SlideOut'
import WishListItem from 'src/components/WishListItem'

const MOCK_DATA = [
  {
    avatar: '/images/placeholder__avatar-01.png',
    name: 'Wade Warren',
    email: 'wade.warren@example.com',
    pair: {
      avatar: '/images/placeholder__avatar-01.png',
      name: 'Eleanor Pena',
      email: 'eleanor.pena@example.com'
    }
  },
  {
    avatar: '/images/placeholder__avatar-01.png',
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com'
  },
  {
    avatar: '/images/placeholder__avatar-01.png',
    name: 'Marvin McKinney',
    email: 'marvin.mckinney@example.com'
  },
  {
    avatar: '/images/placeholder__avatar-01.png',
    name: 'Darrell Steward',
    email: 'darrell.steward@example.com'
  }
]

const MOCK_DATA_RSVP = [
  {
    avatar: '/images/placeholder__avatar-01.png',
    name: 'Robert Fox',
    email: 'robert.fox@example.com',
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
    name: 'Jenny Jones',
    email: 'jenny.jones@example.com',
    indicator: 'error'
  }
]

const OurGroupPage = () => {
  const [selectedUser, setSelectedUser] = useState<typeof MOCK_DATA[number] | null>()

  return (
    <>
      <Metadata title="OurGroup" description="OurGroup page" />

      <h2 className="font-handwriting font-bold text-xl lg:text-[32px] text-white mb-3 uppercase">
        4 weeks & 2 days until December 23, 2024
      </h2>
      <div className="flex flex-wrap gap-3 justify-between items-center mb-6 md:mb-12">
        <h1 className="font-condensed flex-1 text-7xl leading-[0.8] lg:text-[116px] uppercase text-white font-normal">
          Smith Christmas
        </h1>
        <button className="text-black dark:text-white hover:text-supernova">
          <Icon id="edit" />
        </button>
      </div>
      <div className="flex flex-col gap-6 md:gap-8 mb-8">
        {MOCK_DATA.map(user => (
          <div key={user.email} className="flex flex-col lg:flex-row items-center gap-2">
            <Card
              avatar={{
                avatar: user.avatar,
                alt: user.name,
                isSantaHatVisible: true
              }}
              name={user.name}
              email={user.email}
              isCloseShowing={false}
            />
            <div className="h-11 w-[10px] lg:h-[10px] lg:w-11 bg-supernova" />
            {user.pair ? (
              <Card
                avatar={{
                  avatar: user.pair.avatar,
                  alt: user.pair.name
                }}
                name={user.pair.name}
                email={user.pair.email}
                isCloseShowing={false}
                onClick={() => setSelectedUser(user)}
              />
            ) : <EmptyCard /> }
          </div>
        ))}
      </div>

      {/* Accordions */}
      <div className="flex flex-col text-white gap-3 pb-10 pl-5">
        <Accordion heading="Failed to RSVP">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 text-black pt-7">
            {MOCK_DATA_RSVP.map(user => (
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
            ))}
          </div>
        </Accordion>

        <Accordion heading="declined to participate">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 text-black pt-7">
            {MOCK_DATA_RSVP.map(user => (
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
            ))}
          </div>
        </Accordion>
      </div>

      {/* Slide out */}
      <SlideOut
        isOpen={!!selectedUser}
        toggleOpen={() => setSelectedUser(null)}
      >
        <h2 className="font-condensed text-7xl leading-[0.8] lg:text-[116px] uppercase text-white font-normal mb-5">
          Wish List
        </h2>
        {!!selectedUser && (
          <div className="relative mb-14">
            <h6 className="absolute font-handwriting text-3xl text-white font-bold uppercase leading-tight -left-16 top-8">
              For
            </h6>
            <Card
              avatar={{
                avatar: selectedUser.avatar,
                alt: selectedUser.name
              }}
              name={selectedUser.name}
              email={selectedUser.email}
              isCloseShowing={false}
            />
          </div>
        )}
        <div className="flex flex-col gap-5">
          <WishListItem
            heading="iPhone 15"
            number={1}
            siteDescription="iPhone 15 and iPhone 15 Plus. Dynamic Island. 48MP Main camera with 2x Telephoto. All-day battery life. USB-C. 6.1” and 6.7” sizes."
            siteImage='/images/placeholder__wish-list-image.png'
            url="https://www.apple.com/"
          />
          <WishListItem
            heading="iPhone 15 Pro"
            number={2}
            siteDescription="iPhone 15 and iPhone 15 Plus. Dynamic Island. 48MP Main camera with 2x Telephoto. All-day battery life. USB-C. 6.1” and 6.7” sizes."
            siteImage='/images/placeholder__wish-list-image.png'
            url="https://www.apple.com/"
          />
          <WishListItem
            heading="iPhone 15 Mini"
            number={3}
            siteDescription="iPhone 15 and iPhone 15 Plus. Dynamic Island. 48MP Main camera with 2x Telephoto. All-day battery life. USB-C. 6.1” and 6.7” sizes."
            siteImage='/images/placeholder__wish-list-image.png'
            url="https://www.apple.com/"
          />
        </div>
      </SlideOut>
    </>
  )
}

export default OurGroupPage
