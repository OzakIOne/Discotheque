import DiscArray from "./Data";

const dataByYear = DiscArray.map((item, index) => {
  return {
    idx: index,
    element: item.year, // nirvana
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

export default dataByYear;
