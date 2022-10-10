import { describe, expect, it } from 'vitest';

import calculateVO2MlKg from './index';

describe('calculateVO2MlKg', () => {
  it('should return 31.08 based on mockup values', () => {
    const weight = 87;
    const vo2Lmin = 2.7036985;

    const response = calculateVO2MlKg({ weight, vo2Lmin });

    const result = 31.08;

    expect(+response.toFixed(2)).toBe(+result);
  });

  it("should return '' when there is not weight ", () => {
    const weight = '';
    const vo2Lmin = 2.7036985;

    const response = calculateVO2MlKg({ weight, vo2Lmin });

    const result = '';

    expect(+response).toBe(+result);
  });
});
