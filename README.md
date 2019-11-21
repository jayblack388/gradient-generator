# Gradient Step/String Generator

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).
Check out a live demo [![Netlify Status](https://api.netlify.com/api/v1/badges/e50b3e66-9e16-4dd1-bccf-906cd0325c70/deploy-status)](https://app.netlify.com/sites/modest-kalam-3096b8/deploys)

## Installation

`yarn add gradient-steps-string-generator`

or

`npm i gradient-steps-string-generator`

## Basic Usage

With no arguments, `generateGradientCSSString` will return values from `#000` to `#fff` over 11 stops.

```
import { generateGradientCSSString } from 'gradient-steps-string-generator';

const linearString = generateGradientCSSString();
// resolves to linear-gradient(45deg, rgb(0, 0, 0), rgb(26, 26, 26), rgb(51, 51, 51), rgb(77, 77, 77), rgb(102, 102, 102), rgb(128, 128, 128), rgb(153, 153, 153), rgb(179, 179, 179), rgb(204, 204, 204), rgb(230, 230, 230), rgb(255, 255, 255));
```

### Standard Arguments

`generateGradientCSSString` takes an array of colors as it's first argument, colors can be formatted as hex, rgb(a), string, or hsl(a). The second argument is the number of color stops (plus 1).

```
import { generateGradientCSSString } from 'gradient-steps-string-generator';

const linearString = generateGradientCSSString(['red', 'blue'], 5);
// resolves to linear-gradient(45deg, rgb(255, 0, 0), rgb(204, 0, 51), rgb(153, 0, 102), rgb(102, 0, 153), rgb(51, 0, 204), rgb(0, 0, 255));
```

### Options Argument

`generateGradientCSSString` takes an optional third argument. `options` has two properties `customStepDirection` and `customStepStops`. `customStepDirection` will replace `45deg` in the returned string, you can use any string value (recommend (N)deg). `customStepStops` is an array of strings or empty indices. You can use this to apply percentage values after each new color value.

```
import { generateGradientCSSString } from 'gradient-steps-string-generator';

const linearString = generateGradientCSSString(['red', 'blue'], 5, {
        customStepDirection: 'to left',
        customStepStops: [,'30%', '50%']
      }));
// resolves to linear-gradient(to left, rgb(255, 0, 0), rgb(204, 0, 51) 30%, rgb(153, 0, 102) 50%, rgb(102, 0, 153), rgb(51, 0, 204), rgb(0, 0, 255));
```

## generateGradientSteps

This package also exposes `generateGradientSteps`, which can be helpful if you need the raw values of each gradient step. This is particularly helpful with `Canvas` and `SVG`s. `generateGradientSteps` takes the same standard arguments as `generateGradientCSSString` and no optional arguments (I'd like to add a means of configuring the offset, but it seems best to do it case by case as shown below)

```
import { generateGradientSteps } from 'gradient-steps-string-generator';

const gradientSteps = generateGradientSteps(['red', 'blue'], 5);
// resolves to ['rgb(255, 0, 0)', 'rgb(204, 0, 51)', 'rgb(153, 0, 102)', 'rgb(102, 0, 153)', 'rgb(51, 0, 204)', 'rgb(0, 0, 255)']

<svg>
  ...
  {gradientSteps.map((color, i) => (
    <stop
      key={color}
      stopColor={color}
      offset={`${(i * 100) / (gradientSteps.length - 1)}%`}
    />
  ))}
</svg>
```
