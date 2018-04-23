const Roster = require('./roster.js');
const Participant = require('./participant.js');

/**
 * Describes a Match
 *
 * @property {object} raw - The raw source of the object
 * @property {string} id - The id of the roster within the match
 * @property {date} createdAt - The time the match data was created 
 * @property {number} duration - The duration of the match 
 * @property {string} gameMode - The game mode of the match. ex: 'squad-fpp'
 * @property {string} mapName - The map name of the match. ex: 'Erangel-Main'
 * @property {string} shardId - The shard of the match. ex: 'pc-na'
 * @property {*} stats n/a 
 * @property {*} tags n/a 
 * @property {string} titleId= source.data.attributes.titleId;
 * @property {Assets[]} assets - The telemetry assets of the match
 * @property {Roster[]} rosters - List of rosters within the game
 * @property {object} participants - Object containing participants
 * @property {*} rounds n/a
 * @property {*} spectators n/a
 * @property {object} included - The list of included resources relevant to the match
*/

class Match {
  /**
   * Constructs a Match instance from a source object
   *
   * @param {*} source - The source object of the match, attained though loadMatchById,
   * or otherwise provided
   */
  constructor(source) {
    this.raw = source;
    this.id = source.data.id;
    this.included = source.included;

    //attributes
    this.createdAt = source.data.attributes.createdAt;
    this.duration = source.data.attributes.duration;
    this.gameMode = source.data.attributes.gameMode;
    this.mapName= source.data.attributes.mapName;
    this.shardId = source.data.attributes.shardId; 
    this.stats = source.data.attributes.stats;
    this.tags = source.data.attributes.tags;
    this.titleId= source.data.attributes.titleId;

    this.assets = source.data.relationships.assets;
    this.rosters = [];
    this.participants = {};
    this.rounds = [];
    this.spectators = [];

    source.data.relationships.rosters.data.forEach((r) => {
      const roster = new Roster(r, this.included);
      this.rosters.push(roster);
    });
    source.included.forEach((i) => {
      if (i.type === 'participant') {
        const participant = new Participant(i);
        this.participants[participant.playerId] = participant;
      }
    });
  }

  /**
   * Finds the winning roster of the match and returns it
   *
   * @returns {Roster} - The winning roster
  */
  getWinner() {
    return this.rosters.find((r) => {
      return r.won === 'true';
    });
  }

  /**
   * Finds the winning roster of the match and returns it
   *
   * @param {string} playerId - The playerId of the participant
   * @returns {Participant || undefined} - The participant or undefined if not present
  */
  getStatsForPlayerId(playerId) {
    return this.participants[playerId];
  }

  /*
  getStatsForRosterId(rosterId) {

  }
  */
}

module.exports = Match;
