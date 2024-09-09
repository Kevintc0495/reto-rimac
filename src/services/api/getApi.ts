import { api } from "@/services";

const getApi = async <T>(url: string, params?: T) => {
  const response = await api.get(url, {
    ...(params && { params }),
  });

  return response;
};

export default getApi;
