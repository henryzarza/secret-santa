import {
  DateField,
  FieldError,
  Form,
  InputField,
  Label,
  Submit,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import Checkbox from 'src/components/Checkbox'
import { formatDateFromDB } from 'src/helpers/date'
import { EVENT_DETAIL_QUERY } from 'src/pages/GroupInvitePage/GroupInvitePage'

import Icon from '../Icon/Icon'

const UPDATE_EVENT_MUTATION = gql`
  mutation updateEventMutation(
    $id: String!
    $name: String!
    $date: DateTime!
    $sendReminder: Boolean!
  ) {
    updateEvent(
      id: $id
      input: { name: $name, date: $date, sendReminder: $sendReminder }
    ) {
      updatedAt
    }
  }
`

const EditEvent = ({
  data,
}: {
  data: { id: number; name: string; date: string; sendReminder: boolean }
}) => {
  const formMethods = useForm()
  const [updateEvent, { loading }] = useMutation(UPDATE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event was successfully updated.')
    },
    onError: (error) => {
      console.error(error)
      toast.error(error.message)
    },
    refetchQueries: [EVENT_DETAIL_QUERY],
  })

  const onSubmit = async (formData: Record<string, string>) => {
    formMethods.clearErrors()
    updateEvent({
      variables: {
        id: data.id,
        name: formData.name,
        date: formData.date,
        sendReminder: Boolean(formData.sendReminder),
      },
    })
  }

  return (
    <Form onSubmit={onSubmit} formMethods={formMethods}>
      <h2 className="mb-1.5 font-condensed text-7xl font-normal uppercase leading-[0.8] text-white lg:text-[116px]">
        Event details
      </h2>
      <h4 className="mb-3 font-handwriting text-xl font-bold uppercase text-white lg:text-3xl">
        Edit the current event
      </h4>
      <div className="relative mb-4">
        <Label name="name" errorClassName="error">
          Event Name
        </Label>
        <InputField
          name="name"
          errorClassName="error"
          type="text"
          placeholder=""
          validation={{
            required: {
              value: true,
              message: 'Event name is required',
            },
          }}
          defaultValue={data.name}
        />
        <FieldError name="name" className="error-message" />
      </div>
      <div className="relative mb-4">
        <Label name="date" errorClassName="error">
          Event Date
        </Label>
        <DateField
          name="date"
          errorClassName="error"
          placeholder=""
          validation={{
            required: {
              value: true,
              message: 'Event date is required',
            },
          }}
          defaultValue={formatDateFromDB(data.date)}
        />
        <FieldError name="date" className="error-message" />
      </div>
      <div className="relative mb-6 text-white">
        <Checkbox
          id="sendReminder"
          label="Send out a reminder before event"
          name="sendReminder"
          defaultChecked={data.sendReminder}
        />
      </div>

      <Submit className="mb-14" disabled={loading}>
        Update
      </Submit>
      <button className="mx-auto flex items-center gap-2 bg-transparent px-4 py-2 text-2xl font-normal text-black underline transition-colors hover:bg-orangeRed hover:text-white">
        <Icon id="trash" />
        Delete the Event
      </button>
    </Form>
  )
}

export default EditEvent
