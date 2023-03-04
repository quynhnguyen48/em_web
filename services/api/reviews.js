import axios from "axios";
import qs from "qs";

const formatReviewData = (reviewsRes) =>
  reviewsRes.data.map((review) => ({
    id: review.id,
    ...review.attributes,
    image: {
      id: review.attributes.image,
      ...review.attributes.image.data.attributes,
    },
  }));

export const getReviews = async (filters = {}) => {
  const query = qs.stringify({
    filters,
    populate: ["image"],
  });
  const reviewsRes = await axios.get(`/reviews?${query}`);
  return formatReviewData(reviewsRes);
};
