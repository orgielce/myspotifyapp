export interface Releases {
  albums: Albums | undefined;
  isLoading: boolean;
  error: boolean;
}

export interface SearchArtists {
  artists: Artists | undefined;
  filter: string | undefined;
  isLoading: boolean;
  error: boolean;
}

export interface SearchTracks {
  tracks: Tracks | undefined;
  filter: string | undefined;
  isLoading: boolean;
  error: boolean;
}

export interface Albums {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface Tracks {
  href: string;
  items: any;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  isLoading: boolean;
  error: boolean;
}

export interface Artists {
  href: string;
  items: Artist[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  isLoading: boolean;
  error: boolean;
}

export interface Artist {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
  images: Image[];
  popularity?: number;
  related_artists?: [];
  albums?: [];
  tracks?: [];
}

export interface Item {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}
