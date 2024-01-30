const Loader = ({ customClasses = "w-12 h-12 border-b-white" } : { customClasses?: string }) => {
  return (
    <div className={`animate-spin rounded-full inline-block border-8 border-bombay ${customClasses}`} />
  )
}

export default Loader
