import Link from "next/link"
import { FaGithub } from "react-icons/fa"

const GithubLink = () => {
  return (
    <Link href='https://github.com/CarlosMansoCid/tech_test' className="text-[2rem]" target="_blank"><FaGithub/></Link>
  ) 
}

export default GithubLink