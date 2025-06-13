export type AdventureItem = {
  way: string;
  date: string;
  image: string;
  price: string;
};

export type ArticlesItem = {
  date: string;
  name: string;
  image: string;
  author: string;
  title: string;
};

export type CountryItem = {
  country: string;
  city: string;
  image: string;
};

export type DestinationsItem = {
  country: string;
  city: string;
  image: string;
  price: string;
};

export type TestimonialsItem = {
  response: string;
  name: string;
  image: string;
  role: string;
};

export type Direction = 'up' | 'down' | 'left' | 'right'