import Carousel from "../components/Home/slider";
import Feature from "../components/Home/feature";
import Cards from "../components/Home/cards";
import Footer from "../components/Home/footer";
import Chatbot from "../components/Home/Chatbot";

function Home() {
  return (
    <div className="">
      <Carousel></Carousel>
      <Feature></Feature>
      <Cards></Cards>
      <Chatbot></Chatbot>
      <Footer></Footer>
    </div>
  );
}
export default Home;
