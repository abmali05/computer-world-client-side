import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';

const Review = () => {

    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://nameless-reef-39581.herokuapp.com/reviews', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => res.json()));
    refetch();

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            <p className='mt-20 text-4xl text-center'>What our customer say!</p>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5 mb-20'>


                {
                    reviews.slice(0, 4).map(review =>
                        <>
                            <div key={review._id} className="card shadow-xl text-zinc-500 border-2 border-sky-500">
                                <div className="card-body">
                                    <h2 className="card-title ">{review.desc}</h2>
                                    <h2 className="card-title text-amber-500">Rating: {review.rating}</h2>

                                    <p><i>By {review.name}</i></p>

                                </div>
                            </div>

                        </>
                    )
                }
            </div >
        </>
    );
};

export default Review;