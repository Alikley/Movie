import axios from "axios";
export interface FetchResponse<T> {
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "950b206c92f5d85c0d77ec2a566692fe",
  },
});

class APICLIENT<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = async () => {
    const res = await axiosInstance.get<FetchResponse<T>>(this.endpoint); // Correct type here
    return res.data.results; // Access the results array
  };
  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APICLIENT;
