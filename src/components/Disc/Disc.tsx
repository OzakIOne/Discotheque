export default class Disc {
  image: string;
  title: string;
  artist: string;
  genre: string;
  tracks: Array<string> | undefined;
  year: number;

  constructor(
    image: string,
    title: string,
    artist: string,
    genre: string,
    tracks: Array<string> | undefined,
    year: number
  ) {
    this.image = image;
    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.tracks = tracks;
    this.year = year;
  }
}
