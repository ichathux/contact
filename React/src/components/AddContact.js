import React, { Component } from "react";

export default class AddContact extends Component{

    submitContact(event){
        event.preventDefault();

        let contact = {
            firstName : this.ref.firstName.value,
            lastName : this.ref.lastName.value,
            email: this.ref.email.value
        }
        fetch("https://localhost:8080/api/contacts", {
            method: "POST",
            headers: {
                "content-type": "application/json",

            },
            body: JSON.stringify(contact),
        })
        .then(response => response.json());
        window.location.reload();
    }

    render(){
        return(
            <div classNameName="row">
            <form className="col s12" onSubmit = {this.submitContact.bind(this)}>
                <div className="row">
                <div className="input-field col s6">
                    <input placeholder="Placeholder" ref="first_name" type="text" className="validate"/>
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="input-field col s6">
                    <input ref="last_name" type="text" className="validate"/>
                    <label htmlFor="lastName">Last Name</label>
                </div>
                </div>
                
                <div className="row">
                <div className="input-field col s12">
                    <input ref="email" type="email" className="validate"/>
                    <label htmlFor="email">Email</label>
                </div>
                </div>
                <div className="row">
                    <button classNameName="waves-effect waves-light btn" type= "submit" name="action">Submit</button>
                </div>
            </form>
            </div>
        )
    }
}