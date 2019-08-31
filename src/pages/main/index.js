import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'

import './styles.css';

export default class Main extends Component {
    state = {
        contacts: []
    }

    componentDidMount(){
        this.loadContacts();
    }

    loadContacts = async () => {
        const response = await api.get('contacts', { headers: {"Authorization" : 'testing'} });

        const { contacts } = response.data;
        this.setState({ contacts })
    }

    deleteContact = async (id) => {
        await api.delete(`contacts/${id}`, { headers: {"Authorization" : 'testing'} });

        this.loadContacts();
    }

    render() {
        const { contacts } = this.state;

        return (
            <div>
                <div className="register-contact">
                    <Link to={'/register'}>Registrar Usuário</Link>
                </div>
                <div className="contact-list">
                    {contacts.map(contact => (
                            <article key={ contact.id }>
                            <img src={ contact.avatarURL } alt={ contact.avatarURL }/>
                            <p>Name: <strong>{ contact.name }</strong></p>
                            <p>Email: <a href={ `mailto:${contact.email}` }>{ contact.email }</a></p>

                            <button className="delete-contact" onClick={ () => this.deleteContact(contact.id) }>Excluir</button>
                        </article>
                    ))}          
                </div>
            </div>
        )
    }
}