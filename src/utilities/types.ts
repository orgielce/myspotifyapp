import {Albums, Artist, Artists} from "../models";

export type PresentationProps = {
  title: string;
  albums?: Albums;
  artists?: Artists;
  type: "release" | "song" | "artist" | null;
};

export type CardProps = {
  title: string;
  name: string;
  image: string;
  type: "release" | "song" | "artist" | null;
};

export type NotificationType = "success" | "error" | "info" | "warning" | "open";
