import React from 'react';

const Testimonial = () => {
    return (
        <div className='m-4'>
            <div className='text-center'>
                <p className='p-0 m-0'><small>Testimonial</small></p>
                <h4 className='text-info mb-4'>What our clients say about us.</h4>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i.ibb.co/YWH2nwY/images-1.jpg" className="card-img-top w-25 rounded-circle mx-auto m-2" alt="..." />
                        <div className="card-body">
                            <h5 className="text-center">Kevin William</h5>
                            <p className="card-text">With Thrive help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website! Thanks Thrive!</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i.ibb.co/P56Y52X/unnamed.webp" className="card-img-top w-25 mx-auto m-2" alt="..." />
                        <div className="card-body">
                            <h5 className="text-center">Ema Stone</h5>
                            <p className="card-text">Thrive Internet Marketing excels at turning your website dreams into reality. We are so proud of the work they have done for us that we have already recommended them to many of our partners. The Thrive team is heads and shoulders above their competition, and we are very thankful that they call Downtown Arlington home.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i.ibb.co/Bn6nZmB/photo-1633332755192-727a05c4013d.jpg" className="card-img-top w-25 rounded-circle mx-auto m-2" alt="..." />
                        <div className="card-body">
                            <h5 className="text-center">Jom Holland</h5>
                            <p className="card-text">We re-did our website twice in a 12 month period. There was no comparison between the first company and Thrive. Professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with Thrive the first time I would not have had to do it twice.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;