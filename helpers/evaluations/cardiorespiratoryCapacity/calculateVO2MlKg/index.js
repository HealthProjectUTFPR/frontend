const calculateVO2MlKg = ({ weight, vo2Lmin }) => {
  if (!weight) {
    return '';
  }

  const result = (vo2Lmin * 1000) / weight;

  return result;
};

export default calculateVO2MlKg;
