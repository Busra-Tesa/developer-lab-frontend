import React, { useContext } from "react";
import tesa from '../assets/images/tesa2.png'
import busra from '../assets/images/busra.png'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function AboutPage() {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleDashboardClick = () => {
        if (!isLoggedIn) {
            navigate('/');
            return;
        }
        navigate('/');
    };

    return (
        <>
            <section className="bg-white dark:bg-gray-900 h-screen">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
                        <p className="mb-4">Welcome to Dev Glimpse, your go-to destination for insightful articles, engaging stories, and captivating content. Founded by a passionate team of writers, editors, and creators, we are dedicated to delivering high-quality, informative, and inspiring content on a wide range of topics.

                            At Dev Glimpse, we believe in the power of storytelling to inform, entertain, and inspire. Whether you're looking for practical advice, thought-provoking commentary, or just a good read, our blog has something for everyone.

                            Our diverse team of contributors brings a wealth of knowledge and expertise to every article we publish. From in-depth analysis to personal anecdotes, we strive to offer a unique perspective on the world around us.

                            Join us on our journey as we explore the latest trends, share valuable insights, and celebrate the art of writing. Thank you for visiting Dev Glimpse. We hope you enjoy reading our content as much as we enjoy creating it.


                        </p>
                        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>

                        <div className="flex gap-4 mt-6">
                            <Link
                                to="/article"
                                className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-md text-center"
                            >
                                View Articles
                            </Link>
                            <button
                                onClick={handleDashboardClick}
                                className="px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-200 shadow-md text-center"
                            >
                                Home Page
                            </button>
                        </div>

                        <h4 className="pb-4 font-semibold m-5 text-white">Busra & Tesa Co - Owners</h4>
                        <div className="flex flex-row gap-10">
                            <a
                                href="https://github.com/busrakocer123"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center font-semibold text-white hover:text-blue-400 transition-colors duration-200"
                            >
                                Busra's
                                <svg className="w-8 h-14 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/TesaMusa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center font-semibold text-white hover:text-blue-400 transition-colors duration-200"
                            >
                                Tesa's
                                <svg className="w-8 h-14 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                                </svg>
                            </a>

                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src={tesa} alt="office content 1" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src={busra} alt="office content 2" />
                    </div>
                </div>
            </section>
        </>

    )




}


export default AboutPage;