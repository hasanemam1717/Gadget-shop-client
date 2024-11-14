import Review from "./Review";


const UserReview = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between  gap-3">
     <Review></Review>
     <Review></Review>
     <Review></Review>
     <Review></Review>
    </div>
  );
};

export default UserReview;
