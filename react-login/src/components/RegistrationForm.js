import React, {useState} from 'react';

function RegistrationForm() {

    const [details, setDetails] = useState({email: "", username: "", password: "", firstName: "", lastName: "", phone: ""});

    const Registration = details => {

        console.log("Registration details: ", details);

    fetch("http://localhost:8080/api/v1/user",
    {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    })
    .then(response => {
        console.log(response);
        if(response.ok)
        {

        }
    }) 
  }

    const submitHandler = e => {
        e.preventDefault();
        Registration(details);
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Register</h2>

                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" autoComplete="off" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>

                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" autoComplete="off" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>

                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" id="firstName" autoComplete="off" onChange={e => setDetails({...details, firstName: e.target.value})} value={details.firstName} />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" id="lastName" autoComplete="off" onChange={e => setDetails({...details, lastName: e.target.value})} value={details.lastName} />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number: </label>
                    <input type="text" name="phone" id="phone" autoComplete="off" onChange={e => setDetails({...details, phone: e.target.value})} value={details.phone} />
                </div>
                <input type="submit" value="REGISTER"/>

            </div>
        </form>
    )
}

export default RegistrationForm;