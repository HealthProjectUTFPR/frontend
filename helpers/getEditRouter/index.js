const getEditRouter = (formName) => {
  switch (formName) {
    case 'ACR': return '/equilibrio';
    case 'sarcopenia': return '/avaliacao/editar/sarcopenia';
    case 'bodyComposition': return '/avaliacao/editar/composicaoCorporal';
    case 'AEQ': return '/avaliacao/editar/equilibrio';
    default: return undefined;
  }
};

export default getEditRouter;
