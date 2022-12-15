function sortDiscs(discs: any, groupBy: string) {
  const groups = {};
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
