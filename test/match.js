const expect = require('chai').expect;
const Match = require('../src/classes/match');
const Roster = require('../src/classes/roster');
const env = process.env;
const rawMatchData = require('./mocks/Match.json');

describe('Match', () => {
    describe('#constructor', () => {
        it('requires raw match data object', () => {
            expect(() => {new Match();}).to.throw(Error);
            expect(() => {new Match({});}).to.throw(Error);
            expect(() => {new Match(rawMatchData);}).to.not.throw(Error);
        });
    });

    describe('#raw', () => {
        let match;
        beforeEach(() => {
            match = new Match(rawMatchData);
        });
        it('exists', () => {
            expect(match).to.exist;
            expect(match.raw).to.exist;
        });
        it('is json', () => {
            expect(match.raw).to.be.an('object');
        });
    });
    describe('#id', () => {
        let match;
        beforeEach(() => {
            match = new Match(rawMatchData);
        });
        it('exists', () => {
            expect(match).to.exist;
            expect(match.id).to.exist;
        });
        it('is a GUID string', () => {
            expect(match.id).to.be.a('string');
            expect(match.id).to.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
        });
    });
    describe('#included', () => {
        let match;
        beforeEach(() => {
            match = new Match(rawMatchData);
        });
        it('exists', () => {
            expect(match).to.exist;
            expect(match.included).to.exist;
        });
        it('is an array', () => {
            expect(match.included).to.be.a('array');
        });
    });
    describe('#attributes', () => {
        let match;
        beforeEach(() => {
            match = new Match(rawMatchData);
        });
        it('exists', () => {
            expect(match).to.exist;
            expect(match.attributes).to.exist;
        });
        it('is an object', () => {
            expect(match.attributes).to.be.a('object');
        });
    });
    describe('#assets', () => {
        let match;
        beforeEach(() => {
            match = new Match(rawMatchData);
        });
        it('exists', () => {
            expect(match).to.exist;
            expect(match.assets).to.exist;
        });
        it('is an object', () => {
            expect(match.assets).to.be.a('object');
        });
    });
    describe('#rosters', () => {
        let match;
        beforeEach(() => {
            match = new Match(rawMatchData);
        });
        it('exists', () => {
            expect(match).to.exist;
            expect(match.rosters).to.exist;
        });
        it('is an array of Roster objects', () => {
            expect(match.rosters).to.be.a('array');
            match.rosters.forEach(roster => {
                expect(roster).to.be.an.instanceOf(Roster);
            });
        });
    });
    describe('#rounds', () => {
        let match;
        beforeEach(() => {
            match = new Match(rawMatchData);
        });
        it('exists', () => {
            expect(match).to.exist;
            expect(match.rounds).to.exist;
        });
        it('is an array', () => {
            expect(match.rounds).to.be.a('array');
        });
    });
    describe('#spectators', () => {
        let match;
        beforeEach(() => {
            match = new Match(rawMatchData);
        });
        it('exists', () => {
            expect(match).to.exist;
            expect(match.spectators).to.exist;
        });
        it('is an array', () => {
            expect(match.spectators).to.be.a('array');
        });
    });
    describe('#getWinner', () => {
        let match;
        beforeEach(() => {
            match = new Match(rawMatchData);
        });
        it('exists',() => {
            expect(match).to.exist;
            expect(match.getWinner).to.exist
        });
        it('is a function',() => {
            expect(match.getWinner).to.be.a('function');
        });

        it('returns roster object', () => {
            expect(match.getWinner()).to.be.a.instanceof(Roster);
        });
    });
    /*
    describe('#getStatsForPlayerId', () => {
    });
    describe('#getStatsForRosterId', () => {
    });
    */
});