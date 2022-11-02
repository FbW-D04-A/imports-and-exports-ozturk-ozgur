//ACTIONS



const getTeamNames = (teams) => teams.map((team) => team.teamName);

const getHowManyTeams = (teams) => teams.length;

const getTeamPlayersFirstName = (team) =>
  team.players.map((player) => player.firstName);

console.log("getTeamNames:", getTeamNames(teams));
console.log("getHowManyTeams:", getHowManyTeams(teams));
console.log("getTeamPlayersFirstName:", getTeamPlayersFirstName(teamA));