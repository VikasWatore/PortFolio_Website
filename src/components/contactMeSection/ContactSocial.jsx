import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial Link='https://github.com/VikasWatore'  Icon={FiGithub}/>
        <SingleContactSocial Link='https://www.linkedin.com/in/vikas-watore-aa3336299' Icon={FaLinkedinIn}/>
        <SingleContactSocial Link='#' Icon={FaInstagram}/>

    </div>
  )
}

export default ContactSocial