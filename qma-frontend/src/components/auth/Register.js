import React, { Component } from 'react'
import axios from 'axios';
import classnames from 'classnames';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            hasError: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        console.log({email: this.state.email, password: this.state.password});

        axios.post('/users', {email: this.state.email, password: this.state.password})
            .then((res) => {
                this.setState({ hasError: false });
                 console.log(res);
            })
            .catch(err => this.setState({ hasError: true }));
            
    }

    render() {
        
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your DevConnector account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text"
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': (this.state.hasError && !this.state.name)   
                                        })} 
                                        placeholder="Name" 
                                        name="name" 
                                        value={this.state.name}
                                        onChange={this.onChange}
                                    />
                                    {!this.state.name && (<div className="invalid-feedback">Name is empty</div>)}
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="email"
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': (this.state.hasError && !this.state.email)  
                                        })}
                                        placeholder="Email Address"
                                        value={this.state.email}
                                        onChange={this.onChange} 
                                        name="email" 
                                    />
                                    {!this.state.email && (<div className="invalid-feedback">Email is empty</div>)}
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': (this.state.hasError && !this.state.password)   
                                        })}
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.onChange}  
                                        name="password" 
                                    />
                                    {!this.state.password && (<div className="invalid-feedback">Password is empty</div>)}
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;