function verifyCardiorespiratoryCapacityOfMan({ vo2MlKG }) {
  console.log('retornando o result');
  let type = '';
  let title = '';

  if (vo2MlKG >= 42.5) {
    type = 'success';
    title = 'Muito bom!';
  } else if (vo2MlKG >= 35.3) {
    type = 'success';
    title = 'Bom!';
  } else if (vo2MlKG >= 31.8) {
    type = 'warning';
    title = 'Suficiente!';
  } else if (vo2MlKG >= 28.7) {
    type = 'warning';
    title = 'Fraco!';
  } else {
    type = 'error';
    title = 'Muito Fraco!';
  }

  return { type, title };
}

function verifyCardiorespiratoryCapacityOfWoman({ vo2MlKG }) {
  let type = '';
  let title = '';

  if (vo2MlKG >= 35.2) {
    type = 'success';
    title = 'Muito bom!';
  } else if (vo2MlKG >= 29.4) {
    type = 'success';
    title = 'Bom!';
  } else if (vo2MlKG >= 25.8) {
    type = 'warning';
    title = 'Suficiente!';
  } else if (vo2MlKG >= 23.6) {
    type = 'warning';
    title = 'Fraco!';
  } else {
    type = 'error';
    title = 'Muito Fraco!';
  }

  return { type, title };
}

function classifyResult(sex, vo2MlKG) {
  let response;

  if (sex === 'M') {
    response = verifyCardiorespiratoryCapacityOfMan({ vo2MlKG });
  } else {
    response = verifyCardiorespiratoryCapacityOfWoman({ vo2MlKG });
  }

  const { type, title } = response;

  return { type, title };
}

export default classifyResult;
