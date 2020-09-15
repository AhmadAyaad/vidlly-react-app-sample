import React, { Component } from 'react';

class Login extends Component {

    handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
    }
    
    render() {
        return (

            <div className='row'>
                <div className="col-12">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="userName">UserName</label>
                            <input type="text"
                                className="form-control"
                                id="userName" placeholder="Enter user name"></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                className="form-control"
                                id="password" placeholder="Enter user password"></input>
                        </div>



                        <button type="submit" className="btn btn-primary">Login</button>


                    </form>
                </div>
            </div>

        );
    }
}

export default Login;


