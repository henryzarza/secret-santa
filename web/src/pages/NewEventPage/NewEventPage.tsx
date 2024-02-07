import { DateField, FieldError, Form, InputField, Label, Submit } from '@redwoodjs/forms'
import { Metadata, useMutation } from '@redwoodjs/web'
import HeaderWithRulers from 'src/components/HeaderWithRulers'
import Checkbox from 'src/components/Checkbox'
import { toast } from '@redwoodjs/web/dist/toast'
import { navigate, routes } from '@redwoodjs/router'

const CREATE_EVENT_MUTATION = gql`
  mutation createEventMutation($name: String!, $date: DateTime!, $sendReminder: Boolean!) {
    createEvent(
      input: {name: $name, date: $date, sendReminder: $sendReminder}
    ) {
      id
      createdAt
      date
      name
    }
  }
`

const NewEventPage = () => {
  const [createEvent, { loading }] = useMutation(CREATE_EVENT_MUTATION, {
    onCompleted: (data) => {
      toast.success('Event was successfully created.')
      navigate(routes.groupInvite({ id: data.id }))
    },
    onError: (error) => {
      console.error(error)
      toast.error(error.message)
    }
  })

  const onSubmit = async (data: Record<string, string>) => {
    createEvent({
      variables: {
        name: data.eventName,
        date: data.eventDate,
        sendReminder: Boolean(data.reminder)
      }
    })
  }

  return (
    <>
      <Metadata title="Create Event" />

      <HeaderWithRulers className="mb-8 text-white" heading="SET UP YOUR EVENT" />
      <Form onSubmit={onSubmit} className="mb-10">
        <div className="relative mb-4">
          <Label name="eventName" errorClassName="error">
            Event Name
          </Label>
          <InputField
            name="eventName"
            errorClassName="error"
            type="text"
            placeholder=""
            validation={{
              required: {
                value: true,
                message: 'Event name is required',
              },
            }}
          />
          <FieldError name="eventName" className="error-message" />
        </div>
        <div className="relative mb-4">
          <Label name="eventDate" errorClassName="error">
            Event Date
          </Label>
          <DateField
            name="eventDate"
            errorClassName="error"
            placeholder=""
            validation={{
              required: {
                value: true,
                message: 'Event date is required',
              },
            }}
          />
          <FieldError name="eventDate" className="error-message" />
        </div>
        <div className="relative mb-4">
         <Checkbox id="reminder" label="Send out a reminder before event" name="reminder" />
        </div>

        <Submit disabled={loading}>Submit</Submit>
      </Form>
    </>
  )
}

export default NewEventPage
