import DiscArray from "./Data";

const dataByArtist = DiscArray.map((item, index) => {
  return {
    idx: index,
    element: item.artist, // nirvana
    data: [item], // {title: "Nevermind", artist: "Nirvana", ...}
  };
});

// const propsData = [
//   {
//     title: "Artist",
//     data: ["Disc1", "Disc2", "Disc3"],
//   },
//   {
//     title: "Year",
//     data: ["Element C", "Element D", "Element E"],
//   },
//   {
//     title: "Genre",
//     data: ["Element C", "Element D", "Element E"],
//   },
// ];

export default dataByArtist;
