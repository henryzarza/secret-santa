import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { prettifyDate } from 'src/helpers/date'

import Modal from '../Modal'

const DELETE_EVENT_MUTATION = gql`
  mutation deleteEventMutation($id: String!) {
    deleteEvent(id: $id) {
      id
    }
  }
`

const EditEvent = ({
  data,
  onCloseModal,
}: {
  data: { id: number; name: string; date: string; sendReminder: boolean }
  onCloseModal: () => void
}) => {
  const [deleteEvent, { loading }] = useMutation(DELETE_EVENT_MUTATION, {
    onCompleted: () => {
      onCloseModal()
      toast.success('Event was deleted.')
      navigate(routes.newEvent())
    },
    onError: (error) => {
      console.error(error)
      toast.error(error.message)
    },
  })

  const handleDelete = () => {
    deleteEvent({ variables: { id: data.id } })
  }

  return (
    <Modal status="error" onClose={onCloseModal}>
      <div className="flex flex-col items-center">
        <h6 className="mb-14 font-sans text-xl font-bold leading-tight text-white">
          Are you sure you want to delete this?
        </h6>
        <h3 className="mb-3 font-handwriting text-xl font-bold uppercase text-white lg:text-[32px]">
          {prettifyDate(data.date)}
        </h3>
        <h2 className="mb-14 font-condensed text-7xl font-normal uppercase leading-[0.8] text-white lg:text-[116px]">
          {data.name}
        </h2>
        <div className="flex gap-7 text-white">
          <button
            className="medium underline hover:text-black"
            disabled={loading}
            onClick={onCloseModal}
          >
            Cancel
          </button>
          <button
            className="medium bg-black hover:bg-white hover:text-black"
            disabled={loading}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default EditEvent
