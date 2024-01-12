import Footer from 'src/components/Footer'
import MyAccount from 'src/components/MyAccount'
import Nav from 'src/components/Nav'

type InteriorLayoutProps = {
  children?: React.ReactNode
}

const InteriorLayout = ({ children }: InteriorLayoutProps) => {
  return (
    <>
      <main className="grid min-h-screen grid-cols-12 gap-x-5 bg-silverTree dark:bg-nileBlue">
        <aside className="col-span-4 pb-10">
          <div className="fixed z-20">
            <Nav />
          </div>
          <img src="/images/bg__interior.svg" alt="Holiday Illustration" />
          <a href="/">
            <img
              src="/images/logo__secret-santa.svg"
              alt="Secret Santa"
              className="absolute top-[7vw] z-10 w-[25vw]"
            />
          </a>
        </aside>
        <div className="col-span-8 pr-12 pt-7">
          <div className="flex justify-end">
            <MyAccount />
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default InteriorLayout
