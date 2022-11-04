import { describe, expect, it } from 'vitest';

import calculateIndexOfEstimatedMuscleMassPerStature from './index';

describe('calculateIndexOfEstimatedMuscleMassPerStature', () => {
  it('should return +-7.26 based on mockup values', () => {
    const height = 1.92;
    const estimatedMuscleMass = 26.776;

    const response = calculateIndexOfEstimatedMuscleMassPerStature({ height, estimatedMuscleMass });
    const result = 7.26;

    expect(+response).toBeCloseTo(+result);
  });

  it('should return "" when we dont pass height', () => {
    const height = '';
    const estimatedMuscleMass = 10;

    const response = calculateIndexOfEstimatedMuscleMassPerStature({ height, estimatedMuscleMass });
    const result = '';

    expect(+response).toBeCloseTo(+result);
  });
});
