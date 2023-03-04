import { teams } from "../../src/utils/constants/teams";
import { makeTeamGameLogUrl } from "../../src/utils/baseballReferenceUtils";

/*
We need to collect three types of data:
- overall game statistics 
- team batting game logs
- team pitching game logs where starting pitcher is denoted as SP
*/

//constants
const baseUrl = "https://www.baseball-reference.com";
//selectors
const shareDropdownSelector = " .hasmore > span";

const expandCsvSelector = "ul > :nth-child(3) > .tooltip";

describe("template spec", () => {
  it("get batting and pitching data", () => {
    const seasonYear = 2022;
    teams.forEach((team) => {
      const currentGameLogUrl = makeTeamGameLogUrl(
        team.abbreviation,
        seasonYear
      );
      cy.visit(currentGameLogUrl);
      cy.get("#csv_team_batting_gamelogs");
    });
  });
});

describe("Get Data", function () {
  it("visit each team page", function () {});
});
