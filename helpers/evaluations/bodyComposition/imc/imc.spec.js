import { describe, expect, it } from 'vitest';
import imc from './index';

describe('calculate IMC', () => {
  it('should return 27,04 based on mockup values', () => {
    const weight = 100.2;
    const height = 192.5;

    const response = imc(weight, height);
    const result = 27.04;

    expect(+response.toFixed(2)).toBe(+result);
  });
});
