
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
    this.participants = [];
    this.team = this.raw.team;
    this.raw.relationships.participants.data.forEach((p) => {
      const participant = included.find(item => item.type === p.type && item.id === p.id);
      if (participant) {
        this.participants.push(participant);
      }
    });
  }
}

module.exports = Roster;
