export const BASE_TOKEN_URL = "https://accounts.spotify.com/api/token";
export const BASE_APP_URL = "https://api.spotify.com/v1";

export const ClientId = "2514b543af194b0eac9d3d56df72a2bb";
export const ClientSecret = "d04b7ba73ffc47778af5791b54b3d888";

export type PresentationProps = {
  title: string;
  type: "release" | "song" | "artist" | null;
};

export type CardProps = {
  title: string;
  likes: string;
  order: string;
  image: string;
  type: "release" | "song" | "artist" | null;
};
