import React, { useEffect } from 'react';
import '../ComponentGlobal.css'
import contactUsBanner from '../../images/web-development-promotion.png'
import contactIllustration from '../../images/contact.jpg'
const Contact = () => {
    useEffect(() => {
        document.title = "Tawsif Dot Dev | Contact"
    }, [])
    return (

        <>
            <div id="contact" className="mx-auto mt-28 py-8 mb-10 container">
                <h2 className=' text-5xl text-center font-bold'>Hire Me</h2>
                <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 mt-20'>
                    <div className="contact-us-banner rounded-lg">

                        <h2 className='text-3xl font-bold text-center'>Anxious to Solve Your Problem</h2>
                        <p className='text-center mt-4 text-xl'>We strive to meticulously build your website, making each detail match your vision</p>
                        <img src={contactIllustration} alt="" />

                    </div>
                    <div className="contact-form">

                        <form action="https://formspree.io/f/moqrapez"
                            method="POST">
                            <div className="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" name="Name" id="name" placeholder="First and Last" required minlength="3" maxlength="25" />
                            </div>
                            <div className="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" name="Email" id="email" placeholder="email@domain.tld" required />
                            </div>
                            <div className="form-group">
                                <label for="message">Message</label>
                                <textarea name="Message" id="message" rows="5" placeholder="Type your message here...."></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="submit"><i className="far fa-paper-plane"></i>Send</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Contact;