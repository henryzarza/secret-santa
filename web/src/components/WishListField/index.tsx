import RoundButton from '../RoundButton'
import type { RoundButtonProps } from '../RoundButton'

interface WishListFieldProps {
  name: string
  number: number
  roundButton: RoundButtonProps
}

const WishListField = ({ name, number, roundButton }: WishListFieldProps) => {
  return (
    <div className="flex items-start gap-5">
      <div className="flex flex-col gap-x-5 gap-y-2 w-full">
        <div className="flex items-center bg-white">
          <div>
            <label htmlFor={name} className="pl-8 pr-5 text-3xl">
              {number}
            </label>
          </div>
          <input
            type="text"
            id={name}
            name={name}
            className="font-bold outline-none"
          />
        </div>
        <div className="flex items-start gap-2 md:pl-8">
          <img src="/images/l-bracket.svg" alt="bracket" />
          <div className="flex flex-1 items-center bg-white">
            <div className="px-6">
              <label htmlFor={`${name}-url`}>URL</label>
            </div>
            <input
              type="url"
              name={`${name}-url`}
              id="url"
              className="short flex-1"
            />
          </div>
        </div>
      </div>
      <RoundButton {...roundButton} />
    </div>
  )
}

export default WishListField
