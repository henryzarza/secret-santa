import Footer from 'src/components/Footer'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <main className="min-h-screen w-full bg-silverTree bg-[length:1440px_auto] bg-[center_top] bg-no-repeat min-[1440px]:bg-[length:100%_auto] dark:bg-nileBlue">
        <img
          src="/images/logo__secret-santa.svg"
          alt="Secret Santa"
          className="mx-auto mb-10 w-[460px] pt-24"
        />
        <div className="mx-auto max-w-[660px]">{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default AuthLayout
