import { describe, expect, it } from 'vitest';
import density from './index';

describe('calculate density', () => {
  it('should return 1,04 based on mockup values', () => {
    const genre = 'Mulher';
    const pleats = 43;

    const response = density(genre, pleats);
    const result = 1.04;

    expect(+response.toFixed(2)).toBe(+result);
  });
});
