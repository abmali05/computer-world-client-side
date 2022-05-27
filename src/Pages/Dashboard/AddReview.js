import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {

    const [user] = useAuthState(auth);

    const reviewSubmit = event => {
        event.preventDefault();

        const review = {

            name: user.displayName,
            desc: event.target.desc.value,
            rating: event.target.rating.value,
        }

        fetch('https://nameless-reef-39581.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review),

        })
            .then(res => res.json())
            .then(data => data)
        event.target.reset();
        toast('Review Added Successfully');

    }



    return (
        <div className='mx-auto w-96 mt-10'>
            <form onSubmit={reviewSubmit} className=" mx-auto">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your review</span>
                    </label>
                    <input name='desc' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />

                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input name='rating' min="0" max="5" type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />

                    <button className="btn btn-xs mt-5 sm:btn-sm md:btn-md lg:btn-lg">Add Review</button>
                </div>
            </form>

        </div>
    );
};

export default AddReview;