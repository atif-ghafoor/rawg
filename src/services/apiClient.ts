import axios, { AxiosResponse } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1a0057501a55404f82419f638cd0b9ec",
  },
});

export type { AxiosResponse };
