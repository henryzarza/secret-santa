const WishListItem = ({
  heading,
  number,
  url,
  siteDescription,
  siteImage,
}) => {
  return (
    <div className="mb-6 flex w-full gap-4 border-b-[3px] border-b-silverTree pb-6 text-white">
      <h4 className="font-handwriting text-3xl">{number}</h4>
      <div>
        <div className="mb-4 flex flex-1 items-center justify-between">
          <h3 className="flex-1 font-sans text-3xl font-bold">{heading}</h3>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="button small center !inline-flex rounded-full bg-countyGreen leading-none text-white hover:bg-supernova hover:text-black"
          >
            Details
          </a>
        </div>
        <div className="flex border border-b-silverTree">
          <p className="flex-1 p-3 text-sm">{siteDescription}</p>
          <img
            src={siteImage}
            alt={heading}
            className="w-56 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default WishListItem
