import Footer from "@/components/shared/Footer";
import { Card } from "@/components/ui/card";
import { useUserContext } from "@/context/AuthContext";

const Stays = () => {
  const { user, isAuthenticated } = useUserContext();

  return (
    <div>
      <div className="h-[600px] flex  items-center ">
        <div>
          {isAuthenticated ? (
            <h1 className="text-7xl"> Where to next, {user?.name}?</h1>
          ) : (
            <h1 className="text-7xl"> Where to next?</h1>
          )}
          <p className="text-3xl">
            Find exclusive Genius rewards in every corner of the world!
          </p>
        </div>
        <div>
          <img
            src="/home_1.jpg"
            alt="logo"
            className=" fancyborder1 h-[500px] w-[500px] mt-10 ml-10 object-cover bg-no-repeat"
          />
        </div>
      </div>
      <div id="trending" className="mt-20">
        <div className=" mx-auto ">
          <h1 className="text-5xl font-bold mb-2">Trending destinations</h1>
          <p className="text-lg mb-6">
            Most popular choices for travellers from India
          </p>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="rounded-lg overflow-hidden border">
              <img
                alt="New Delhi"
                className="w-full"
                height="100"
                src="/newdelhi.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">New Delhi</h2>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border">
              <img
                alt="Mumbai"
                className="w-full h-auto"
                height="200"
                src="/mumbai.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">Mumbai</h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden border">
              <img
                alt="Hyderabad"
                className="w-full h-auto"
                height="200"
                src="/hyderabad.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">Hyderabad</h2>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border">
              <img
                alt="Bangalore"
                className="w-full h-auto"
                height="200"
                src="/bangalore.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">Bangalore</h2>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border">
              <img
                alt="Chennai"
                className="w-full h-auto"
                height="200"
                src="/chennai.jpg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">Chennai</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="#Trending" className="mt-20">
        <div className=" mx-auto ">
          <h1 className="text-5xl font-bold mb-2">Explore India</h1>
          <p className="text-lg mb-6">
            These popular destinations have a lot to offer
          </p>
        </div>
        <div>
          <div className="flex justify-between gap-2">
            <div>
              <Card className="w-64 ">
                <img
                  alt="New Delhi"
                  className="w-full"
                  src="https://r-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                />
                <h1 className="m-3">Norh Goa</h1>
              </Card>
            </div>
            <div>
              <Card className="w-64 ">
                <img
                  alt="mumbai"
                  className="w-full"
                  src="https://q-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                />
                <h1 className="m-3">mumbai</h1>
              </Card>
            </div>
            <div>
              <Card className="w-64 ">
                <img
                  alt="punducery"
                  className="w-full"
                  src="https://q-xx.bstatic.com/xdata/images/city/170x136/684769.jpg?k=146b18e42b9eb74078f2e80e07e573e8dbac879208b86bae451f99882f566a99&o="
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                />
                <h1 className="m-3">punducery</h1>
              </Card>
            </div>
            <div>
              <Card className="w-64 ">
                <img
                  alt="jayput"
                  className="w-full"
                  src="https://q-xx.bstatic.com/xdata/images/city/170x136/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o="
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                />
                <h1 className="m-3">jayput</h1>
              </Card>
            </div>
            <div>
              <Card className="w-64 ">
                <img
                  alt="wayanadu"
                  className="w-full"
                  src="https://q-xx.bstatic.com/xdata/images/region/170x136/68606.jpg?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&o="
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                />
                <h1 className="m-3">wayanadu</h1>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Stays;
