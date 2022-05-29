import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { FaAddressBook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-light text-muted">
                <section className="pt-2">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold text-info mb-4">
                                    <i className="me-3"></i>Modern & Minimal
                                </h6>
                                <p>
                                    Quality formal and casual products for every occasion.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Formal</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Casual</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Office</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Kids</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">About</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Contacts</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase mb-4">
                                    Contact
                                </h6>
                                <p><FaAddressBook></FaAddressBook> Harbin, HR 87452, Bangladesh</p>
                                <p>

                                    <AiOutlineMail></AiOutlineMail> mnm@gmail.com
                                </p>
                                <p><AiFillPhone></AiFillPhone> +88 234 567 88</p>
                                <p><AiFillPhone></AiFillPhone>+88 234 567 58</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4">
                    © 2021 Copyright<p className="text-reset fw-bold">M&M shop</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;