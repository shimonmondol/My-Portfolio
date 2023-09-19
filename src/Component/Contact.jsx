import Header from './Header';
const Contact = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-center text-4xl font-semibold pb-9 pt-6 text-red-500'>Contact</h1>
            <div className="hero min-h-screen pb-36">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>          
    );
};

export default Contact;