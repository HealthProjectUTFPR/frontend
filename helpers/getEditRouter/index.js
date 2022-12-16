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
    case 'MiniCognition':
      return {
        evaluationName: 'Mini Cognição',
        to: '/avaliacao/editar/miniCognicao',
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
    case 'AVD':
      return {
        evaluationName: 'AVD',
        to: '/avaliacao/editar/avd',
      };
    case 'fragilidade':
      return {
        evaluationName: 'Fragilidade',
        to: '/avaliacao/editar/fragilidade',
      };
    default:
      return undefined;
  }
};

export default getEditRouter;
