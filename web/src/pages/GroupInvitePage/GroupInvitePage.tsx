import { useState } from 'react'

import { Metadata, useQuery } from '@redwoodjs/web'

import DeleteEvent from 'src/components/DeleteEvent'
import EditEvent from 'src/components/EditEvent'
import Icon from 'src/components/Icon/Icon'
import InviteGroup from 'src/components/InviteGroup'
import SlideOut from 'src/components/SlideOut'
import { prettifyDate } from 'src/helpers/date'

export const EVENT_DETAIL_QUERY = gql`
  query eventDetail($id: String!) {
    event(id: $id) {
      id
      name
      date
      sendReminder
      invite {
        id
        email
        name
        user {
          avatar
        }
      }
    }
  }
`

const GroupInvitePage = ({ id }: { id: string }) => {
  const [isSlideOutOpen, setIsSlideOutOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const { data, error, loading } = useQuery(EVENT_DETAIL_QUERY, {
    variables: { id },
  })

  if (error) {
    return (
      <h2 className="mb-3 mt-10 font-handwriting text-xl font-bold uppercase text-white lg:text-[32px]">
        Oops... there was an error {error.message}
      </h2>
    )
  }

  if (!data?.event) {
    return (
      <h2 className="mb-3 mt-10 font-handwriting text-xl font-bold uppercase text-white lg:text-[32px]">
        {loading
          ? 'Loading data...'
          : 'Oops... it seems the Event does not exist 🤔'}
      </h2>
    )
  }

  return (
    <>
      <Metadata
        title="Invite Friends and Family"
        description="Secret Santa invite friends and family"
      />

      <h2 className="mb-3 font-handwriting text-xl font-bold uppercase text-white lg:text-[32px]">
        {prettifyDate(data.event.date)}
      </h2>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 md:mb-12">
        <h1 className="flex-1 font-condensed text-7xl font-normal uppercase leading-[0.8] text-white lg:text-[116px]">
          {data.event.name}
        </h1>
        <button
          className="text-black hover:text-supernova dark:text-white"
          onClick={() => setIsSlideOutOpen(true)}
        >
          <Icon id="edit" />
        </button>
        <button className="small rounded-full bg-supernova hover:bg-spicyMustard hover:text-white">
          Match
        </button>
      </div>

      <InviteGroup eventId={id} invites={data.event.invite || []} />

      <SlideOut
        isOpen={isSlideOutOpen}
        toggleOpen={() => setIsSlideOutOpen(false)}
      >
        {Boolean(data?.event) && (
          <>
            <EditEvent data={data.event} />
            <button
              className="mx-auto flex items-center gap-2 bg-transparent px-4 py-2 text-2xl font-normal text-black underline transition-colors hover:bg-orangeRed hover:text-white"
              onClick={() => {
                setIsSlideOutOpen(false)
                setIsDeleteModalOpen(true)
              }}
            >
              <Icon id="trash" />
              Delete the Event
            </button>
          </>
        )}
      </SlideOut>
      {isDeleteModalOpen && (
        <DeleteEvent
          data={data.event}
          onCloseModal={() => setIsDeleteModalOpen(false)}
        />
      )}
    </>
  )
}

export default GroupInvitePage
