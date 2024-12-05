import apiClient, { AxiosResponse } from "./apiClient";
import { ImageKeys } from "./AllImages";

export type Data = {
  added: number;
  background_img: string;
  genres: string[];
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: { id: number; slug: string }[];
  released: string;
  rating: number;
  ratings: ImageKeys;
};
export interface Params {
  genres?: string;
}
class userService {
  getGames(params: Params) {
    const controller = new AbortController();
    const request = apiClient.get("/games", {
      params: params,
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
  filterData(data: AxiosResponse) {
    const count = data.data.count;
    const filterdData = data.data.results.map((game: any) => {
      return {
        id: game.id,
        name: game.name,
        background_img: game.background_image, // corrected property name
        released: game.released,
        added: game.added,
        metacritic: game.metacritic,
        rating: game.rating,
        ratings: game.ratings[0].title,
        parent_platforms: game.parent_platforms.map((platform: any) => {
          return platform.platform;
        }),
        genres: game.genres.map((genre: any) => {
          return genre.name;
        }),
      };
    });
    return { count, filterdData };
  }
}
export default new userService();
