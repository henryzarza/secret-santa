import { Metadata } from '@redwoodjs/web'

import HeaderWithRulers from 'src/components/HeaderWithRulers'

const DeclinePage = () => {
  return (
    <>
      <Metadata title="Decline" description="Decline page" />

      <HeaderWithRulers className="text-white" heading="Thanks" />
      <h1 className="page-title">You&apos;ll be Missed</h1>
    </>
  )
}

export default DeclinePage
