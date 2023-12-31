import "./ReviewList.css";
import React, { useState } from "react";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";

type ReviewItem = {
  rating: number;
  text: string;
};

function ReviewList() {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);

  const handleSaveReview = (text: string, averageValue: number) => {
    setReviews([...reviews, { rating: averageValue, text }]);
  };

  return (
    <div >
      <ReviewForm onSave={handleSaveReview} />
      <div className="review-list__box">
        {reviews.map((review, index) => (
          <Review key={index} rating={review.rating} text={review.text} />
        ))}
        <Review text="Lorem ipsum dolor sit amet consectetur. Magna non ut sed condimentum nullam odio. Ornare nulla ut lectus pretium placerat sapien augue faucibus adipiscing. Ullamcorper tortor quam netus eleifend euismod fermentum. Ut vel congue semper nisi. Proin enim non in at diam semper ut porta. Sed netus nisi integer feugiat fermentum nunc sagittis. Nunc faucibus pellentesque faucibus nunc non viverra sed in. Libero morbi gravida ullamcorper non id euismod scelerisque tristique. Et fames non est id. Urna a in suspendisse massa aliquet risus. Vitae a sed tempus velit in. Aliquam egestas tempor egestas ipsum. In eu at nisl venenatis. Venenatis metus lacus aenean laoreet condimentum maecenas tristique quam. In duis et vel quis placerat. Tristique auctor in non nunc diam non lorem vitae elementum. In eget sed ac massa amet. Nisi porta pellentesque ut amet elit nulla pulvinar pellentesque vitae. Id ut et venenatis bibendum amet. Mus ultricies aliquet id rutrum sed nibh lorem porta. Nulla diam volutpat condimentum id aliquam in nibh blandit bibendum. Fermentum fringilla erat nisl facilisi ut nisl duis nulla. Sollicitudin eget sem ipsum eleifend. Sem ipsum fringilla sed imperdiet a ornare. Neque a ut et varius in purus nunc vel eu. Semper commodo placerat sed habitant nibh. Quam vitae arcu at quam. Quam ut nulla viverra malesuada eget viverra urna dui. Non consectetur nam netus amet vel cras at ultricies. Turpis eget at vitae aliquam eu nunc. Mi mi ultrices sit tellus ut aliquet dignissim orci orci. Non adipiscing tempus tortor leo. Ullamcorper proin tristique ultrices feugiat varius. Est eu purus facilisi vitae velit pellentesque sit. Scelerisque in ipsum tristique in cursus enim." rating={3.7}></Review>
      </div>
    </div>
  );
}

export default ReviewList;