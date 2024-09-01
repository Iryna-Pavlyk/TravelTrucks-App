import Star from './Star.jsx';

const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
};

export default StarRating;
