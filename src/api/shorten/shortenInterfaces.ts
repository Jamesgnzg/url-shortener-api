export interface clickStats {
  total: number;
  last24h: number;
  byDate: {
    [key: string]: number;
  };
}
