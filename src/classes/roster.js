const Participant = require('./participant.js');
/**
 * Describes a Roster from a match
 * @property {object} raw - The raw source of the object
 * @property {string} id - The id of the roster within the match
 * @property {string} shardId - The shardId of the match
 * @property {string} won - The value of whether or not the roster won. 'true' or 'false'
 * @property {number} rank - The rank of the roster within the match
 * @property {number} teamId - The teamId of the roster within the match
 * @property {object} team - n/a
 * @property {Participant[]} participants - The list of participants of the roster
 *
*/

class Roster {
  /**
   *
   * @param {*} source - An object with roster data attained through
  * a Match, or otherwise provided
   * @param {*} included - The 'included' field of the match, attained through
  * a Match, or otherwise provided
   */
  constructor(source, included) {
    this.raw = source;
    this.id = source.id;
    this.raw = included.find(item => item.type === source.type && item.id === source.id);
    if (!this.raw) {
      throw new Error('Could not find roster in included reosurces');
    }

    this.shardId = this.raw.attributes.shardId;
    this.won = this.raw.attributes.won;
    this.rank = this.raw.attributes.stats.rank;
    this.teamId = this.raw.attributes.stats.teamId;
    this.team = this.raw.team;

    this.participants = [];
    this.raw.relationships.participants.data.forEach((p) => {
      const participant = included.find(item => item.type === p.type && item.id === p.id);
      if (participant) {
        this.participants.push(new Participant(participant));
      }
    });
  }

  /**
   * Returns the total stats for the entire roster
   * 
   * @returns {object} - The object containing the sum of all the numerical stats of each
   * participant
   */
  getStatsForRoster() {
    const participantStats = this.participants.map((currentParticipant) => {
      return currentParticipant.getStats();
    });
    return participantStats.reduce((accumulator, currentParticipantStats) => {
      const keys = Object.keys(currentParticipantStats);
      // Filtering personal stats from team stats
      keys.forEach((key) => {
        switch (key) {
          case 'winPlace': // winPlace is shared between all participants
            break;
          case 'winPoints': // winPoints is determined by participant
          case 'winPointsDelta': // winPointsDelta is dependant on previous performance
          case 'killPlace': // killPlace is determined by participant
          case 'killPoints': // killPoints is determined by participant
          case 'killPointsDelta': // killPointsDelta is dependant of previous performnace
            delete accumulator[key];
            break;
          case 'timeSurvived': // timeSurvived will take the longest survivor of the roster
          case 'longestKill': // longestKill will take the longest kill of the roster
            accumulator[key] = currentParticipantStats[key] > accumulator[key] ? currentParticipantStats[key] : accumulator[key];
            break;
          default: // all other stats are combined
            accumulator[key] = currentParticipantStats[key] + accumulator[key];
        }
      });
      return accumulator;
    });
  }
}

module.exports = Roster;
