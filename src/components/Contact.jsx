import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Roller } from "react-awesome-spinners";

function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true); // Show loader when form is submitted
        emailjs
          .sendForm('service_fwslfer', 'template_8bmqwpu', form.current, {
            publicKey: 'HZvPMDgvYMKp7gwK4',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              form.current.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            }
          )
          .finally(() => {
            setLoading(false); // Hide loader when email is sent (success or failure)
          });
    };

    return (
        <>
            {loading && (
                <div className="spinner-overlay">
                    <Roller />
                </div>
            )}

            <div className='container m-5 pr-8'>
                <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-8 py-8'>
                    <form className='flex flex-col gap-y-3' ref={form} onSubmit={sendEmail}>
                        <input className='name border border-gray-300
                            focus:border-violet-700 outline-none rounded
                            w-full px-4 h-14 text-sm' type='text' placeholder='Name' name="from_name" />

                        <input className='email border border-gray-300
                            focus:border-violet-700 outline-none rounded
                            w-full px-4 h-14 text-sm' type='text' placeholder='Enter Your valid Email' name='email_id' />

                        <textarea name='message' className='msg border border-gray-300 focus:border-violet-700
                            outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400' placeholder='Message'
                            defaultValue='Hello, I am interested'>

                        </textarea>
                        <div className='flex gap-x-2'>
                            <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition' value="Send">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;
