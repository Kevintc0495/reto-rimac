import { api } from "@/services";

const postApi = async <T>(url: string, data?: T) => {
  const response = await api.post(url, data);

  return response;
};

export default postApi;
