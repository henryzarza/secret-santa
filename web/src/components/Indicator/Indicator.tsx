import Icon from '../Icon/Icon'

interface IndicatorProps {
  status: 'success' | 'warning' | 'error'
}

const variants: {
  [K in IndicatorProps['status']]: { className: string; icon: string }
} = {
  success: {
    className:
      'rounded-full center h-6 w-6 border-2 border-white bg-spanishGreen text-white',
    icon: 'check',
  },
  warning: {
    className:
      'rounded-full center h-6 w-6 border-2 border-white bg-supernova text-black',
    icon: 'question',
  },
  error: {
    className:
      'rounded-full center h-6 w-6 border-2 border-white bg-orangeRed text-white',
    icon: 'minus',
  },
}

const Indicator = ({ status }: IndicatorProps) => {
  return (
    <div className={variants[status].className}>
      <Icon id={variants[status].icon} size={16} />
    </div>
  )
}

export default Indicator
