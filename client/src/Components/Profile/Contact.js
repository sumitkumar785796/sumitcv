import React, { useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        subject: "",
        msg: "",
    });
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const HandleSubmit = async (e) => {
        e.preventDefault()
        try {
            const resp = await axios.post('/contact', input)
            console.log(resp.data.data)
            toast.success(resp.data.message);
            setInput({
                fullname: "",
                email: "",
                subject: "",
                msg: "",
            })
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errorData = error.response.data;
                if (errorData.errors) {
                    // Handle validation errors
                    errorData.errors.forEach((error) => {
                        toast.error(error.msg);
                    });
                } else {
                    // Handle other types of errors
                    toast.error(errorData.message || 'An error occurred');
                }
            } else {
                // Handle network errors
                console.error('An error occurred:', error);
                toast.error('An error occurred. Please try again later.');
            }
        }
    }
    return (
        <>
            {/* start sectoion contact */}
            <div id="contact" className="paddsection">
                <div className="container">
                    <div className="contact-block1">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-contact">
                                    <h2 className="mb-30">GET IN TOUCH</h2>
                                    <ul className="contact-details">
                                        <li>
                                            <span>Noida Sector 142</span>
                                        </li>
                                        <li>
                                            <span>Noida, India</span>
                                        </li>
                                        <li>
                                            <span>+91 6202179949</span>
                                        </li>
                                        <li>
                                            <span>sumitkumar785796@gmail.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form action method="post" role="form" className="contactForm">
                                    <div className="row">
                                        <ToastContainer position="top-right" />
                                        <div className="col-lg-6">
                                            <div className="form-group contact-block1">
                                                <input
                                                    type="text"
                                                    name="fullname"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    data-rule="minlen:4"
                                                    data-msg="Please enter at least 4 chars"
                                                    onChange={handleChangeInput}
                                                    value={input?.fullname}
                                                />

                                                <div className="validation" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    data-rule="email"
                                                    data-msg="Please enter a valid email"
                                                    onChange={handleChangeInput}
                                                    value={input?.email}
                                                />
                                                <div className="validation" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="subject"
                                                    id="subject"
                                                    placeholder="Subject"
                                                    data-rule="minlen:4"
                                                    data-msg="Please enter at least 8 chars of subject"
                                                    onChange={handleChangeInput}
                                                    value={input?.subject}
                                                />
                                                <div className="validation" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                    name="msg"
                                                    rows={19}
                                                    data-rule="required"
                                                    data-msg="Please write something for us"
                                                    placeholder="Message"
                                                    onChange={handleChangeInput}
                                                    value={input?.msg}
                                                />
                                                <div className="validation" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <input
                                                type="submit"
                                                className="btn btn-defeault btn-send"
                                                defaultValue="Send message"
                                                onClick={HandleSubmit}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start sectoion contact */}
        </>
    );
};

export default Contact;
