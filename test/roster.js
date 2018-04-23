const expect = require('chai').expect;
const Match = require('../src/classes/match');
const Roster = require('../src/classes/roster');
const env = process.env;
const rawMatchData = require('./mocks/Match.json');

describe('Roster', () => {
    let match;
    beforeEach(() => {
        match = new Match(rawMatchData);
    });
    describe('#constructor', () => {
        it('requires a raw roster object and raw included array', () => {
            //Incorrect
            expect(() => {new Roster();}).to.throw(Error);
            expect(() => {new Roster({},{});}).to.throw(Error);
            expect(() => {new Roster(match.raw.data.relationships.rosters.data[0],{});}).to.throw(Error);
            expect(() => {new Roster({},match.included);}).to.throw(Error);
            //Correct
            expect(() => {new Roster(match.raw.data.relationships.rosters.data[0],match.included);}).to.not.throw(Error);
        });
    });
    describe('#raw', () => {
        let roster;
        beforeEach(() => {
            roster = new Roster(match.raw.data.relationships.rosters.data[0],match.included);
        });
        it('exists', () => {
            expect(roster).to.exist;
            expect(roster.raw).to.exist;
        });
        it('is an object', () => {
            expect(roster.raw).to.be.an('object');
        });
    });
    describe('#shardId', () => {
        let roster;
        beforeEach(() => {
            roster = new Roster(match.raw.data.relationships.rosters.data[0],match.included);
        });
        it('exists', () => {
            expect(roster).to.exist;
            expect(roster.shardId).to.exist;
        });
        it('is an string', () => {
            expect(roster.shardId).to.be.a('string');
        });
    });
    describe('#won', () => {
        let roster;
        beforeEach(() => {
            roster = new Roster(match.raw.data.relationships.rosters.data[0],match.included);
        });
        it('exists', () => {
            expect(roster).to.exist;
            expect(roster.won).to.exist;
        });
        it('is an string', () => {
            expect(roster.won).to.be.a('string');
            expect(roster.won).to.match(/true|false/);
        });
    });
    describe('#rank', () => {
        let roster;
        beforeEach(() => {
            roster = new Roster(match.raw.data.relationships.rosters.data[0],match.included);
        });
        it('exists', () => {
            expect(roster).to.exist;
            expect(roster.rank).to.exist;
        });
        it('is an ', () => {
            expect(roster.rank).to.be.a('number');
        });
    });
    describe('#teamId', () => {
        let roster;
        beforeEach(() => {
            roster = new Roster(match.raw.data.relationships.rosters.data[0],match.included);
        });
        it('exists', () => {
            expect(roster).to.exist;
            expect(roster.teamId).to.exist;
        });
        it('is an number', () => {
            expect(roster.teamId).to.be.a('number');
        });
    });
    describe('#team', () => {
        let roster;
        beforeEach(() => {
            roster = new Roster(match.raw.data.relationships.rosters.data[0],match.included);
        });
        /*
        it('exists', () => {
            expect(roster).to.exist;
            expect(roster.team).to.exist;
        });
        */
        /*
        it('is an array', () => {
            expect(roster.raw).to.be.an('array');
        });
        */
    });
    describe('#participants', () => {
        let roster;
        beforeEach(() => {
            roster = new Roster(match.raw.data.relationships.rosters.data[0],match.included);
        });
        it('exists', () => {
            expect(roster).to.exist;
            expect(roster.participants).to.exist;
        });
        it('is an array', () => {
            expect(roster.participants).to.be.an('array');
        });
    });
});