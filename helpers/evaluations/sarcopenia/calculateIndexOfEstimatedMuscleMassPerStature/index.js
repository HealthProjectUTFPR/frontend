const calculateIndexOfEstimatedMuscleMassPerStature = ({ estimatedMuscleMass, height }) => {
  if (!height) return '';

  return estimatedMuscleMass / height ** 2;
};

export default calculateIndexOfEstimatedMuscleMassPerStature;
