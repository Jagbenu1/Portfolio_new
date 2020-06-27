import React, { Component } from 'react';
import Layout from '../../hoc/Layout/Layout';
import classes from './Contact.module.css';
import Social from '../../components/Social/Social';

class Contact extends Component {
    render(){
        return (
            <Layout>
                <div className={classes.Contact}>
                    <h1>Contact me</h1>
                    <h3>Email: jacqueskagbenu@gmail.com</h3>
                    <h3>Phone: 678-343-1252</h3>
                    <h5>If i dont answer your call, please leave a voice mail or send me a text.</h5>
                    <Social />
                </div>
            </Layout>
            
        );
    };
};

export default Contact;