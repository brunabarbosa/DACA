import React, { Component } from 'react';
import  {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {loginUser} from '../../actions/authActions';


class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }

        
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        
        const user = {email: this.state.email, password: this.state.password};

        console.log(user);

        this.props.loginUser(user, this.props.history);

    }

    render() {
        
        const {errors} = this.state;

        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Sign in to your account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.email
                                        })}
                                        placeholder="Email Address" 
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange} 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.password
                                        })}
                                        placeholder="Password" 
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}  
                                    />
                                </div>
                                <input 
                                    type="submit" 
                                    className="btn btn-info btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(mapStateToProps, {loginUser})(withRouter(Login));