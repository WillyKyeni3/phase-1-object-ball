function gameObject(){
    return{
        home: {
            teamName:"Brooklyn Nets",
            colors:["black","white"],
            players:{
                "Alan Anderson": {
                    number:0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans":{
                    number:30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez":{
                    number:11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee":{
                    number:1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry":{
                    number:31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
        },
    },

        away: {
            teamName:"Charlotte Hornets",
            colors:["Turquoise", "Purple"],
            players:{
                "Jeff Adrien": {
                    number:4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismark Biyombo":{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop":{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon":{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood":{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
           },
        },
   };
}
console.log(gameObject());

const game = gameObject();


// Returns the number of points scored by a given player.
function numPointsScored(playerName) {
  const allPlayers = { ...game.home.players, ...game.away.players };
  if (allPlayers[playerName]) {
    return allPlayers[playerName].points;
  }
  return "Player not found.";
}


// Returns the shoe size of a given player.

function shoeSize(playerName) {
  const allPlayers = { ...game.home.players, ...game.away.players };
  if (allPlayers[playerName]) {
    return allPlayers[playerName].shoe;
  }
  return "Player not found.";
}


 //Returns an array of a team's colors.
 
function teamColors(teamName) {
  if (game.home.teamName === teamName) {
    return game.home.colors;
  } else if (game.away.teamName === teamName) {
    return game.away.colors;
  }
  return "Team not found.";
}


// Returns an array of the team names.

function teamNames() {
  return [game.home.teamName, game.away.teamName];
}


 // Returns an array of jersey numbers for a given team.

function playerNumbers(teamName) {
  let teamPlayers;
  if (game.home.teamName === teamName) {
    teamPlayers = game.home.players;
  } else if (game.away.teamName === teamName) {
    teamPlayers = game.away.players;
  } else {
    return "Team not found.";
  }
  return Object.values(teamPlayers).map(player => player.number);
}


 // Returns an object of a player's stats.
 
function playerStats(playerName) {
    const allPlayers = { ...game.home.players, ...game.away.players };
    if (allPlayers[playerName]) {
        return allPlayers[playerName];
    }
    return "Player not found.";
}


// Returns the number of rebounds for the player with the largest shoe size.

function bigShoeRebounds() {
    const allPlayers = [...Object.values(game.home.players), ...Object.values(game.away.players)];
    let largestShoePlayer = allPlayers[0];

    for (let i = 1; i < allPlayers.length; i++) {
        if (allPlayers[i].shoe > largestShoePlayer.shoe) {
            largestShoePlayer = allPlayers[i];
        }
    }
    return largestShoePlayer.rebounds;
}

// --- Bonus Questions ---

// Finds the player who scored the most points.

function mostPointsScored() {
    const allPlayers = { ...game.home.players, ...game.away.players };
    let maxPoints = -1;
    let topScorer = "";

    for (const playerName in allPlayers) {
        if (allPlayers[playerName].points > maxPoints) {
            maxPoints = allPlayers[playerName].points;
            topScorer = playerName;
        }
    }
    return topScorer;
}


 //Determines the winning team based on total points.
 
function winningTeam() {
    const homeScore = Object.values(game.home.players).reduce((sum, player) => sum + player.points, 0);
    const awayScore = Object.values(game.away.players).reduce((sum, player) => sum + player.points, 0);

    if (homeScore > awayScore) {
        return game.home.teamName;
    } else if (awayScore > homeScore) {
        return game.away.teamName;
    } else {
        return "It's a tie!";
    }
}


 // Finds the player with the longest name.
 
function playerWithLongestName() {
    const allPlayerNames = [...Object.keys(game.home.players), ...Object.keys(game.away.players)];
    
    return allPlayerNames.reduce((longestName, currentName) => {
        return currentName.length > longestName.length ? currentName : longestName;
    }, "");
}

// --- Super Bonus ---

//Returns true if the player with the longest name also has the most steals.
function doesLongNameStealATon() {
    const longestNamePlayer = playerWithLongestName();
    const allPlayers = { ...game.home.players, ...game.away.players };
    
    let maxSteals = -1;
    let topStealer = "";

    for (const playerName in allPlayers) {
        if (allPlayers[playerName].steals > maxSteals) {
            maxSteals = allPlayers[playerName].steals;
            topStealer = playerName;
        }
    }
    
    return longestNamePlayer === topStealer;
}
