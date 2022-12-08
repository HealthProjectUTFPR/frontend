const calculateIndexOfMeasuredMuscleMassPerStature = ({
  measuredMuscleMass,
  height,
}) => {
  if (!height) return '';

  return measuredMuscleMass / height ** 2;
};

export default calculateIndexOfMeasuredMuscleMassPerStature;
