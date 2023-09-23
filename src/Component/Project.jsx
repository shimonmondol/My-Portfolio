import Header from './Header';
import Emajohn from '../Images/Emajohn.jpg';
import Fruits from '../Images/Fruits.jpg';
import Phone from '../Images/Phone.jpg';
import Car from '../Images/Car.jpg';
import Camera from '../Images/Camera.jpg';
import Budget from '../Images/Budget.jpg';

const Projects = () => {
  return (
        <div className="bg-purple-950">
            <Header></Header>
            <h1 className='text-center text-4xl font-semibold pb-9 pt-9 text-green-500'>Projects</h1>
            <div className="grid gap-1 grid-cols-1 md:grid-cols-2 
                            lg:grid-cols-3 pl-16 pb-16">
                <div className="card card-compact text-white justify-end grid gap-2 w-80 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={Emajohn} alt=''/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title pl-6 text-2xl">Emajohn Shopping</h2>
                        <p className="pl-6 text-xl">Ecommerce Site of Shoes</p>
                        <div className="card-actions justify-center">
                            <a className="btn btn-primary" href="https://magenta-melba-f01437.netlify.app/">LiveSite-Link</a>
                            <a className="btn btn-success" href="https://github.com/shimonmondol/Ema-John-Shopping">Github-Link</a>
                        </div>
                    </div>                   
                </div>
                <div className="card card-compact text-white justify-end grid gap-2 w-80 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={Fruits} alt=''/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title pl-6 text-2xl">Fruits Market</h2>
                        <p className="pl-6 text-xl">Best Fruits Buying Site</p>
                        <div className="card-actions justify-center">
                            <a className="btn btn-primary" href="https://clever-duckanoo-41cf72.netlify.app/">LiveSite-Link</a>
                            <a className="btn btn-success" href="https://github.com/shimonmondol/Fruits-Market">Github-Link</a>
                        </div>
                    </div>                   
                </div>
                <div className="card card-compact text-white justify-end grid gap-2 w-80 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={Phone} alt=''/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title pl-6 text-2xl">Phone Finder</h2>
                        <p className="pl-6 text-xl">Search Your Phone</p>
                        <div className="card-actions justify-center">
                            <a className="btn btn-primary" href="https://splendorous-stroopwafel-a5fd6b.netlify.app/">LiveSite-Link</a>
                            <a className="btn btn-success" href="https://github.com/shimonmondol/Phone-Hunter">Github-Link</a>
                        </div>
                    </div>                   
                </div>
            </div>
            <div className="grid gap-1 grid-cols-1 md:grid-cols-2 
                            lg:grid-cols-3 pl-16 pb-16">
                <div className="card card-compact text-white justify-end grid gap-2 w-80 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={Car} alt=''/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title pl-6 text-2xl">Car Medic</h2>
                        <p className="pl-6 text-xl">Repair Your Car</p>
                        <div className="card-actions justify-center">
                            <a className="btn btn-primary" href="https://sparkly-sunburst-30fa80.netlify.app/">LiveSite-Link</a>
                            <a className="btn btn-success" href="https://github.com/shimonmondol/Car-Medic">Github-Link</a>
                        </div>
                    </div>                   
                </div>
                <div className="card card-compact text-white justify-end grid gap-2 w-80 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={Camera} alt=''/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title pl-6 text-2xl">Lighting Camera</h2>
                        <p className="pl-6 text-xl">Choose Your Camera</p>
                        <div className="card-actions justify-center">
                            <a className="btn btn-primary" href="https://elated-williams-30a045.netlify.app/">LiveSite-Link</a>
                            <a className="btn btn-success" href="https://github.com/shimonmondol/-influence-gear">Github-Link</a>
                        </div>
                    </div>                   
                </div>
                <div className="card card-compact text-white justify-end grid gap-2 w-80 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={Budget} alt=''/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title pl-6 text-2xl">Budget Calculation</h2>
                        <p className="pl-6 text-xl">Calculate Your Budget</p>
                        <div className="card-actions justify-center">
                            <a className="btn btn-primary" href="https://hungry-ride-520372.netlify.app/">LiveSite-Link</a>
                            <a className="btn btn-success" href="https://github.com/shimonmondol/money-master">Github-Link</a>
                        </div>
                    </div>                   
                </div>
            </div>        
        </div>
  );
};

export default Projects;
