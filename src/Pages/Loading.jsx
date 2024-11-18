import { GridLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <GridLoader
        color="#000000"
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
