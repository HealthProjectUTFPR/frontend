import { describe, expect, it } from 'vitest';

import calculateEstimatedMuscleMass from './index';

describe('calculateEstimatedMuscleMass', () => {
  it('if sex="Homem" should return +-33.376 based on mockup values', () => {
    const weight = 90;
    const age = 70;
    const height = 1.92;
    const race = 'Branco';
    const sex = 'Homem';

    const response = calculateEstimatedMuscleMass({
      weight,
      age,
      height,
      race,
      sex,
    });
    const result = 33.376;

    expect(+response).toBeCloseTo(+result);
  });

  it('if sex="Mulher" should return +-26.776 based on mockup values', () => {
    const weight = 90;
    const age = 70;
    const height = 1.92;
    const race = 'Branco';
    const sex = 'Mulher';

    const response = calculateEstimatedMuscleMass({
      weight,
      age,
      height,
      race,
      sex,
    });
    const result = 26.776;

    expect(+response).toBeCloseTo(+result);
  });

  it("should return '' when there is not weight ", () => {
    const weight = '';
    const age = 70;
    const height = 1.92;
    const race = 'Branco';
    const sex = 'Homem';

    const response = calculateEstimatedMuscleMass({
      weight,
      age,
      height,
      race,
      sex,
    });

    const result = '';

    expect(response).toBe(result);
  });
});
