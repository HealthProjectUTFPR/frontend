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
      case 'AVD':
        return {
            evaluationName: 'AVD',
            to: '/avaliacao/editar/avd',
        };
      default:
        return undefined;
    }
  };
  
  export default getEditRouter;