import { generateGradientSteps } from '../src';

describe('generateGradientSteps', () => {
  it('works without args', () => {
    expect(generateGradientSteps()).toEqual([
      'rgb(0, 0, 0)',
      'rgb(26, 26, 26)',
      'rgb(51, 51, 51)',
      'rgb(77, 77, 77)',
      'rgb(102, 102, 102)',
      'rgb(128, 128, 128)',
      'rgb(153, 153, 153)',
      'rgb(179, 179, 179)',
      'rgb(204, 204, 204)',
      'rgb(230, 230, 230)',
      'rgb(255, 255, 255)',
    ]);
  });
});

describe('generateGradientSteps', () => {
  it('works with [red, blue] and 6 steps', () => {
    expect(generateGradientSteps(['red', 'blue'], 5)).toEqual([
      'rgb(255, 0, 0)',
      'rgb(204, 0, 51)',
      'rgb(153, 0, 102)',
      'rgb(102, 0, 153)',
      'rgb(51, 0, 204)',
      'rgb(0, 0, 255)',
    ]);
  });
});

describe('generateGradientSteps', () => {
  it('works with 3 colors', () => {
    expect(generateGradientSteps(['red', 'blue', 'green'])).toEqual([
      'rgb(255, 0, 0)',
      'rgb(204, 0, 51)',
      'rgb(153, 0, 102)',
      'rgb(102, 0, 153)',
      'rgb(51, 0, 204)',
      'rgb(0, 0, 255)',
      'rgb(0, 26, 204)',
      'rgb(0, 51, 153)',
      'rgb(0, 77, 102)',
      'rgb(0, 102, 51)',
      'rgb(0, 128, 0)',
    ]);
  });
});
