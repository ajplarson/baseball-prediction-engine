# pulling batting/pitching data

1. go to a url like `https://www.fangraphs.com/leaders.aspx?pos=all&stats=bat&lg=all&qual=0&type=8&season=2022&month=0&season1=2022&ind=0&team=24&rost=1&age=0&filter=&players=0&startdate=&enddate=&page=1_50`

2. ensure batting/pitching is selected
3. ensure active roster is checked
4. expand page size to include all players
5. click export and repeat

# game specific data

pulling data will most likely occur from here a url like the following
`https://www.fangraphs.com/boxscore.aspx?date=2022-11-05&team=Astros&dh=0&season=2022`

will need to figure out a way to automate pulling game data since 3k + games

# going to start using mlb stats api for fetching

most documentation is spotty, chatGPT knows some of the endpoints

`teams.json` is a dump of all team info, wrote a loop to get all division and league ids from it for stats requests

`seasons.json` is a dump of last 5 years of seasons
