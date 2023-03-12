export function makeTeamBattingUrl(team, year = 2022) {
  return `https://www.fangraphs.com/leaders.aspx?pos=all&stats=bat&lg=all&qual=0&type=8&season=${year}&month=0&season1=2022&ind=0&team=${team}&rost=0&age=0`;
}
