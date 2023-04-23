import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { db } from "../firebase-config";
import { doc, getDoc, setDoc, collection, updateDoc, arrayUnion } from "firebase/firestore";

export const CreateListing = ({ setIsPopUpForm, loggedInRestaurantId }) => {
  const listingsRef = collection(db, "listings");
  const restaurantsRef = doc(db, "restaurants", loggedInRestaurantId);

  const schema = yup.object().shape({
    foodName: yup.string().required("You must add a food name"),
    foodQuantity: yup
      .number()
      .required("You must add a food quantity")
      .typeError("You must add a food quantity")
      .min(0),
    endTime: yup
      .date()
      .required("You must add an end time")
      .typeError("You must add an end time"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClick = () => {
    setIsPopUpForm(false);
  };

  const onListingPost = async (data) => {
    const newDocRef = doc(listingsRef);
    const RestRef = await getDoc(restaurantsRef);
    console.log(RestRef.data());
    const restData = RestRef.data();
    await setDoc(newDocRef, {
      foodName: data.foodName,
      foodQuantity: data.foodQuantity,
      endTime: data.endTime,
      restName: restData.name,
      rest_id: loggedInRestaurantId,
      lat: restData.lat,
      lng: restData.lng,
      id: newDocRef.id,
    });

    await updateDoc(restaurantsRef, {
      currListings: arrayUnion(newDocRef.id)
    });

    window.location.reload();
  };

  return (
    <div className="modal" onClick={() => handleClick()}>
      <form
        className="add-listing-form"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onListingPost)}
      >
        <div
          className="add-listing-form-container"
        >
          <h2 class = "text-2xl text-primary" >Add a Listing</h2>
          <div
            className="food-name-input-container"
            class = "center text-#D3D3D3"
          >
            <input
              id="food-name-input"
              type="text"
              placeholder="Food Name"
              {...register("foodName")}
            />
            <p style={{ color: "red" }}> {errors.foodName?.message} </p>
          </div>
          <div
            className="food-quantity-input-container"
            style={{ textAlign: "center" }}
          >
            <input
              id="food-quantity-input"
              type="number"
              placeholder="Food Quantity"
              {...register("foodQuantity")}
            />
            <p style={{ color: "red" }}> {errors.foodQuantity?.message} </p>
          </div>
          <div
            className="end-time-input-container"
            style={{ textAlign: "center" }}
          >
            <div style={{ marginBottom: "0.5rem", textAlign: "center"}}>
              <label htmlFor="end-time-input">End Time: </label>
            </div>
            <input
              id="end-time-input"
              type="datetime-local"
              {...register("endTime")}
            />
            <p style={{ color: "red" }}> {errors.endTime?.message} </p>
          </div>
          <button id="listing-form-submit-btn"> Submit </button>
        </div>
      </form>
    </div>
  );
};

export default CreateListing;
