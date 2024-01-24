import Icon from "../Icon/Icon";

interface Props {
  status: 'success' | 'warning' | 'error'
  quantity: number
  text: string
  isActive: boolean
}

const variants: {
  [K in Props['status']]: { className: string; textColor: string }
} = {
  success: {
    className: 'bg-spanishGreen',
    textColor: 'text-spanishGreen',
  },
  warning: {
    className: 'bg-supernova',
    textColor: 'text-supernova',
  },
  error: {
    className: 'bg-orangeRed',
    textColor: 'text-orangeRed'
  },
}

const CountFilter = ({ quantity, status, text, isActive }: Props) => {
  return (
    <div className="relative w-fit">
      <button
        className={`relative border-[6px] border-white text-white font-handwriting py-8 pr-9 min-w-[250px] text-right uppercase text-3xl font-bold transition-all hover:scale-105 ${variants[status].className}`}
      >
        <span className={`text-[120px] font-script text-stroke inline-flex relative -left-5 mr-2 -mt-12 ${variants[status].textColor}`}>
          {quantity}
        </span>
        {text}
      </button>
      {isActive && (
        <button className="absolute right-3 -top-2 font-sans uppercase text-white text-sm font-bold px-4 py-1 gap-[10px] center bg-black bg-opacity-70 rounded-[50px] transition-colors hover:bg-opacity-85">
          <Icon id="close" />
          Clear filter
        </button>
      )}
    </div>
  )
}

export default CountFilter
