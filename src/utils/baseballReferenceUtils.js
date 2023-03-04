export const baseUrl = "https://www.baseball-reference.com";

export function makeTeamGameLogUrl(teamAbbreviation, year = 2022) {
  return `${baseUrl}/teams/tgl.cgi?team=${teamAbbreviation}&year=${year}`;
}
