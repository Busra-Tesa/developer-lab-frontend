import React from "react";
import { NavLink, useNavigate,Link } from "react-router-dom";
import Footer from "../components/Footer";
import SignUpPage from "./SignUpPage";
import IsAnon from "../components/IsAnon";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import AboutPage from "./AboutPage";
import domore from '../assets/images/domore.jpg';
import logo from '../assets/images/logo1.jpg';
import monitor from '../assets/images/monitor.jpg';
import womenintech from '../assets/images/womentech.jpg'


function HomePage() {

    
    const navigate = useNavigate();
    return (
        <>
    <section className="bg-white dark:bg-gray-900">
        <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="place-self-center mr-auto lg:col-span-7">
                <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Unlocking the Code to Infinite Possibilities: Explore, Learn, Create!</h1>
                <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Empowering Developers to Build, Innovate, and Connect: Where Ideas Take Flight!</p>
                <Link to="/" className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Join our community
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
                <Link to="/"className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    View the recent Posts
                </Link> 
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={domore} alt="mockup" />
            </div>                
        </div>
    </section>

    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <h2 className="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 lg:mb-16 dark:text-white md:text-2xl">Our posts are inspired by articles from platforms like these:</h2>
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
             {/* <p>Icons need to be added</p> */}
            </div>
        </div>
    </section>

    <section className="bg-gray-50 dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="mb-8 max-w-screen-md lg:mb-16">
                <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Few Words on JS libraries</h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400">Below we provide you with short captions related.</p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                       <p></p>
                
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">REACT</h3>
                    <p className="text-gray-500 dark:text-gray-400">React:A popular library for building user interfaces, known for its component-based architecture and efficient rendering.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <p></p>
    
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Vue</h3>
                    <p className="text-gray-500 dark:text-gray-400">A progressive JavaScript framework for building interactive web interfaces with a focus on simplicity and ease of integration.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <p></p>
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Angular</h3>
                    <p className="text-gray-500 dark:text-gray-400"> A comprehensive framework maintained by Google for building dynamic web applications, offering features like two-way data binding and dependency injection.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <p></p>
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Add Something here</h3>
                    <p className="text-gray-500 dark:text-gray-400">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                      <p></p>

                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Express</h3>
                    <p className="text-gray-500 dark:text-gray-400">A minimalist web application framework for Node.js, providing a robust set of features for building single-page, multi-page, and hybrid web applications.
</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                       <p></p>
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Socket.io: </h3>
                    <p className="text-gray-500 dark:text-gray-400">A JavaScript library for real-time bidirectional communication between clients and servers, facilitating the development of chat applications, online gaming, and collaborative tools</p>
                </div>
            </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
                <p className="mb-4">Streamline your development process with our intuitive platform. Deliver exceptional service experiences swiftly, without the hassle of traditional ITSM solutions. Accelerate your critical development work, eradicate toil, and deploy changes effortlessly." This revision emphasizes the platform's focus on simplifying the development process and enabling teams to deliver outstanding service experiences efficiently.</p>
                <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src={monitor} alt="office content 1"/>
                <img className="mt-4 w-full rounded-lg lg:mt-10" src={womenintech} alt="office content 2" />
            </div>
        </div>
    </section>

    <section className="bg-gray-50 dark:bg-gray-900 dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Empowering developers worldwide with insightful articles, tutorials, and community engagement to fuel your coding journey"</h2>
                <p className="mb-4 font-light">This longer subtitle conveys the platform's mission to empower developers globally by providing a range of resources and fostering a supportive community for their coding journey.</p>
                <p className="mb-4 font-medium">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
            
            </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">Join our community</h2>
                <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Share your ideas</p>
                <Link to="/" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Sharing is caring !</Link>
            </div>
        </div>
    </section>

         <Footer ></Footer>
   



        </>
    )
}

export default HomePage;