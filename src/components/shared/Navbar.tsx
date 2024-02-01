import { useUserContext } from "@/context/AuthContext";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SigninForm from "@/_auth/forms/SigninForm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOutAccount } from "@/lib/appwrite/api";

const Navbar = () => {
  const { user, isAuthenticated } = useUserContext();
  const handelLogout = async () => {
    await signOutAccount();
    window.location.reload();
  };
  return (
    <div>
      <div className="flex pt-2 bg-[#000000] text-white border-b pb-3 w-full h-14 bg-card justify-between items-center">
        <div className="h-10 flex items-center">
          <h1 className="ml-10">
            <img className="w-9 h-9" src="./logo.png" />
          </h1>
        </div>
        <div>
          <Button className="text-white" variant={"link"}>
            Home
          </Button>
          <Button className="text-white" variant={"link"}>
            About
          </Button>
          <Button className="text-white" variant={"link"}>
            contact
          </Button>
          <Button className="text-white" variant={"link"}>
            Help
          </Button>
        </div>
        {isAuthenticated ? (
          <div className="mr-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.imageUrl} alt="@shadcn" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button onClick={handelLogout}>Log out</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          // <div>
          //   <Link to={"/sign-in"}>
          //     <Button variant={"outline"} className="mr-4 text-black">
          //       log in
          //     </Button>
          //   </Link>
          //   <Link to={"/sign-up"}>
          //     <Button variant={"outline"} className="mr-4 text-black">
          //       sign up
          //     </Button>
          //   </Link>
          // </div>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"outline"} className="mr-4 text-black">
                  log in
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>login to your acount</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <SigninForm />
                </div>
              </DialogContent>
            </Dialog>
            <Button variant={"outline"} className="mr-4 text-black">
              sign up
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
