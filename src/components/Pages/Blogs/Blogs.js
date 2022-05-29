import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (

        <div className='container my-4'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Difference between javascript and nodejs</Accordion.Header>
                    <Accordion.Body>
                        JavaScript is a programming language (upgraded version of ECMA script) and it is used for frontend development. It is used on the client-side and can only be run in any browser. JavaScript can add HTML and use DOM manipulation. <br />
                        Nodejs is an running environment for javascript language.
                        It is used for backend development and server-side programming. With Nodejs we can run JavaScript outside the browser. It can not add HTML tags.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. When should you use nodejs and when should you use mongodb</Accordion.Header>
                    <Accordion.Body>
                        Nodejs is an interpreter or runtime environment for JavaScript. MongoDB is a NoSQL database for storing data. So while building a web application we can use both to connect and manage the server-side to the client-side. While storing data we can use MongoDB and with NodeJs we can get and use the data on our website
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Differences between SQL and NoSQL databases</Accordion.Header>
                    <Accordion.Body>
                        SQL is Relational Database Management system. SQL is vertically scalable and table based database. This is used for high performance application and dynamic queries. So it should be configured for strong consistency.
                        <br />
                        NoSQl (Nin-relational database) can be document based, key-value pairs. It is horizontally scalable and used for unstructured data. So it's not a good choice for complex queries. This is a open source free to use database.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. What is the purpose of jwt and how does it work?</Accordion.Header>
                    <Accordion.Body>
                        JWT is a JSON web token used to verify and securely transfer data. JWT is used for user authentication, information exchange. JWT has three parts- header, payload, signature. the payload contains the clams and signature ensures that the token has not been altered. We can deal with users information and other data in a safe secure way with JWT.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;