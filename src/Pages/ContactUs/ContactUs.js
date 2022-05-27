import React from 'react';

const ContactUs = () => {
    return (
        <div className='mx-auto bg-amber-200'>
            <p className='text-2xl text-center pt-5'>Contact Us</p>

            <div className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                    <span className="label-text">Your name?</span>

                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Your organization?</span>

                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Your Email?</span>

                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-warning my-5">Send</button>

            </div>
        </div>
    );
};

export default ContactUs;