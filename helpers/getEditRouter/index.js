const getEditRouter = (formName) => {
  switch (formName) {
    case 'ACR': return '/equilibrio';
    case 'bodyComposition': return '/avaliacao/editar/composicaoCorporal';
    case 'AEQ': return '/avaliacao/editar/equilibrio';
    default: return undefined;
  }
};

export default getEditRouter;
