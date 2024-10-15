import Image from "next/image";
import Header from "./component/header/header ";
import Footer from "./component/footer/footer";
import Hero from "./component/hero section/hero";



export default function Home() {
  return (
<div className="bg-red-400">
  <Header/>
<div>
  <Hero></Hero>
</div>

  <Footer/> 
</div>
  );
}
