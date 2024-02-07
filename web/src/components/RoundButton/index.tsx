import Icon from '../Icon/Icon'

export interface RoundButtonProps {
  status: 'success' | 'warning' | 'error'
  type?: 'submit' | 'reset' | 'button'
  icon?: string
}

const ICON = {
  success: 'plus',
  warning: 'edit',
  error: 'close'
}

const RoundButton = ({ status, icon, type }: RoundButtonProps) => {
  return (
    <button
      className={`round-button center min-h-16 min-w-16 rounded-full border-2 border-white status-${status} transition-transform hover:scale-105 hover:opacity-90 disabled:cursor-not-allowed`}
      type={type || 'button'}
    >
      <Icon id={icon || ICON[status]} />
    </button>
  )
}

export default RoundButton
