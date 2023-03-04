export const baseUrl = "https://www.baseball-reference.com";

export function makeTeamGameLogUrl(teamAbbreviation, year = 2022) {
  return `${baseUrl}/teams/tgl.cgi?team=${teamAbbreviation}&year=${year}`;
}

export function makeTeamGameUrl(teamAbbreviation, year = 2022, month, day) {
  
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  return `${baseUrl}/boxes/${teamAbbreviation}/${teamAbbreviation}${year}${month}${day}0.shtml`;
}
