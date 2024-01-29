import { Metadata } from '@redwoodjs/web'
import WishListField from 'src/components/WishListField'

const WishListPage = () => {
  return (
    <>
      <Metadata title="WishList" description="WishList page" />

      <h1 className="font-condensed text-7xl leading-[0.8] lg:text-[116px] uppercase text-white font-normal mb-2">
        Wish list
      </h1>
      <h2 className="font-handwriting font-bold text-xl lg:text-[32px] text-white uppercase mb-9">
        Make your list and check it twice
      </h2>
      <div className="flex flex-col gap-6 pb-10">
        <WishListField number={1} name="wishList-1" roundButton={{ status: "error" }} />
        <WishListField number={2} name="wishList-2" roundButton={{ status: "error" }} />
        <WishListField number={3} name="wishList-3" roundButton={{ status: "success" }} />
        <button type="submit">Submit</button>
      </div>
    </>
  )
}

export default WishListPage
