import Icon from '../Icon/Icon'

export interface RoundButtonProps {
  status: 'success' | 'warning' | 'error'
}

const RoundButton = ({ status }: RoundButtonProps) => {
  return (
    <button
      className={`center min-h-16 min-w-16 rounded-full border-2 border-white status-${status} transition-transform hover:scale-105 hover:opacity-90`}
    >
      <Icon id="plus" />
    </button>
  )
}

export default RoundButton
