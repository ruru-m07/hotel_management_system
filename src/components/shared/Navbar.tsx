import { useUserContext } from "@/context/AuthContext";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  const { user } = useUserContext();
  return (
    <div>
      <div className="flex border-b pb-3 mt-3  w-full h-10 bg-card justify-between items-center">
        <div className="ml-10">
          <h1>Booking</h1>
        </div>
        <div>
          <Button variant={"link"}>Home</Button>
          <Button variant={"link"}>About</Button>
          <Button variant={"link"}>contact</Button>
          <Button variant={"link"}>Help</Button>
        </div>
        {user ? (
          <div className="mr-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src={user.imageUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        ) : (
          <div>
            <Button variant={"outline"} className="mr-4">
              sign in
            </Button>
            <Button variant={"outline"} className="mr-4">
              sign up
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
