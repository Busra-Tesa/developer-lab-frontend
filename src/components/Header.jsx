import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import AboutPage from '../pages/AboutPage'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const {
        isLoggedIn,
        user,
        logOutUser
    } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logOutUser();
        navigate("/");
    };
    return (
        <header>
            <nav className="bg-black border-gray-200   dark:bg-gray-800 w-full">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <NavLink href="#" className="flex items-center">
                        {/* <img src="src/assets/images/logo1.jpg" className="mr-3 h-6 sm:h-9" alt="DevLab Logo" /> */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Developer Lab</span>
                    </NavLink>
                    <div className="flex items-center lg:order-2">
                        {isLoggedIn || (
                            <>
                                <NavLink to="/login"
                                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 
            font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 
            focus:outline-none dark:focus:ring-primary-800">
                                    Log in
                                </NavLink>
                                <NavLink to="/signup"
                                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 
            font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 
            focus:outline-none dark:focus:ring-primary-800">
                                    Sign Up
                                </NavLink>
                            </>
                        )}
                        {!isLoggedIn || (
                            <>
                                <NavLink to="/"
                                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 
            font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 
            focus:outline-none dark:focus:ring-primary-800">
                                    <button onClick={handleLogout}>Logout</button>
                                </NavLink>
                            </>
                        )}

                        {/* <a href="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Sign Up</a> */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent
                     lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">
                                    Home</NavLink>
                            </li>

                            {!isLoggedIn || (
                                <>
                                    <li>
                                        <NavLink to="/post"
                                            className="block py-2 pr-4 pl-3 text-gray-700 border-b
                      border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700
                       lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                       lg:dark:hover:bg-transparent dark:border-gray-700">
                                            Posts</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/create"
                                            className="block py-2 pr-4 pl-3 text-gray-700 border-b
                      border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700
                       lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                       lg:dark:hover:bg-transparent dark:border-gray-700">
                                            Create a post</NavLink>
                                    </li>
                                </>
                            )}
                            <li>
                                <NavLink to="/article" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 
                    lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white 
                    dark:hover:bg-gray-700 
                    dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                    Articles</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 
                    lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 
                    lg:dark:hover:text-white dark:hover:bg-gray-700 
                    dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                    About us</NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;