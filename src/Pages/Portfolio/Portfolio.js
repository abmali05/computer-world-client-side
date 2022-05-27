import React from 'react';
import { Link } from 'react-router-dom';
import img from './ali.jpg';

const Portfolio = () => {
    return (
        <div className='my-20'>
            <div className='text-center'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="" />
                    </div>
                </div>
                <p className='text-4xl text-teal-500 font-bold'>Abu Bakar Mohammad Ali</p>
                <p className='text-2xl font-bold'>MERN Stack Developer</p>
                <p className='text-xl font-bold'>B. Sc. in CSE</p>
                <p className='font-bold'>Bamgladesh Open University</p>
            </div>

            <div className='mt-5'>
                <p>First of all strongly believe that "Honesty is the best policy". Over last several years I have developed good knowledge on web Development.
                </p>
                <p>I specialize in React based Website Development.</p>
                <p className='mt-5'>Expertise: JavaScript, ReactJS, HTML, CSS, Bootstrap 5, TaleWind</p>
                <p> Comfortable: NodeJS, ExpressJS, MongoDB, REST APi,</p>
                <p>  Familiar: Jquery, Wordpress, WooCommerce, PHP, MySql etc.</p>
                <p> Tools: VS Code, Brackets, Sublime Text, Chrome Dev Tool,
                    Firebase, Heroku, Netlify, Github, Figma etc</p>
            </div>

            <div>
                <p className='text-xl font-bold'>Personal Projects</p>

                <p>1.
                    <a className='text-teal-500' href="https://inventory-management-11.web.app/" target="_blank">Divine Inventory</a>
                </p>

                <p>2.
                    <a className='text-teal-500' href="https://lawyer-portfolio-1d1a7.web.app/" target="_blank">Lawyer Portfolio</a>
                </p>
            </div>
        </div >
    );
};

export default Portfolio;