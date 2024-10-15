

const Footer=()=>{
  return(
    <div className="bg-red-400">
        <h1 className="text-4xl text-center font-bold mt-9">OUR BRAND SHOP</h1>
        <h1 className="text-2xl text-center p-3">Contact Us</h1>
      <form className="text-center p-4">
        <input className="border-2" type="email"placeholder="enter email adress" /> <br /><br />
        <button className="p-1 border-2 border-round border-black">sign now</button>
      </form>
    </div>
  ) 
  
}
export default Footer;