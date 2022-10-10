const calculateVO2LMin = ({ weight, finalFC, time, age, sex }) => {
  if (!weight) {
    return '';
  }

  const sexWeight = sex === 'Homem' ? 1 : 0;

  const result =
        6.952 +
        0.0091 * (weight * 2.205) -
        0.0257 * age +
        0.5955 * sexWeight -
        0.224 * time -
        0.0115 * finalFC;

  return result;
};

export default calculateVO2LMin;
