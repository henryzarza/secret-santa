import Footer from 'src/components/Footer'
import UserDropdown from 'src/components/UserDropdown'
import Nav from 'src/components/Nav'
import { Toaster } from '@redwoodjs/web/dist/toast'

type InteriorLayoutProps = {
  children?: React.ReactNode
}

const InteriorLayout = ({ children }: InteriorLayoutProps) => {
  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <main className="grid min-h-screen grid-cols-12 gap-x-5 bg-silverTree dark:bg-nileBlue">
        <aside className="col-span-1 md:col-span-4 pb-10">
          <Nav />
          <div className="hidden md:inline-block">
            <img src="/images/bg__interior.svg" alt="Holiday Illustration" />
            <img
              src="/images/logo__secret-santa.svg"
              alt="Secret Santa"
              className="absolute top-[7vw] z-10 w-[25vw]"
            />
          </div>
        </aside>
        <div className="col-span-11 md:col-span-8 pr-12 pt-7">
          <div className="flex justify-end">
            <UserDropdown />
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default InteriorLayout
