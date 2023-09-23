import Header from './Header';
const Skill = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-center text-4xl font-semibold pb-9 pt-9 text-blue-500'>Skills & Key</h1>
            <div className='grid gap-1 grid-cols-1 grid-rows-1 md:grid-cols-2 
                            lg:grid-cols-3 pl-16 pb-16'>
                <div className="card card-compact grid gap-2 w-80 shadow-2xl bg-green-950">
                    <h1 className='text-2xl items-center text-center text-green-600'>Frontend</h1>
                    <div>
                        <div className="card-body flex-row items-center">
                            <button className="btn btn-outline btn-info">React Js</button>
                            <button className="btn btn-outline btn-warning">JavaScript</button>
                            <button className="btn btn-outline btn-error">HTML</button>
                        </div>
                        <div className="card-body flex-row items-center text-center">  
                            <button className="btn btn-outline btn-success">CSS</button>
                            <button className="btn btn-outline btn-primary">Bootstrap</button>
                            <button className="btn btn-outline">Tailwind</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact grid gap-2 w-80 shadow-2xl bg-red-950">
                    <h1 className='text-2xl items-center text-center text-red-600'>Backend</h1>
                    <div>
                        <div className="card-body flex-row items-center">
                            <button className="btn btn-outline btn-primary">Node Js</button>
                            <button className="btn btn-outline">Express Js</button>
                            <button className="btn btn-outline btn-error">MySQL</button>
                        </div>
                        <div className="card-body flex-row items-center text-center">  
                            <button className="btn btn-outline btn-success">MongoDB</button>
                            <button className="btn btn-outline btn-warning">Firebase</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact grid gap-2 w-80 shadow-2xl bg-indigo-950">
                    <h1 className='text-2xl items-center text-center text-yellow-600'>Other</h1>
                    <div>
                        <div className="card-body flex-row items-center">
                            <button className="btn btn-outline btn-secondary">Git</button>
                            <button className="btn btn-outline">Github</button>
                            <button className="btn btn-outline btn-primary">Vs Code</button>
                        </div>
                        <div className="card-body flex-row items-center text-center">  
                            <button className="btn btn-outline btn-warning">Netlify</button>
                            <button className="btn btn-outline btn-error">Figma</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skill;