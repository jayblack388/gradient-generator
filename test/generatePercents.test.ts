import { generatePercents } from '../src';
describe('generatePercents', () => {
  it('works without args', () => {
    expect(generatePercents()).toEqual([0, 1]);
  });
});
describe('generatePercentsWithArgs', () => {
  it('["red","blue","green"]', () => {
    expect(generatePercents(["red","blue","green"])).toEqual([0, .5, 1]);
  });
});
