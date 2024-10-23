import { ProfileInterface } from "./profile.interface";

export interface ArticleInterface {
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: number;
  updatedAt: string;
  author: ProfileInterface
}
