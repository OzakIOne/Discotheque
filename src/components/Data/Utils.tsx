type Disc = {
  image: string;
  title: string;
  artist: string;
  genre: string;
  tracks: Array<string> | undefined;
  year: number;
};

type SortType = 'year' | 'genre' | 'artist';

type Groups = {
  [key: string]: Disc[];
};

function sortDiscs(discs: Disc[], groupBy: SortType) {
  const groups: Groups = {};
  for (const disc of discs) {
    const groupKey = disc[groupBy];
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(disc);
  }
  return Object.entries(groups).map(([key, value]) => ({ type: key, value }));
}

export default sortDiscs;
