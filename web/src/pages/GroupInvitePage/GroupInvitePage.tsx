import { Metadata, useQuery } from '@redwoodjs/web'
import InviteGroup from 'src/components/InviteGroup'
import Icon from 'src/components/Icon/Icon'
import { prettifyDate } from 'src/helpers/date'

const EVENT_DETAIL_QUERY = gql`
  query eventDetail($id: String!) {
    event(id: $id) {
      id
      name
      date
    }
  }
`


const GroupInvitePage = ({ id }: { id: string; }) => {
  const { data, loading, error } = useQuery(EVENT_DETAIL_QUERY, { variables: { id } })

  if (loading) {
    return (
      <h2 className="font-handwriting font-bold text-xl lg:text-[32px] text-white mb-3 uppercase">
        Loading
      </h2>
    )
  }

  if (error) {
    return (
      <h2 className="font-handwriting font-bold text-xl lg:text-[32px] text-white mb-3 uppercase mt-10">
        Oops... there was an error {error.message}
      </h2>
    )
  }

  if (!data.event) {
    return (
      <h2 className="font-handwriting font-bold text-xl lg:text-[32px] text-white mb-3 uppercase mt-10">
        Oops... it seems the Event does not exist 🤔
      </h2>
    )
  }

  return (
    <>
      <Metadata title="Invite Friends and Family" description="Secret Santa invite friends and family" />

      <h2 className="font-handwriting font-bold text-xl lg:text-[32px] text-white mb-3 uppercase">
        {prettifyDate(data.event.date)}
      </h2>
      <div className="flex flex-wrap gap-3 justify-between items-center mb-6 md:mb-12">
        <h1 className="font-condensed flex-1 text-7xl leading-[0.8] lg:text-[116px] uppercase text-white font-normal">
          {data.event.name}
        </h1>
        <button className="text-black dark:text-white hover:text-supernova">
          <Icon id="edit" />
        </button>
        <button className="small bg-supernova rounded-full hover:bg-spicyMustard hover:text-white">
          Match
        </button>
      </div>

      <InviteGroup eventId={id} />
    </>
  )
}

export default GroupInvitePage
