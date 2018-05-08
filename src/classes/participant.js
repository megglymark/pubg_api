
/**
 * Describes a participant from a match
 * @property {object} raw - The raw source of the object
 * @property {string} id - The id of the participant within the match
 * @property {string} playerId - The playerId of the participant
 * @property {string} shardId - The shardId of the participant within the match
 * @property {string} actor - The actor of the participant within the match
 * @property {number} DBNOs - The DBNOs of the participant within the match
 * @property {number} assists - The assists of the participant within the match
 * @property {number} boosts - The boosts of the participant within the match
 * @property {number} damageDealt - The damageDealt of the participant within the match
 * @property {string} deathType - The deathType of the participant within the match
 * @property {number} headshotKills - The headshotKills of the participant within the match
 * @property {number} heals - The heals of the participant within the match
 * @property {number} killPlace - The killPlace of the participant within the match
 * @property {number} killPoints - The killPoints of the participant within the match
 * @property {number} killPointsDelta - The killPointsDelta of the participant within the match
 * @property {number} killStreaks - The killStreaks of the participant within the match
 * @property {number} kills - The kills of the participant within the match
 * @property {number} lastKillPoints - The lastKillPoints of the participant within the match
 * @property {number} lastWinPoints - The lastWinPoints of the participant within the match
 * @property {number} longestKill - The longestKill of the participant within the match
 * @property {number} mostDamage - The mostDamage of the participant within the match
 * @property {string} name - The name of the participant within the match
 * @property {number} revives - The revives of the participant within the match
 * @property {number} rideDistance - The rideDistance of the participant within the match
 * @property {number} roadKills - The roadKills of the participant within the match
 * @property {number} teamKills - The teamKills of the participant within the match
 * @property {number} timeSurvived - The timeSurvived of the participant within the match
 * @property {number} vehicleDestroys - The vehicleDestroys of the participant within the match
 * @property {number} walkDistance - The walkDistance of the participant within the match
 * @property {number} weaponsAcquired - The weaponsAcquired of the participant within the match
 * @property {number} winPlace - The winPlace of the participant within the match
 * @property {number} winPoints - The winPoints of the participant within the match
 * @property {number} winPointsDelta - The winPointsDelta of the participant within the match* 
 * 
 *
*/

class Participant {
  /**
   *
   * @param {*} source - An object with particpant data attained through
  * a Match, or otherwise provided
    */
  constructor(source) {
    this.raw = source;
    this.id = source.id;
    this.playerId = source.attributes.stats.playerId;
    this.shardId = source.attributes.shardId;
    this.DBNOs = source.attributes.stats.DBNOs;
    this.assists = source.attributes.stats.assists;
    this.boosts = source.attributes.stats.boosts;
    this.damageDealt = source.attributes.stats.damageDealt;
    this.deathType = source.attributes.stats.deathType;
    this.headshotKills = source.attributes.stats.headshotKills;
    this.heals = source.attributes.stats.heals;
    this.killPlace = source.attributes.stats.killPlace;
    this.killPoints = source.attributes.stats.killPoints;
    this.killPointsDelta = source.attributes.stats.killPointsDelta;
    this.killStreaks = source.attributes.stats.killStreaks;
    this.kills = source.attributes.stats.kills;
    this.lastKillPoints = source.attributes.stats.lastKillPoints;
    this.lastWinPoints = source.attributes.stats.lastWinPoints;
    this.longestKill = source.attributes.stats.longestKill;
    this.mostDamage = source.attributes.stats.mostDamage;
    this.name = source.attributes.stats.name;
    this.revives = source.attributes.stats.revives;
    this.rideDistance = source.attributes.stats.rideDistance;
    this.roadKills = source.attributes.stats.roadKills;
    this.teamKills = source.attributes.stats.teamKills;
    this.timeSurvived = source.attributes.stats.timeSurvived;
    this.vehicleDestroys = source.attributes.stats.vehicleDestroys;
    this.walkDistance = source.attributes.stats.walkDistance;
    this.weaponsAcquired = source.attributes.stats.weaponsAcquired;
    this.winPlace = source.attributes.stats.winPlace;
    this.winPoints = source.attributes.stats.winPoints;
    this.winPointsDelta = source.attributes.stats.winPointsDelta;
  }
  

  /**
   * Returns the numerical stats for a participant
   * 
   * @returns {object} - The object containing all the numerical stats of a participant
   */
  getStats() {
    const stats = Object.keys(this).map((key) => {
      return {[key]: this[key]};
    }).reduce((result,currentKeyValuePair) => {
      const key = Object.keys(currentKeyValuePair)[0];
      if (typeof(currentKeyValuePair[key]) === 'number') {
        result[key] = currentKeyValuePair[key];
      }
      return result;
    }, {});
    return stats;
  }
}
  
module.exports  =  Participant;
  