import Header from './Header';
const Skill = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-center text-4xl font-semibold pb-9 pt-9 text-blue-500'>Skills & Key</h1>
            <div className='grid gap-1 grid-cols-1 md:grid-cols-2 
                            lg:grid-cols-3 pl-16 pb-16'>
                <div className="card card-compact grid gap-2 w-80 shadow-2xl">
                    <h1 className='text-xl items-center text-center text-green-600'>Frontend</h1>
                    <div className="card-body items-center text-center">
                        <button className="btn btn-outline btn-info">React Js</button>
                        <button className="btn btn-outline btn-warning">JavaScript</button>
                        <button className="btn btn-outline btn-error">HTML</button>
                        <button className="btn btn-outline btn-accent">CSS</button>
                        <button className="btn btn-outline btn-primary">Bootstrap</button>
                        <button className="btn btn-outline btn-success">Tailwind</button>
                    </div>
                </div>
                <div className="card card-compact grid gap-2 w-80 shadow-2xl">
                    <h1 className='text-xl items-center text-center text-red-600'>Backend</h1>
                    <div className="card-body items-center text-center">
                        <button className="btn btn-outline btn-primary">Node Js</button>
                        <button className="btn btn-outline btn-accent">Express Js</button>
                        <button className="btn btn-outline btn-success">MongoDB</button>
                        <button className="btn btn-outline btn-warning">Firebase</button>
                        <button className="btn btn-outline btn-error">MySQl</button>
                    </div>
                </div>
                <div className="card card-compact grid gap-2 w-80 shadow-2xl">
                    <h1 className='text-xl items-center text-center text-yellow-600'>Other</h1>
                    <div className="card-body items-center text-center">
                        <button className="btn btn-outline btn-primary">Git</button>
                        <button className="btn btn-outline btn-accent">Github</button>
                        <button className="btn btn-outline btn-success">Vs Code</button>
                        <button className="btn btn-outline btn-warning">Netlify</button>
                        <button className="btn btn-outline btn-error">Figma</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skill;