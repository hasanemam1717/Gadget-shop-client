import Accordion from "../Components/Home/Accordion";
import Bannar from "../Components/Home/Bannar";
import FeturedProducts from "../Components/Home/FeturedProducts";
import UserReview from "../Components/Home/UserReview";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <div className="container mx-auto">
        <div className="my-24 ">
          <h1 className="my-16 text-center font-semibold text-2xl">
            Fetureds Products
          </h1>
          <FeturedProducts></FeturedProducts>
        </div>
        <div>
          <h1 className="my-16 text-center font-semibold text-2xl">
            User review
          </h1>
          <UserReview></UserReview>
        </div>

        <div>
          <h1 className="my-16 text-center font-semibold text-2xl">
            Frequently Asked questions
          </h1>
          <Accordion></Accordion>
        </div>
      </div>
    </div>
  );
};

export default Home;
