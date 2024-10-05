"use client";
import {
  getItemFromStorage,
  storeKeys,
  setItemInStorage,
} from "@/utils/storage";
import IUser from "../interfaces/i-user";

export default function useUser() {
  const user: IUser = getItemFromStorage(storeKeys.userdata);

  const updateUser = (user: IUser) => {
    setItemInStorage(storeKeys.userdata, user);
  };
  
  const getRole = () => {
    if(user?.role == "storeowner" || user?.role == "store") return "Store Owner";
    else if(user?.role == "fulfillmentpartner") return "Fulfillment Partner";
    else if(user?.role == "user") return "User";

  };
  return { user, updateUser , getRole};
}
