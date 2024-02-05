import { DateField, FieldError, Form, InputField, Label, Submit } from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'
import HeaderWithRulers from 'src/components/HeaderWithRulers'
import Checkbox from 'src/components/Checkbox'

const NewEventPage = () => {
  const onSubmit = async (data: Record<string, string>) => {
    console.log({ data })
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

        <Submit>Submit</Submit>
      </Form>
    </>
  )
}

export default NewEventPage
