const getEditRouter = (formName) => {
  switch (formName) {
    case 'ACR':
      return {
        evaluationName: 'Cardiorrespiratório',
        to: '/avaliacao/editar/capacidadeCardiorrespiratoria',
      };
    case 'sarcopenia':
      return {
        evaluationName: 'Sarcopenia',
        to: '/avaliacao/editar/sarcopenia',
      };
    case 'bodyComposition':
      return {
        evaluationName: 'Composição Corporal',
        to: '/avaliacao/editar/composicaoCorporal',
      };
    case 'AEQ':
      return {
        evaluationName: 'Equilíbrio',
        to: '/avaliacao/editar/equilibrio',
      };
    case 'miniCognition':
      return {
        evaluationName: 'Mini Cognição',
        to: '/avaliacao/editar/miniCognicao',
      };
    default:
      return undefined;
  }
};

export default getEditRouter;
