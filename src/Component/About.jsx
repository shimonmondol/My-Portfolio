import img2 from '../Images/img2.png';
import Header from './Header';
const About = () => {
    return (
        <div className="bg-blue-950">
            <Header></Header>
            <div>
                <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='pr-20'>
                        <h1 className="pt-4 pb-10 text-violet-500 font-bold text-5xl">About Me</h1>
                        <p className="py-6 text-2xl text-teal-500 leading-relaxed text-justify">I have dedicated myself to becoming a skilled React.js developer. One of the aspects of React.js that I find most captivating is its component-based architecture. I have experience in designing and building reusable components, ensuring clean and efficient code that can adapt to changing project requirements.</p>
                    </div>
                    <img className='w-1/2 pl-8 rounded-full' src={img2} alt=''/>
                </div>
            </div>
            </div>
            
        </div>
        
    );
};

export default About;