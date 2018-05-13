export const classDef = classesConfig => { // eslint-disable-line import/prefer-default-export
  return Object.keys(classesConfig)
    .filter(className => classesConfig[className])
    .join(' ');
};
