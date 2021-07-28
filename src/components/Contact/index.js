import React from 'react';
import { validateEmail } from '../../utils/helpers';

function Form() {
    return (
        <section className='contact-form'>
        <h1 className="contact-h1">Contact me</h1>
        <form className="contact-form-info">
            <div>
                <input type="text" placeholder="Your name" />
            </div>
            <div>
                <input type="email" placeholder="Your email" />
            </div>
            <div className="message-holder">
                <textarea className="message" name="message" placeholder="  Your message  " rows="7" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
    )
}

export default Form;