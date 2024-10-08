import {
  getItemFromStorage,
  removeItemFromStorage,
  storeKeys,
} from "@/utils/storage";

const API_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL;


export const Base = {
  apiUrl: (): string => {
    if (API_URL) {
      return `${API_URL}`;
    }
    throw new Error("NEXT_PUBLIC_API_URL is not defined.");
  },
};

export const setConfig = (contentType: string = "application/json") => {
  const authToken = getItemFromStorage(storeKeys.userdata)?.accessToken;

  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
      ContentType: contentType,
    },
  };

  return config;
};
export const requestWrapper = async (request: Promise<any>, isGet = false): Promise<any> => {
  try {
    const res = await request;

    console.log("RESPONSE: ", res.data);
    return isGet? res.data?.data :res.data;
  } catch (err: any) {
    console.log("e", err.response);

    
    if (err.response?.data) {
      throw err.response.data;
    }
    
    if (err.response?.status === 401) {
      window.location.href = "/sign-in"
      throw "You aren't logged in";
    }
    
    if (err.response?.data?.error) {
      throw err.response.data.error.message;
    }

    if (err.response?.status === 500) {
      throw "An error occured";
    }

    throw "An error occured";
  }
};
