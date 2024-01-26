import Icon from '../Icon/Icon'

const SlideOut = ({
  children,
  isOpen,
  toggleOpen
}: {
  isOpen: boolean;
  children: React.ReactNode;
  toggleOpen: () => void
}) => {
  return (
    <>
      {isOpen && <div className="fixed z-20 inset-0 h-screen w-screen bg-black bg-opacity-85" />}
      <div className={`fixed z-20 bottom-0 right-0 top-0 h-screen w-1/2 overflow-y-scroll bg-spanishGreen px-[140px] py-[100px] dark:bg-blackPearl transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-[120%]'}`}>
        <button
          className="fixed right-6 top-6 dark:text-white hover:text-supernova"
          onClick={toggleOpen}
        >
          <Icon id="close" size={64} />
        </button>
        {children}
      </div>
    </>
  )
}

export default SlideOut
