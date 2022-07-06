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
  id?: string;
  type: "release" | "track" | "artist" | null;
};

export type RelatedArtistsProps = {
  artist: Artist;
};

export type ArtistHistoryProps = {
  artist: Artist;
};

export type NotificationType = "success" | "error" | "info" | "warning" | "open";
