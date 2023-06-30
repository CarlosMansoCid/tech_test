import Link from "next/link"
import { FaLinkedin, FaTelegramPlane, FaTwitterSquare, FaWhatsapp} from "react-icons/fa"

const SocialLinks = () => {
  return (
    <div className="w-[100%] flex items-center">
        <Link href='#' className="mr-2 text-[2rem]" target="_blank"><FaWhatsapp/></Link>
        <Link href='#' className="mr-2 text-[2rem]" target="_blank"><FaTwitterSquare/></Link>
        <Link href='#' className="mr-2 text-[2rem]" target="_blank"><FaTelegramPlane/></Link>
        <Link href='#' className="mr-2 text-[2rem]" target="_blank"><FaLinkedin/></Link>
    </div>
  )
}

export default SocialLinks