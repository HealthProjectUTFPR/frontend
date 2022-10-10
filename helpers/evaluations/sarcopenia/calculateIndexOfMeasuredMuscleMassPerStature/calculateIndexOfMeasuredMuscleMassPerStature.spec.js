import { describe, expect, it } from 'vitest';

import calculateIndexOfMeasuredMuscleMassPerStature from './index';

describe('calculateIndexOfMeasuredMuscleMassPerStature', () => {
  it('should return +-2.71 based on mockup values', () => {
    const height = 1.92;
    const measuredMuscleMass = 10;

    const response = calculateIndexOfMeasuredMuscleMassPerStature({ height, measuredMuscleMass });
    const result = 2.71;

    expect(+response).toBeCloseTo(+result);
  });

  it('should return "" when dont pass height', () => {
    const height = '';
    const measuredMuscleMass = 10;

    const response = calculateIndexOfMeasuredMuscleMassPerStature({ height, measuredMuscleMass });
    const result = '';

    expect(+response).toBeCloseTo(+result);
  });
});
