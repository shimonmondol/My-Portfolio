import Header from './Header';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
    return (
        <div className="bg-slate-800">
            <Header></Header>
            <h1 className='text-center text-4xl font-semibold pb-9 pt-6 text-red-500'>Contact</h1>
            <div className="hero min-h-screen pb-36">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-500">
                    <div className="card-body">
                        <div className="form-control">
                            <div className="mb-5">
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="mb-5">
                                <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />                   
                            </div>
                            <div className="mb-5">
                                <input type="text" placeholder="Your Phone Number" className="input input-bordered w-full max-w-xs" />
                            </div>                                   <div className="form-control mb-5">
                                <textarea className="textarea textarea-bordered h-24" placeholder="Your Meassage"></textarea>                         
                            </div>
                        </div>                       
                        <div className="form-control mb-5">
                            <button className="btn btn-primary">Send</button>
                        </div>
                        <h1 className="text-2xl text-center ps-2 pb-2">Connect With Social Media</h1>
                        <div className="flex">
                            <a className="text-4xl pl-12 pt-1 text-blue-600" href="https://www.facebook.com/"><FaFacebook/></a>
                            <a className="text-4xl pl-6 pt-1 text-rose-400" href="https://www.instagram.com/"><FaInstagram/></a>
                            <a className="text-5xl pl-6 text-gray-400" href="https://mail.google.com/"><CgMail/></a>
                            <a className="text-4xl pl-6 pt-1 text-blue-600" href="https://www.linkedin.com/"><BsLinkedin/></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>          
    );
};

export default Contact;