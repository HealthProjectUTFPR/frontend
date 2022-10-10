import {
  describe, expect, it,
} from 'vitest';

import calculateVO2LMin from './index';

describe('calculate VO2 l/Min', () => {
  it('should return 2.7 based on mockup values', () => {
    const weight = 87;
    const finalFC = 170;
    const time = 10;
    const age = 70;
    const sex = 'Mulher';

    const response = calculateVO2LMin({
      weight, finalFC, time, age, sex,
    });

    const result = 2.70;

    expect(+response).toBe(+result);
  });

  it("should return '' when there is not weight ", () => {
    const weight = '';
    const finalFC = 170;
    const time = 10;
    const age = 70;
    const sex = 'Mulher';

    const response = calculateVO2LMin({
      weight, finalFC, time, age, sex,
    });

    const result = '';

    expect(+response).toBe(+result);
  });
});
