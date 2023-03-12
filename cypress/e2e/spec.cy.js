import { teams } from "../../src/utils/constants/teams";
import { makeTeamGameLogUrl } from "../../src/utils/baseballReferenceUtils";
import { makeTeamBattingUrl } from "../../src/utils/fangraphsUtils";

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
    for (let teamNumber = 0; teamNumber < 31; teamNumber++) {
      const battingUrl = makeTeamBattingUrl(teamNumber, seasonYear);
      cy.visit(battingUrl);
      cy.get("#LeaderBoard1_cmdCSV").click();
      cy.wait(5000);
      cy.get("#wrapper").click();
    }
  });
});

describe("Get Data", function () {
  it("visit each team page", function () {});
});
