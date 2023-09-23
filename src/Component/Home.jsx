import img1 from '../Images/img1.png';
import Header from './Header';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="hero min-h-screen bg-emerald-950">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-1/2 pr-8 rounded-full' src={img1} alt=''/>
                    <div className='pl-20'>
                        <h1 className="leading-snug text-6xl font-bold text-orange-500">Hello, I am Shimon Kumar Mondol</h1>
                        <p className="text-4xl py-6 text-green-500">I am a MERN Stack Web Developer</p>
                        <a className="btn btn-primary" href="https://drive.google.com/file/d/1noKtcBrbCol5zWlSXJ6D_2_AMlaxzbwB/view?usp=sharing">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Home;