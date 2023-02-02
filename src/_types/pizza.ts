export type Pizza = {
  id: number;
  name: string;
  ingredients: string[];
  img: string;

  price: {
    crust: {
      cheesy: number;
      cheesySausage: number;
    };
    default: number;
    size: {
      small: number;
      medium: number;
      large: number;
    };
  }; //Дима напиши нормальную схему пж
  classifications: {
    new: boolean;
    spicy: boolean;
    vegetarian: boolean;
  }; //Дима напиши нормальную схему пж
};
