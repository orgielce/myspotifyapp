import {Albums, Artist, Artists, Tracks} from "../models";

export type PresentationProps = {
  title: string;
  albums?: Albums;
  artists?: Artists;
  tracks?: Tracks;
  type: "release" | "track" | "artist" | null;
};

export type CardProps = {
  title: string;
  name: string;
  image: string;
  track?: any;
  type: "release" | "track" | "artist" | null;
};

export type NotificationType = "success" | "error" | "info" | "warning" | "open";
