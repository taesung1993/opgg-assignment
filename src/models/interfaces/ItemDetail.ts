export interface IItemDetail {
  [key: string]: {
    name: string;
    description: string;
    collop: string;
    plaintext: string;
    consumed: boolean;
    consumeOnFull: boolean;
    image: {
      full: string;
      sprite: string;
      group: string;
      x: number;
      y: number;
      w: number;
      h: number;
    };
    gold: {
      base: number;
      purchasable: boolean;
      total: number;
      sell: number;
    };
    tags: string[];
    maps: {
      [key: string]: string;
    };
    stats: any;
    effect: {
      [key: string]: string;
    };
  };
}
