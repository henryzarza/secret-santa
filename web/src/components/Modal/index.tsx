import Icon from '../Icon/Icon'

interface Props {
  children: React.ReactElement
  status: 'success' | 'warning' | 'error'
  onClose?: () => void
}

const Modal = ({ children, status, onClose }: Props) => {
  return (
    <div className="center fixed inset-0 z-20 h-screen w-screen">
      <div className="fixed inset-0 h-screen w-screen bg-black bg-opacity-85" />
      {/* modal */}
      <div
        className={`relative w-full max-w-[735px] border-[6px] border-white px-20 py-12 status-${status}`}
      >
        <button className="absolute right-6 top-6" onClick={onClose}>
          <Icon id="close" size={32} />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
