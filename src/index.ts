import { scaleLinear } from 'd3-scale';

export const generatePercents = (colors: string[] = ['#000', '#fff']) => {
  const n = colors.length - 1;
  const percents = colors.map((_, i) => {
    if (i === 0) return i;
    else if (i === n) return 1;
    else {
      return i / n;
    }
  });
  return percents;
};

export const generateGradientSteps = (
  colors: string[] = ['#000', '#fff'],
  steps: number = 10
) => {
  const domain = generatePercents(colors);
  const colorScale = scaleLinear<string>()
    .domain(domain)
    .range(colors);
  const gradientSteps = colorScale.ticks(steps).map(value => colorScale(value));

  return gradientSteps;
};

interface GradientCSSStringOptions {
  customStepDirection?: string;
  customStepStops?: Array<string | undefined>;
}

export const generateGradientCSSString = (
  colors: string[] = ['#000', '#fff'],
  steps: number = 10,
  options: GradientCSSStringOptions = {}
) => {
  const { customStepDirection = '45deg', customStepStops = [] } = options;
  const gradientSteps = generateGradientSteps(colors, steps);
  if (customStepStops.length > 0) {
    const transformedSteps = gradientSteps.map(
      (step, i) =>
        `${step}${
          customStepStops[i] !== undefined ? ` ${customStepStops[i]}` : ''
        }`
    );
    const gradientCSSString = `linear-gradient(${customStepDirection}, ${transformedSteps.join(
      ', '
    )})`;
    return gradientCSSString;
  }
  const gradientCSSString = `linear-gradient(${customStepDirection}, ${gradientSteps.join(
    ', '
  )})`;
  return gradientCSSString;
};
