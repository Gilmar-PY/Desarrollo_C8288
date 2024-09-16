export type responseItemType = {
  id: string;
  name: string;
};

export type WeatherDetailType = {
  zipcode: string;
  weather: string;
  temp?: number;
};

export interface WeatherQueryInterface {
  zipcode: string;
}

