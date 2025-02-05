import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800 mt-auto">
            <div className="mx-auto max-w-screen-xl px-4">
                <div className="flex justify-center items-center">
                    <div className="text-center">
                        <p className="flex items-center justify-center">
                            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Developer Lab
                            </span>
                        </p>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-center">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024{" "}
                        <Link to="/" className="hover:underline">
                            DevLab
                        </Link>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;