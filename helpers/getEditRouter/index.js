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
    case 'Depression':
      return {
        evaluationName: 'Depressão',
        to: '/avaliacao/editar/depressao',
      };
    case 'functionalBattery':
      return {
        evaluationName: 'Bateria Funcional',
        to: '/avaliacao/editar/bateriaFuncional',
      };
    default:
      return undefined;
  }
};

export default getEditRouter;
