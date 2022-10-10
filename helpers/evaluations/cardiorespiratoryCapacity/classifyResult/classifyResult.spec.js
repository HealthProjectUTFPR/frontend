import { describe, expect, it } from 'vitest';

import calculateVO2MlKg from './index';

describe('calculate VO2 l/Min', () => {
  it('should be {type: "success", title: "Bom!"} based on mockup values', () => {
    const sex = 'Mulher';
    const vo2MlKG = 33.751214285714276;

    const response = calculateVO2MlKg({ sex, vo2MlKG });

    const result = {
      type: 'success',
      title: 'Bom!',
    };

    expect(response).toEqual(result);
  });

  it('should be {type: "success", title: "Muito bom!"} based on mockup values', () => {
    const sex = 'Homem';
    const vo2MlKG = 51.13550000000002;

    const response = calculateVO2MlKg({ sex, vo2MlKG });

    const result = {
      type: 'success',
      title: 'Muito bom!',
    };

    expect(response).toEqual(result);
  });
});
