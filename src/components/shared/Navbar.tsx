import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div>
      <div className="flex border-b pb-3 mt-3 sticky top-0 w-full h-10 bg-card justify-between items-center">
        <div className="ml-10">
          <h1>Booking</h1>
        </div>
        <div>
          <Button variant={"link"}>Booking</Button>
          <Button variant={"link"}>Trending</Button>
          <Button variant={"link"}>Explore</Button>
          <Button variant={"link"}>Hotels</Button>
        </div>
        <div>
          <Button variant={"outline"} className="mr-4">
            sign in
          </Button>
          <Button variant={"outline"} className="mr-4">
            sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
