import { describe, expect, it } from 'vitest';

import classifyResult from './index';

describe('classifyResult', () => {
  it('if sex === Homem should be hasSarcopenia=false based on mockup values', () => {
    const sex = 'Homem';
    const walkingSpeed = 0.88;
    const handgripStrength = 32;
    const muscleMassIndex = 2.71;

    const response = classifyResult({
      sex,
      walkingSpeed,
      handgripStrength,
      muscleMassIndex,
    });

    const result = {
      type: 'success',
      title: 'Sem sarcopenia',
      description:
        'De acordo com os dados informados, o paciente não sofre de Sarcopenia.',
      hasSarcopenia: false,
    };

    expect(response).toEqual(result);
  });

  it('if sex === Mulher should be hasSarcopenia=false based on mockup values', () => {
    const sex = 'Mulher';
    const walkingSpeed = 0.88;
    const handgripStrength = 32;
    const muscleMassIndex = 2.71;

    const response = classifyResult({
      sex,
      walkingSpeed,
      handgripStrength,
      muscleMassIndex,
    });

    const result = {
      type: 'success',
      title: 'Sem sarcopenia',
      description:
        'De acordo com os dados informados, o paciente não sofre de Sarcopenia.',
      hasSarcopenia: false,
    };

    expect(response).toEqual(result);
  });

  it('if sex === Homem should be hasSarcopenia=true based on mockup values', () => {
    const sex = 'Homem';
    const walkingSpeed = 10;
    const handgripStrength = 2;
    const muscleMassIndex = 2.71;

    const response = classifyResult({
      sex,
      walkingSpeed,
      handgripStrength,
      muscleMassIndex,
    });

    const result = {
      type: 'error',
      title: 'Com sarcopenia',
      description:
        'De acordo com os dados informados, o paciente possui Sarcopenia.',
      hasSarcopenia: true,
    };

    expect(response).toEqual(result);
  });

  it('if sex === Mulher should be hasSarcopenia=true based on mockup values', () => {
    const sex = 'Mulher';
    const walkingSpeed = 10;
    const handgripStrength = 2;
    const muscleMassIndex = 2.71;

    const response = classifyResult({
      sex,
      walkingSpeed,
      handgripStrength,
      muscleMassIndex,
    });

    const result = {
      type: 'error',
      title: 'Com sarcopenia',
      description:
        'De acordo com os dados informados, o paciente possui Sarcopenia.',
      hasSarcopenia: true,
    };

    expect(response).toEqual(result);
  });

  it('if sex === Mulher should be hasSarcopenia=false based on mockup values', () => {
    const sex = 'Mulher';
    const walkingSpeed = 0.9;
    const handgripStrength = 25;
    const muscleMassIndex = 0.27;

    const response = classifyResult({
      sex,
      walkingSpeed,
      handgripStrength,
      muscleMassIndex,
    });

    const result = {
      type: 'success',
      title: 'Sem sarcopenia',
      description:
        'De acordo com os dados informados, o paciente não sofre de Sarcopenia.',
      hasSarcopenia: false,
    };

    expect(response).toEqual(result);
  });

  it('if sex === Homem should be hasSarcopenia=true based on mockup values', () => {
    const sex = 'Homem';
    const walkingSpeed = 0.9;
    const handgripStrength = 25;
    const muscleMassIndex = 0.27;

    const response = classifyResult({
      sex,
      walkingSpeed,
      handgripStrength,
      muscleMassIndex,
    });

    const result = {
      type: 'error',
      title: 'Com sarcopenia',
      description:
        'De acordo com os dados informados, o paciente possui Sarcopenia.',
      hasSarcopenia: true,
    };

    expect(response).toEqual(result);
  });
});
