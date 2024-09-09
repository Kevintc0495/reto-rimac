import { useState } from "react";
import { getApi, userRoutes } from "@/services";
import { GetResponse } from "@/interface";

export const useUsers = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUser = async (userId: string): Promise<GetResponse> => {
    setIsLoading(true);

    try {
      const response = await getApi(`${userRoutes.users}/${userId}`);
      const data = response?.data;

      return { data, success: true };
    } 
    catch (_error) { 
      return { message: '' , data: {}, success: false };
    } 
    finally { setIsLoading(false) }
  };

  return { isLoading, getUser };
};