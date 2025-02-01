export interface Movie {
  id: number;
  backdrop_path:string
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
}






// <div className="fixed p-10 left-0 top-0 w-full z-50 duration-500 ease-out bg-gradient-to-b from-black/70 to-transparent">
//               <div className="flex justify-between items-center h-24 px-6">
//                 <Image
//                   src={logo}
//                   className="relative xl:w-[170px] lg:w-[140px] w-32"
//                 />
//                 <div className="hidden md:flex space-x-10 lg:text-3xl md:text-xl font-bold text-gray-300">
//                   <NavLink
//                     to="/"
//                     className={({ isActive }) =>
//                       `cursor-pointer hover:text-white ${
//                         isActive ? "text-orange-600 scale-125" : " "
//                       } `
//                     }
//                   >
//                     Home
//                   </NavLink>
//                   <NavLink
//                     to="/"
//                     className={({ isActive }) =>
//                       `cursor-pointer hover:text-white ${
//                         isActive ? "text-orange-600 scale-125" : " "
//                       } `
//                     }
//                   >
//                     Home
//                   </NavLink>
//                 </div>
//                 <div className="hidden md:flex items-center">
//                   <input
//                     type="text"
//                     placeholder="Search"
//                     className="border-none outline-none p-2 xl:w-96 lg:w-44 bg-[#f8f8f837] rounded-full text-white placeholder-neutral-300"
//                   />
//                   <span className="relative -left-10 ">
//                     <CiSearch style={{ fontSize: "25px" }} />
//                   </span>
//                   <Image
//                     src={userLogo}
//                     alt="userLogo"
//                     className="w-10 h-10 rounded-full cursor-pointer
//                     duration-300 ease-in-out hover:scale-110 hover:rotate-90
//                   "
//                   />
//                 </div>
//                 <Button className="block md:hidden text-white text-3xl">
//                   <CiMenuBurger />
//                 </Button>
//               </div>
//             </div>