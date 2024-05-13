

const Register = () => {

    const handleRegister=e=>{
      e.preventDefault();
      const name=e.target.name.value;
      const email=e.target.email.value;
      const password=e.target.password.value;
        console.log(name,email,password)
    }
    return (
        <div className="border">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-full  py-2 px-4" type="text" name="name" placeholder="Your Name" id="" required />
                    <br />
                    <input className="mb-4 w-full  py-2 px-4" type="email" name="email" placeholder="Email Address" id="" required />
                    <br />
                    <input className="mb-4 w-full  py-2 px-4" type="password" name="password" placeholder="password" id="" required />
                    <input className="btn btn-secondary mb-4 w-full" type="submit" value="Register" />
                   
                </form>
            </div>
             
        </div>
    );
};

export default Register;