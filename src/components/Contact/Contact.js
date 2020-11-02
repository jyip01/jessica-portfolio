import React, {Component} from 'react';

export default class Contact extends Component {

    //open up mail app with new message using form values
    sendMail = ev =>{
        ev.preventDefault()

        const {name, message} = ev.target
        let nameVal= name.value
        let messageVal = message.value

        window.location.href = `mailto:jessica.f.yip@gmail.com?subject=Message From ${nameVal}&body=${messageVal}`

        //reset form
        name.value=''
        message.value=''

    }

    render(){
        return (
            <section className="contact">
                <h2>Let's Talk</h2>
                <form className="contact-form" name="contact-form" onSubmit={this.sendMail}>
                    <label htmlFor="name">Name * </label>
                    <input type="text" id="name" name="name" placeholder="Your Name..." className="form-element" required="required"/>
                    <label htmlFor="message">Message *</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message..." className="form-element" required="required"></textarea>
                    <input type="submit" className="contact-form-submit" value="Submit"/>
                </form>
            </section>
        )
    }
}
