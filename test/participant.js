const expect = require('chai').expect;
const Match = require('../src/classes/match');
const Participant = require('../src/classes/participant');
const rawMatchData = require('./mocks/Match.json');

describe('Participant', () => {
  let match;
  let rawParticipant;
  beforeEach(() => {
    match = new Match(rawMatchData);
    rawParticipant = match.raw.included.find((i) => {
      return i.type === 'participant';
    });
  });
  describe('#constructor', () => {
    it('requires a raw roster object and raw included array', () => {
      //Incorrect
      expect(() => {new Participant();}).to.throw(Error);
      expect(() => {new Participant({});}).to.throw(Error);
      //Correct
      expect(() => {new Participant(rawParticipant);}).to.not.throw(Error);
    });
  });
  describe('#raw', () => {
    let participant
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.raw).to.exist;
    });
    it('is an object', () => {
      expect(participant.raw).to.be.an('object');
    });
  });
  describe('#id', () => {
    let participant
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.id).to.exist;
    });
    it('is a GUID string', () => {
      expect(participant.id).to.be.a('string');
      expect(participant.id).to.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });
  });
  describe('#DBNOs', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.DBNOs).to.exist;
    });
    it('is an number', () => {
      expect(participant.DBNOs).to.be.a('number');
    });
  });
  describe('#assists', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.assists).to.exist;
    });
    it('is an number', () => {
      expect(participant.assists).to.be.a('number');
    });
  });
  describe('#boosts', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.boosts).to.exist;
    });
    it('is an number', () => {
      expect(participant.boosts).to.be.a('number');
    });
  });
  describe('#damageDealt', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.damageDealt).to.exist;
    });
    it('is an number', () => {
      expect(participant.damageDealt).to.be.a('number');
    });
  });
  describe('#deathType', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.deathType).to.exist;
    });
    it('is a string', () => {
      expect(participant.deathType).to.be.a('string');
    });
  });
  describe('#headshotKills', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.headshotKills).to.exist;
    });
    it('is an number', () => {
      expect(participant.headshotKills).to.be.a('number');
    });
  });
  describe('#heals', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.heals).to.exist;
    });
    it('is an number', () => {
      expect(participant.heals).to.be.a('number');
    });
  });
  describe('#killPlace', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.killPlace).to.exist;
    });
    it('is an number', () => {
      expect(participant.killPlace).to.be.a('number');
    });
  });
  describe('#killPoints', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.killPoints).to.exist;
    });
    it('is an number', () => {
      expect(participant.killPoints).to.be.a('number');
    });
  });
  describe('#killPointsDelta', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.killPointsDelta).to.exist;
    });
    it('is an number', () => {
      expect(participant.killPointsDelta).to.be.a('number');
    });
  });
  describe('#killStreaks', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.killStreaks).to.exist;
    });
    it('is an number', () => {
      expect(participant.killStreaks).to.be.a('number');
    });
  });
  describe('#kills', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.kills).to.exist;
    });
    it('is an number', () => {
      expect(participant.kills).to.be.a('number');
    });
  });
  describe('#lastKillPoints', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.lastKillPoints).to.exist;
    });
    it('is an number', () => {
      expect(participant.lastKillPoints).to.be.a('number');
    });
  });
  describe('#lastWinPoints', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.lastWinPoints).to.exist;
    });
    it('is an number', () => {
      expect(participant.lastWinPoints).to.be.a('number');
    });
  });
  describe('#longestKill', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.longestKill).to.exist;
    });
    it('is an number', () => {
      expect(participant.longestKill).to.be.a('number');
    });
  });
  describe('#mostDamage', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.mostDamage).to.exist;
    });
    it('is an number', () => {
      expect(participant.mostDamage).to.be.a('number');
    });
  });
  describe('#name', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.name).to.exist;
    });
    it('is a string', () => {
      expect(participant.name).to.be.a('string');
    });
  });
  describe('#playerId', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.playerId).to.exist;
    });
    it('is a string', () => {
      expect(participant.playerId).to.be.a('string');
    });
  });
  describe('#revives', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.revives).to.exist;
    });
    it('is an number', () => {
      expect(participant.revives).to.be.a('number');
    });
  });
  describe('#rideDistance', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.rideDistance).to.exist;
    });
    it('is an number', () => {
      expect(participant.rideDistance).to.be.a('number');
    });
  });
  describe('#roadKills', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.roadKills).to.exist;
    });
    it('is an number', () => {
      expect(participant.roadKills).to.be.a('number');
    });
  });
  describe('#teamKills', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.teamKills).to.exist;
    });
    it('is an number', () => {
      expect(participant.teamKills).to.be.a('number');
    });
  });
  describe('#timeSurvived', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.timeSurvived).to.exist;
    });
    it('is an number', () => {
      expect(participant.timeSurvived).to.be.a('number');
    });
  });
  describe('#vehicleDestroys', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.vehicleDestroys).to.exist;
    });
    it('is an number', () => {
      expect(participant.vehicleDestroys).to.be.a('number');
    });
  });
  describe('#walkDistance', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.walkDistance).to.exist;
    });
    it('is an number', () => {
      expect(participant.walkDistance).to.be.a('number');
    });
  });
  describe('#weaponsAcquired', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.weaponsAcquired).to.exist;
    });
    it('is an number', () => {
      expect(participant.weaponsAcquired).to.be.a('number');
    });
  });
  describe('#winPlace', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.winPlace).to.exist;
    });
    it('is an number', () => {
      expect(participant.winPlace).to.be.a('number');
    });
  });
  describe('#winPoints', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.winPoints).to.exist;
    });
    it('is an number', () => {
      expect(participant.winPoints).to.be.a('number');
    });
  });
  describe('#winPointsDelta', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.winPointsDelta).to.exist;
    });
    it('is an number', () => {
      expect(participant.winPointsDelta).to.be.a('number');
    });
  });

  // Functions
  describe('#getStats', () => {
    let participant;
    beforeEach(() => {
      participant = new Participant(rawParticipant);
    });
    it('exists', () => {
      expect(participant).to.exist;
      expect(participant.getStats).to.exist;
    });
    it('is a function', () => {
      expect(participant.getStats).to.be.a('function');
    });
    it('returns numerical stat object', () => {
      expect(participant.getStats()).to.be.an('object');
    });
  });
});