import { describe, expect, it } from 'vitest';
import bodyFat from './index';

describe('calculate body fat', () => {
  it('should return 24,02 based on mockup values', () => {
    const density = 1.04425280731035;
    const response = bodyFat(density);
    const result = 24.02;

    expect(+response.toFixed(2)).toBe(+result);
  });
});
