import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Comments from "./Comments"
import Header from './Header';
// import UpdatePost from "../components/UpdatePost";
// import DeletePost from "../components/DeletePost";

function List({ posts}) {


  return (
    <>
      <Header />
      <section className="w-full h-full bg-slate-900 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-4 py-20 h-full">
          <div className="mb-12 space-y-5 text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-5xl">
              Post your thought
            </h1>
            <p className="text-xl text-gray-100 md:text-2xl">
              Here's what people think on certain topics.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {posts.map((post) => (
              <div key={post._id} className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link to={`/post/${post._id}`} className="cursor-pointer">
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          // src={post.author.avatar}
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt={post.author.name}
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {post.author.name}
                          </h3>
                          <p className="text-white-500 text-md">{post.author.email}</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        {post.content}
                      </p>
                      <p className="leading-normal text-gray-300 text-md">
                        <div className="text-sm text-gray-300">
                          {new Date(post.author.updatedAt).toLocaleDateString('en-DE', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                          })}
                        </div>
                      </p>
                      <div className="flex justify-between">
                        <div>
                          <FaTrashAlt className="text-red-500 cursor-pointer"  />
                        </div>
                        <div>
                          <FaEdit className="text-blue-500 cursor-pointer"/>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
               
                <Comments comments={post.comments} />
              </div>
            ))}
          </div>
        </div>
      </section>
     
    </>
  );
}
export default List;
