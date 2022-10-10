import { describe, expect, it } from 'vitest';

import classifyResult from './index';

describe('classifyResult', () => {
  it('should be {type: "success", title: "Bom!"} based on mockup values', () => {
    const sex = 'Mulher';
    const vo2MlKG = 33.751214285714276;

    const response = classifyResult({ sex, vo2MlKG });

    const result = {
      type: 'success',
      title: 'Bom!',
    };

    expect(response).toEqual(result);
  });

  it('should be {type: "success", title: "Muito bom!"} based on mockup values', () => {
    const sex = 'Homem';
    const vo2MlKG = 51.13550000000002;

    const response = classifyResult({ sex, vo2MlKG });

    const result = {
      type: 'success',
      title: 'Muito bom!',
    };

    expect(response).toEqual(result);
  });
});
