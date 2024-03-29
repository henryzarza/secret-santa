import { Form } from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

import HeaderWithRulers from 'src/components/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword'
import Upload from 'src/components/Upload'

const AcceptPage = () => {
  return (
    <>
      <Metadata title="Accept" description="Accept page" />

      <h3 className="m-0 p-0 text-center font-handwriting text-3xl uppercase leading-none text-white">
        Awesome
      </h3>
      <HeaderWithRulers className="text-white" heading="Sign Up" />

      <Form className="relative mx-auto w-full max-w-[660px]">
        <div className="mb-4">
          <ShowHidePassword label="Password" name="Password" />
        </div>
        <div className="mb-4">
          <Upload />
        </div>
        <div className="mb-4">
          <button type="submit">Submit</button>
        </div>
      </Form>
    </>
  )
}

export default AcceptPage
