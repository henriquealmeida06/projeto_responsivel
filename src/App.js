
import './App.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

function App() {

  const [aberto, setAberto] = useState(false)
  const [ativo, setAtivo]= useState(false)

  function showMenu(){
    setAberto(!aberto);
    console.log(aberto)

  }

  function dropdown(){
    setAtivo(!ativo)
    console.log(ativo)
  }

  

 



  return (
    <div className="App font-Roboto overflow-x-hidden">
      <header className="flex flex-col">
      <nav className="flex justify-around items-center py-6 z-30 bg-white fixed w-screen ">
        <div className="">
      <img className="" src="data:image/webp;base64,UklGRtoCAABXRUJQVlA4WAoAAAAQAAAAXgAAEwAAQUxQSBsCAAANkJztf9s2P48ALyAHGcAFuVd6BPCcCo5A3qLcxBHofiZHUFsgSFlAZQKOkAf8//EH5XKPCAaOJCkZZHB65eAPeBHT31MJ4fwZ6pPIcHb2IMn8gn8DQM0NqvrpNAV2r6II73/8jEThAMYDqgW8f1o/eceT9fD+bUQQ38qXvsITOl0XkhVBTIONWvKnPX+gNcIyjwBahUuStRbw3VXPmQqXYVEDmbPA5irgxJ625ILobAbVsXCABYCZJghjTd4zJhcwCChs0Qu0G3D4Uw40BxQjs50ZoF6YUhkbwmYBAthAl+jzhW6NMVfkMea98NLkaflpcrwDEXVyC3fF1BU9x9zQ/gzZYizw0f+EylC9MaIywFMVBHg+IDcdJVApRDWO7XNUit1kKtP3SrW5NMuDMaSHohGGuY94nDWMLqrxhGm/HjioBwYCWXkLM7scm95x0RrqcO9Dg4nGXxe9QHRKetfAuOiWVDqHTwkrAITiUh8D1RU1smRJT+Ff+QbO8Jm1iY1qYJh0izD65Fbgp4eTgqU9OfclHK6AzqJdbDQjZhRlv1E0+FLJ1LaGGy6RLOEj0l9ph8ZfoS6haAxvNIsWbqCgQORvOMHNSmCjZJvsBIhEWXlTFsahKeCrhrbyNojRqFLRW644YqyeaBb1XLLzU4Hh3x9J7CfDI+ADdlEotQGqRRRBrYUnHA/dK9F44LWEf/bvwO+uHGifxDgUDgBWUDggmAAAAJAEAJ0BKl8AFAA+3W6tUKimpCKoGqjhEBuJYgDKyQAuwDd/wFGC5AViY/DBUACb/M2gcLdE+FLV77AuiOW9t1xn5v7KsMsCyxQOfOMZGHR7yeYv//vIGxKaw48HUICOGqVjWKpfXbpCHBxC8f5i/+DdZL/Sj/4N1tHy5HJQH113Xf6ZuO/BC5Ve/Apo8eR8qn5AAV/mdwAA"/>
      </div>
      <div className="flex gap-14">
      <ul className="flex gap-8 text-sm font-medium hidden lg:inline-flex tracking-wider">
        <li className="text-blue-500">HOME</li>
        <li className="hover:text-blue-500 duration-200 cursor-pointer">FEATURES</li>
        <li className="hover:text-blue-500 duration-200 cursor-pointer">CLIENT</li>
        <li className="hover:text-blue-500 duration-200 cursor-pointer">PRICING</li>
        <li className="hover:text-blue-500 duration-200 cursor-pointer">FAF</li>
        <li className="hover:text-blue-500 duration-200 cursor-pointer">ABOUT</li>
        <li onClick={dropdown} className="hover:text-blue-500 duration-200 cursor-pointer "><a className='flex' href='#'>BLOG <MdKeyboardArrowDown /></a>
        <ul className={`absolute pl-4 pr-16  rounded-lg py-4 flex flex-col gap-3 bg-white text-left ${ativo? 'transform translate-y-6':'opacity-0'} transition-transform duration-300 `}>
          <li>Blog</li>
          <li>Blog List</li>
          <li>Blog details</li>
        </ul>
        </li>
        
        <li className="hover:text-blue-500 duration-200 cursor-pointer">CONTACT</li>
      </ul>

      <div className="flex gap-5 text-sm hidden lg:inline-flex">
      <span className="hover:text-blue-500 duration-200 cursor-pointer"><FaFacebook /></span>
      <span className="hover:text-blue-500 duration-200 cursor-pointer"><FaTwitter /></span>
      <span className="hover:text-blue-500 duration-200 cursor-pointer"><FaInstagram /></span>
      </div>
      </div>

      <span className="lg:hidden cursor-pointer" onClick={showMenu}><GiHamburgerMenu /></span>
      
      </nav>
      <ul className={`${aberto? 'transform translate-y-0': 'transform -translate-y-full' } transition-transform duration-200 ease-in z-20 w-screen   bg-white fixed lg:hidden pt-20 py-4 flex flex-col gap-5 pl-16 md: items-start`}>
        <li className="cursor-pointer text-sm font-medium">HOME</li>
        <li className="cursor-pointer text-sm font-medium">FEATURES</li>
        <li className="cursor-pointer text-sm font-medium">CLIENT</li>
        <li className="cursor-pointer text-sm font-medium">PRICING</li>
        <li className="cursor-pointer text-sm font-medium">FAF</li>
        <li className="cursor-pointer text-sm font-medium">ABOUT</li>
        <li className="cursor-pointer text-sm font-medium">BLOG</li>
        <li className="cursor-pointer text-sm font-medium">CONTACT</li>

      <div className="flex gap-5 text-sm ">
      <span className="hover:text-blue-500 duration-200 cursor-pointer"><FaFacebook /></span>
      <span className="hover:text-blue-500 duration-200 cursor-pointer"><FaTwitter /></span>
      <span className="hover:text-blue-500 duration-200 cursor-pointer"><FaInstagram /></span>
      </div>

      </ul>
      
      </header>


      <main className="grid grid-cols-1 lg:grid-cols-2 bg-blue-100 justify-items-center gap-8 min-h-screen lg:px-4 py-28 lg:py-4">
      <div className=" flex flex-col justify-center gap-8 text-left px-28 mt-10">
        <p className="text-lg tracking-widest font-medium text-blue-500">AWESOME</p>
        <p className="font-medium text-4xl">We are Startup Creative Kucra Agency</p>
        <p className="text-gray-600 text-lg">Carefully crafted after analyzing the needs of different industries and the design achieves a great balance between purpose & presentation.</p>
        <form className="bg-white rounded-3xl flex justify-between items-center px-1 py-1"> 
        <input className="border-none outline-none py-2 px-5 rounded-3xl"  type="text" placeholder="Enter your e-mail"/>
        <button className="bg-blue-500 py-3 px-8 tracking-wide rounded-3xl transform translate-y-0 hover:-translate-y-1 transition-transform duration-200 ease-in  text-white font-medium " >SUBSCRIBE</button>
         </form>
-
      </div>
      <div className="flex justify-center items-center mt-10">
      <img className="" src="https://preview.pichforest.com/kucra/layouts/images/home/home1.png"/>
      </div>
      </main>
      
     
    </div>

  );
}

export default App;
