import { Request } from "express";

export interface clickStats {
  total: number;
  last24h: number;
  byDate: {
    [key: string]: number;
  };
}

interface GetUrlParams {
  shortCode: string;
}

interface UrlSearchQuery {
  shortCode: string;
}
interface CreateUrlBody {
  shortCode: string;
  initialUrl: string;
  createdBy: number;
  createdAt: Date;
}

export interface UrlRequest
  extends Request<GetUrlParams, {}, CreateUrlBody, UrlSearchQuery> {}
