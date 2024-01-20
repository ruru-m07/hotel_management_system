import { ExamplesNav } from "@/components/shared/Home_nav";
import Stays from "./components/Stays";

const Home = () => {
  return (
    <div>
      <ExamplesNav />
      <div>
        <Stays />
      </div>
    </div>
  );
};

export default Home;
