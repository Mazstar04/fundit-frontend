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
  
 
  return { user, updateUser };
}
