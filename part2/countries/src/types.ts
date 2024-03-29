// Country Data Type
export interface CountryData {
  name: {
    common: string;
  };
  capital: string;
  area: number;
  languages: string[];
  flags: {
    png: string;
  };
  latlng: number[];
}

// Country Weather Data Type
export interface WeatherData {
  weather: [
    {
      icon: string;
    }
  ];
  main: {
    temp: number;
  };
  wind: {
    speed: number;
  };
}

// Country List Item Type
export interface CountryListItem {
  name: {
    common: string;
  };
  handleClick: () => void;
}

// Search Query Type
export interface SearchItem {
  searchQuery: string;
  handleSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
