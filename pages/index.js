import { useState } from "react";
import Layout from "../components/Layout";
import { UserIcon } from "@heroicons/react/solid";
import { UserIcon as UserOutline } from "@heroicons/react/outline";

export default function Home() {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState("");
  console.log(movies ? movies : "Loading");

  const srchQuery = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c602004fafb19d5cefd8dd7449084f32&language=en-US&query=${value}&page=1&include_adult=false`
    );
    const query = await res.json();
    setMovies(query);
    return;
  };

  return (
    <Layout>
      <div
        className="space-x-5 text-3xl w-screen h-screen flex 
       justify-center items-center pt-10 pl-10"
      >
        <div className="group">
          <button
            className="flex py-2 px-4 relative  before:absolute before:w-1 before:h-1 group-hover:before:w-full before:bg-black before:bottom-0 before:left-0 before:transition-all
                after:absolute after:w-1 after:h-1 group-hover:after:w-full after:bg-black after:top-0 after:right-0 after:transition-all before:active:h-full active:text-white before:-z-50
                after:active:h-full after:-z-50 transition-all
        "
          >
            <div className="absolute w-1 h-1 top-0 bg-black left-0 group-hover:h-full transition-all" />
            <div className="absolute w-1 h-1 bottom-0 bg-black right-0 group-hover:h-full transition-all" />
            <UserIcon className="w-10 transition-all" />
            <p>SignIn</p>
          </button>
        </div>
        <div className="group">
          <button
            className="flex px-7 py-3 relative 
        before:left-0 before:top-0 before:absolute before:w-5 before:h-5 before:bg-red-500 overflow-clip
        after:right-0 after:top-0 after:absolute after:w-5 after:h-5 after:bg-red-500 
        before:transition-all hover:before:bg-green-300 hover:before:rounded-full hover:before:left-[88%] before:active:bg-blue-500 before:active:rounded-sm 
         after:transition-all hover:after:bg-green-300 hover:after:rounded-full hover:after:right-[88%] after:active:bg-blue-500 after:active:rounded-sm 
        "
          >
            <div
              className="block absolute w-5 h-5 bg-red-500 group-hover:bg-green-300 bottom-0 left-0 group-hover:rounded-full
             transition-all ease-linear group-active:bg-blue-500 group-active:rounded-sm 
             group-hover:left-[88%] 
             "
            />
            <div
              className="block absolute w-5 h-5 bg-red-500 group-hover:bg-green-300 bottom-0 right-0 group-hover:rounded-full
             transition-all ease-linear group-active:bg-blue-500 group-active:rounded-sm 
            group-hover:right-[88%]
             "
            />
            <p className="text-red-500 group-hover:text-green-300 group-active:text-blue-500 transition-all ease-linear">
              SignIn
            </p>
            <UserIcon className="w-10 text-red-500 z-50 group-hover:text-green-300 group-active:text-blue-500" />
          </button>
        </div>
        <div className="rainbow group">
          <button
            className="border-2 rounded-2xl border-gradient-to-br border-from-green-400 border-via-sky-500 border-to-purple-500 flex items-center before:h-full relative before:w-0 before:left-0 before:top-0 overflow-hidden hover:before:w-full before:transition-all before:duration-1000 before:ease-in-out
         before:absolute before:block before:content-[''] before:bg-gradient-to-br from-green-400 via-fuchsia-500 to-purple-500 bg-gradient-to-br before:blur before:hover:rotate-[10deg]
          text-black px-3 py-2 active:scale-[1.1] transition-all duration-700 group-hover:hue-rotate-90 group-active:hue-rotate-180 before:brightness-150
         "
          >
            <p className="text-white z-50 relative">SignIn</p>
            <UserIcon className="w-10 text-white z-50" />
          </button>
        </div>
        <button
          className=" before:h-full relative before:w-0 before:left-0 before:top-0 overflow-hidden hover:before:w-full before:transition-all before:duration-300 ease-in-out
         before:absolute before:block before:content-[''] before:bg-gradient-to-br from-yellow-400 via-sky-500 to-lime-500 hover:bg-gradient-to-br hover:from-purple-500 hover:via-sky-500 hover:to-lime-500 bg-gradient-to-br before:blur before:hover:rotate-[180deg]
         rounded-full text-black px-3 py-2 active:scale-[1.1] transition-all
         "
        >
          <p className="text-white z-50 relative">SignIn</p>
        </button>
        <div className="group">
          <button
            className="relative before:content-[''] before:absolute before:left-0 before:top-0 before:transition-all before:duration-300
         before:w-full before:h-[100%] before:rounded-[20px] before:bg-white px-5 py-2 bg-black group-hover:bg-gradient-to-br from-fuchsia-700 to-purple-500 hover:text-purple-500
         transition-all ease-linear group-hover:rounded-2xl rounded-sm text-black active:scale-[0.9]"
          >
            <p className="z-50 relative group-hover:animate-pulse">SignIn</p>
          </button>
        </div>
        <div className="group">
          <button
            className="flex items-center justify-center px-3 py-2 relative before:absolute before:opacity-0 hover:before:opacity-100 before:bg-black before:w-1 before:top-0 
        before:right-0 before:h-full hover:before:w-full before:transition-all hover:text-white z-[100] transition-all before:-z-10 active:before:translate-y-[100%] active:before:opacity-0 
         active:text-black before:duration-300 after:duration-300 duration-300 after:absolute after:h-full after:w-full after:bg-blue-500 after:top-0 after:right-0 after:-translate-y-[100%] after:opacity-0
          active:after:translate-y-[5%] active:after:opacity-100 after:-z-40"
          >
            <UserIcon className="w-10 text-black z-50 group-hover:text-white group-active:text-black transition-all duration-100" />
            SignIn
          </button>
        </div>
        <div className="group">
          <button
            className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-yellow-400 px-3 py-1 group-hover:before:h-4 group-hover:before:w-4 before:transition-all
         text-green-800 bg-lime-500 hover:text-white rounded-xl transition-all before:duration-300 duration-300 ease-linear group-hover:before:rotate-180 group-hover:before:rounded-full focus:before:h-full
          focus:before:w-full group-active:scale-[1.2]"
          >
            <p className="z-50 relative">SignIn</p>
          </button>
        </div>
      </div>
    </Layout>
  );
}
