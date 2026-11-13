export interface Icategory {
  id: number;
  nameBn: string;
  slug: string;
  icon: string;
  descriptionBn: string;
}
export interface Iproduct {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: number;
    dir: string;
    pct: number;
    markets: {
        market: string;
        division: string;
        min: number;
        max: number;
    }[];
}

