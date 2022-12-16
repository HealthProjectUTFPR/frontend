import moment from 'moment';

moment.locale('pt');

class SarcopeniaForm {
  date;

  weight;

  measuredMuscleMass;

  estimatedMuscleMass;

  walkingSpeed;

  handGripStrength;

  muscleMassIndex;

  calfCircumference;

  hasSarcopenia;

  result;

  constructor(sarcopeniaDataForm, hasSarcopenia) {
    this.date = moment(sarcopeniaDataForm.date);
    this.weight = sarcopeniaDataForm.weight;
    this.measuredMuscleMass = sarcopeniaDataForm.measuredMuscleMass;
    this.estimatedMuscleMass = sarcopeniaDataForm.estimatedMuscleMass;
    this.walkingSpeed = sarcopeniaDataForm.walkingSpeed;
    this.handGripStrength = sarcopeniaDataForm.handGripStrength;
    this.muscleMassIndex = sarcopeniaDataForm.muscleMassIndex;
    this.calfCircumference = sarcopeniaDataForm.calfCircumference;
    this.hasSarcopenia = hasSarcopenia;
    this.result = sarcopeniaDataForm.result;
  }
}
export default SarcopeniaForm;
