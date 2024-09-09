import { api } from "@/services";

const putApi = async <T>(url: string, data?: T) => {
  const response = await api.put(url, data);

  return response;
};

export default putApi;
