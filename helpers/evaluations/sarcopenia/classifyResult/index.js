function verifySarcopeniaOfMan({
  walkingSpeed,
  handGripStrength,
  muscleMassIndex,
}) {
  let hasSarcopenia = false;
  let title = 'Sem sarcopenia';
  let description =
    'De acordo com os dados informados, o paciente não sofre de Sarcopenia.';
  let type = 'success';

  if (walkingSpeed > 0.8 && handGripStrength > 30) {
    hasSarcopenia = false;
  } else if (
    walkingSpeed > 0.8 &&
    handGripStrength <= 30 &&
    muscleMassIndex > 8.9
  ) {
    hasSarcopenia = false;
  } else if (walkingSpeed <= 0.8 && muscleMassIndex > 8.9) {
    hasSarcopenia = false;
  } else {
    hasSarcopenia = true;

    title = 'Com sarcopenia';
    type = 'error';
    description =
      'De acordo com os dados informados, o paciente possui Sarcopenia.';
  }

  return { title, description, type, hasSarcopenia };
}

function verifySarcopeniaOfWoman({
  walkingSpeed,
  handGripStrength,
  muscleMassIndex,
}) {
  let hasSarcopenia = false;
  let title = 'Sem sarcopenia';
  let description =
    'De acordo com os dados informados, o paciente não sofre de Sarcopenia.';
  let type = 'success';

  if (walkingSpeed > 0.8 && handGripStrength > 20) {
    hasSarcopenia = false;
  } else if (
    walkingSpeed > 0.8 &&
    handGripStrength <= 20 &&
    muscleMassIndex > 6.37
  ) {
    hasSarcopenia = false;
  } else if (walkingSpeed <= 0.8 && muscleMassIndex > 6.37) {
    hasSarcopenia = false;
  } else {
    hasSarcopenia = true;

    title = 'Com sarcopenia';
    type = 'error';
    description =
      'De acordo com os dados informados, o paciente possui Sarcopenia.';
  }

  return { title, description, type, hasSarcopenia };
}

function classifyResult({
  walkingSpeed,
  handGripStrength,
  muscleMassIndex,
  sex,
}) {
  let result;
  console.log(walkingSpeed, handGripStrength, muscleMassIndex, sex);
  if (sex === 'Homem') {
    result = verifySarcopeniaOfMan({
      walkingSpeed,
      handGripStrength,
      muscleMassIndex,
      sex,
    });
  } else {
    result = verifySarcopeniaOfWoman({
      walkingSpeed,
      handGripStrength,
      muscleMassIndex,
      sex,
    });
  }

  const { title, description, type, hasSarcopenia } = result;

  return { title, description, type, hasSarcopenia };
}

export default classifyResult;
