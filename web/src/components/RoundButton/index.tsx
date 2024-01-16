import Icon from '../Icon/Icon'

const RoundButton = ({
  status,
}: {
  status: 'success' | 'warning' | 'error'
}) => {
  return (
    <button
      className={`center h-16 w-16 rounded-full border-2 border-white status-${status}`}
    >
      <Icon id="plus" />
    </button>
  )
}

export default RoundButton
