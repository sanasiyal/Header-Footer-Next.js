

const Header=()=>{
    return(
        <body>
            
      
     <nav className=" bg-red-400 p-4 flex justify-between items-center border border-black ">

          <span className="text-2xl font-extrabold text-black">ONLINE-SHOP</span>
          <ul className="flex space-x-10">
           
                <li className="font-bold hover:text-red-600 underline" >HOME</li>
                <li className="font-bold hover:text-red-600 underline"> PRODUCT</li>
                <li className="font-bold hover:text-red-600 underline ">ABOUT US</li>
                <li className="font-bold  hover:text-red-600 underline">SERVICES</li>
                <li className="font-bold   hover:text-red-600 underline">CONTACT US</li>
               
            </ul> 
          <button>
          <input className="border-2 boeder-color-black" type="text" placeholder="search" />
          <i className="fa-solid fa-magnifying-glass-location"></i>
             </button>

            </nav>
            </body>
    )
}
export default Header;