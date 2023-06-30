const Title = ({children, ...props}) => {

  return (
    <h2 className={`text-black font-bold text-[2rem] my-[.5rem] ${props?.right && 'text-right'}`}>{children}</h2>
  )
}

export default Title