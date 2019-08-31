import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'

import './styles.css';

export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        avatarUrl: ''    
      };

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = async(e) => {
        e.preventDefault();
        console.log(this.state);

        await api.post('contacts', this.state, { headers: {"Authorization" : 'testing'} })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });

    }

    render(){
        const { name, email } = this.state;

        return (
            <div>
            <div className="back-home">
                <Link to={'/'}>Voltar</Link>
            </div>
            <div className="new-contact">
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder="Digite seu nome" value={name} onChange={this.changeHandler}/><br/><br/>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" placeholder="Digite seu email" value={email} onChange={this.changeHandler}/><br/><br/>
                    <button className="register-user" type="submit">Enviar</button>
                </form>
            </div>
            </div>
        )
    }
}