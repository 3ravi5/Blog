import { ArticleInterface } from '../../../types/article.interface';

export interface GetFeedResponseInterface {
  articles: ArticleInterface[];
  articleCounts: number;
}
