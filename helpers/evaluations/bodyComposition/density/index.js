const density = (genre, pleats) => {
  if (genre === 'Mulher') {
    return 1.1715 - 0.0779 * Math.log10(pleats);
  }
  return 1.1567 - 0.0717 * Math.log10(pleats);
};

export default density;
