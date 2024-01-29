import { FieldError, Form, Label, Submit, TextAreaField } from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'
import Card from 'src/components/Card'

const ThankYouPage = () => {
  const onSubmit = async (data: Record<string, string>) => {
    console.log('Send data 📩', data)
  }

  return (
    <>
      <Metadata title="Thank You" description="Thank you page" />

      <h1 className="font-condensed flex-1 text-7xl leading-[0.8] lg:text-[116px] uppercase text-white font-normal mb-5">
        Thank you
      </h1>
      <div className="center gap-4 mb-4">
        <h6 className="font-handwriting text-3xl text-white font-bold uppercase leading-tight">
          To
        </h6>
        <Card
          avatar={{
            avatar: "/images/placeholder__avatar-01.png",
            alt: "Cameron Williamson"
          }}
          name="Cameron Williamson"
          email="cameron.wiliamson@example.com"
        />
      </div>

      <Form onSubmit={onSubmit} className="mb-10">
        <div className="relative mb-4">
          <Label name="message" errorClassName="error">
            Message
          </Label>
          <TextAreaField
            name="message"
            errorClassName="error"
            placeholder=""
            validation={{
              required: {
                value: true,
                message: 'Message is required',
              },
            }}
          />
          <FieldError name="message" className="error-message" />
        </div>
        <Submit>Send</Submit>
      </Form>
    </>
  )
}

export default ThankYouPage
