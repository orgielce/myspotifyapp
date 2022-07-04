import {Albums, Artist} from "../models";

export type PresentationProps = {
  title: string;
  albums?: Albums;
  artists?: Artist;
  type: "release" | "song" | "artist" | null;
};

export type CardProps = {
  title: string;
  likes: string;
  order: string;
  image: string;
  type: "release" | "song" | "artist" | null;
};
