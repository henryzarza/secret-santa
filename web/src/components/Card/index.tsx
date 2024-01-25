import Avatar, { AvatarProps } from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

const Card = ({
  avatar,
  isCloseShowing,
  name,
  email
} : {
  avatar: AvatarProps;
  isCloseShowing: boolean;
  name: string;
  email: string;
}) => {
  return (
    <div className="relative ml-5 w-[calc(100%-20px)] bg-white py-6 pl-[72px] pr-5">
      {isCloseShowing && (
        <button className="absolute right-8 top-8 text-bombay">
          <Icon id="close" />
        </button>
      )}
      <div className="absolute -left-5 top-4">
        <Avatar {...avatar} />
      </div>
      <div>
        <h6 className="font-sans text-3xl font-bold tracking-tight">{name}</h6>
        <div className="tracking-tight">{email}</div>
      </div>
    </div>
  )
}

export default Card
