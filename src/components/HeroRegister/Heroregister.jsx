 

const Heroregister = () => {
    const handleHeroRegister =e=>{
        e.preventDefault();
        
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(name,email,password)

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            
        <div className="hero-content w-3/4 border flex-col ">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Hero Register</h1>
            
          </div>
          <div className="card shrink-0 w-4/5 max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleHeroRegister}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" placeholder="Your Name" className="input input-bordered" name="name" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
           
          </div>
          
        </div>
      </div>
    );
};

export default Heroregister;