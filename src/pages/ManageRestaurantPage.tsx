import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateRestaurant } from "../api/MyRestaurantApi";
import ManageRestaurantForm from "../forms/manage-restaurant-form/ManageRestaurantForm";

export default function ManageRestaurantPage() {

    const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();
    const { restaurant } = useGetMyRestaurant()
    const { updateRestaurant, isLoading: isUpdateLoading } = useUpdateRestaurant()


    //When ever thepage will load it will fetch the useGetMyRestaurant hook and based on that it will gove the value hence 
    //if restaurant exists it will feed true and if it does not exixsts it will feed false
    const isEditing = !!restaurant

    return (
        <ManageRestaurantForm restaurant={restaurant} onSave={isEditing ? updateRestaurant : createRestaurant} isLoading={isCreateLoading || isUpdateLoading} />
    )
}
