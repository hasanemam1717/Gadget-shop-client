import useAuth from "../../Hooks/useAuth";

const Overview = () => {
  const {user} = useAuth()
  return (
    <div className="flex items-center justify-center text-5xl  h-screen w-screen">
      <h1>{user.email}</h1>
    </div>
  );
};

export default Overview;
