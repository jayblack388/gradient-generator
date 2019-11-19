import { scaleLinear } from 'd3-scale';

export const generateGradientSteps = (
  colors: string[] = ['#000', '#fff'],
  steps: number = 10
) => {
  const colorScale = scaleLinear<string>()
    .domain([0, 1])
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
  if (customStepStops.length > 1) {
    const transformedSteps = gradientSteps.map(
      (step, i) => `${step}${i > 0 && customStepStops[i] !== undefined ? ` ${customStepStops[i]}` : ''}`);
    const gradientCSSString = `linear-gradient(${customStepDirection}, ${transformedSteps.join(', ')});`;
    return gradientCSSString;
  }
  const gradientCSSString = `linear-gradient(${customStepDirection}, ${gradientSteps.join(', ')});`;
  return gradientCSSString;
};
