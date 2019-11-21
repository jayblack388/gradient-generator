import { generateGradientCSSString } from '../src';

describe('generateGradientCSSString', () => {
  it('works without args', () => {
    expect(generateGradientCSSString()).toEqual(
      `linear-gradient(45deg, rgb(0, 0, 0), rgb(26, 26, 26), rgb(51, 51, 51), rgb(77, 77, 77), rgb(102, 102, 102), rgb(128, 128, 128), rgb(153, 153, 153), rgb(179, 179, 179), rgb(204, 204, 204), rgb(230, 230, 230), rgb(255, 255, 255))`
    );
  });
});

describe('generateGradientCSSString', () => {
  it('works with [red, blue] and 6 steps', () => {
    expect(generateGradientCSSString(['red', 'blue'], 5)).toEqual(
      `linear-gradient(45deg, rgb(255, 0, 0), rgb(204, 0, 51), rgb(153, 0, 102), rgb(102, 0, 153), rgb(51, 0, 204), rgb(0, 0, 255))`
    );
  });
});

describe('generateGradientCSSString', () => {
  it('works with [red, blue], 6 steps, and customStepDirection', () => {
    expect(
      generateGradientCSSString(['red', 'blue'], 5, {
        customStepDirection: '.25 turn',
      })
    ).toEqual(
      `linear-gradient(.25 turn, rgb(255, 0, 0), rgb(204, 0, 51), rgb(153, 0, 102), rgb(102, 0, 153), rgb(51, 0, 204), rgb(0, 0, 255))`
    );
  });
});

describe('generateGradientCSSString', () => {
  it('works with [red, blue], 6 steps, customStepDirection, and customStepStops', () => {
    expect(
      generateGradientCSSString(['red', 'blue'], 5, {
        customStepDirection: 'to left',
        customStepStops: [, '30%', '50%'],
      })
    ).toEqual(
      `linear-gradient(to left, rgb(255, 0, 0), rgb(204, 0, 51) 30%, rgb(153, 0, 102) 50%, rgb(102, 0, 153), rgb(51, 0, 204), rgb(0, 0, 255))`
    );
  });
});
