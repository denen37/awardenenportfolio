import { images } from "../../assets/images";
import { AiFillLinkedin, AiFillFacebook, AiOutlineX} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="pt-5">
      <div className="footer-inner flex flex-wrap justify-between border-b border-accent">
        <div>
            <img 
                src={images.logo} 
                alt="Logo"
                className="w-20 h-20 object-contain" 
                />
        </div>
        <div className="flex flex-col md:flex-row gap-5 text-text-secondary">
            <div className="flex flex-col gap-1 py-4 px-5 sm:px-10 border-b md:border-b-0 md:border-r border-accent">
                <p className="text-xs">Web Developer</p>
                <p className="text-xs">Robotics Engineer</p>
            </div>
            <div className="flex flex-col gap-1 py-4 px-5 sm:px-10 border-b md:border-b-0 md:border-r border-accent">
                <a href="" className="text-xs">Home</a>
                <a href="" className="text-xs">Services</a>
                <a href="" className="text-xs">About</a>
                <a href="" className="text-xs">Projects</a>
                <a href="" className="text-xs">Skills</a>
            </div>
            <div className="py-4 px-5 sm:px-10">
                <p className="text-xs">Social media handles</p>
                <div className="flex gap-2 mt-1">
                    <a href="">
                        <AiFillLinkedin className="size-4"/>
                    </a>
                    <a href="">
                        <AiFillFacebook className="size-4"/>
                    </a>
                    <a href="">
                        <AiOutlineX className="size-4"/>
                    </a>
                </div>
            </div>
        </div>
      </div>
      <div className="py-4">
        <p className="text-center text-xs">Developed and Designed by <span className="text-accent">Awar Abraham</span></p>
      </div>
    </footer>
  );
};

export default Footer;