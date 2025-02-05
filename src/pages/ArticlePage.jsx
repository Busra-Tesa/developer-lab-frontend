import React from "react";

function ArticlePage() {
    return (
        <section className="bg-white dark:bg-gray-900 min-h-screen">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 h-full">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Funny JS Libraries
                    </h2>
                    <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                        Have you heard about funny JS Libraries?
                    </p>
                    <p className="text-white mb-8">
                        There are some really amusing JavaScript libraries out there that add a touch of humor to programming. Have you ever tried "Chance.js," which generates random data with hilarious outcomes?
                    </p>
                </div>

                <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Brototype</h3>
                            <p className="my-4">
                                Brototype is a funny JavaScript library that's also quite useful. It can be described as an antidote to the "undefined is not a function" error, which occurs when attempting to call a value a function, where the value is not a function. With Brototype, you can easily test nested members, ensure that multiple nested members exist by passing an array of paths or using a callback, fetch nested members, create nested members, call nested functions, handle exceptions, check for undefined, get a list of object keys, extend objects, and more. Installing Brototype is a piece of cake because this fun but the useful library is available via npm.
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center">
                            <div className="space-y-0.5 font-medium dark:text-white text-center">
                                <div>Funny Javascript Libraries</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Thanos JS</h3>
                            <p className="my-4">
                                Have you ever wished to wear the infinity gauntlet and have the power to shape the universe with a snap of your fingers? Thanos JS gives you a taste of this power, allowing you to reduce the file size of your project down to 50% with a simple command. But instead of achieving this impressive feat by some clever JavaScript magic and advanced optimization techniques, Thanos JS simply randomly deletes half of your project files. Needless to say, this JavaScript tool isn't intended for serious use. It was created as a joke, and that's all it is.
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center">
                            <div className="space-y-0.5 font-medium dark:text-white text-center">
                                <div>Reddit</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Lead designer at Dropbox
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Elevator.js</h3>
                            <p className="my-4">
                                Elevator.js is a stand-alone funny JavaScript library that lets you add a "back to top" button that behaves like a real elevator, complete with elevator music to make the smooth scrolling feel to the topless boring. Since Elevator.js is a simple library that handles only the audio management and the scroll functionality, you can easily customize it to fit your needs and make it less funny and more useful.
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <div className="space-y-0.5 font-medium dark:text-white text-center">
                                <div className="tex-center">JS Community</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cowsay</h3>
                            <p className="my-4">"Originally written in Perl by Tony Monroe, Cowsay is a talking cow that can say any words you put into her mouth. Just don't be disappointed when you find out that Cowsay doesn't really speak. Instead, it outputs the words you want it to say in the form of text displayed in the terminal or your web browser. What's the point of a talking cow, you ask? Well, it can make your screenshots more interesting, which is how most people use them. Even if you don't actually end up using Cowsay all that often, installing it and giving it a try is a rite of passage for Unix users, who have been having fun with it for over 20 years.</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>JS community</div>
                                <div className="text-sm text-center font-light text-gray-500 dark:text-gray-400">ES6</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default ArticlePage;