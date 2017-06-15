export * from './dropdown';
export * from './validation_hoc';

export const processMessages = (array, statusCode) => {
  let type = 'error';

  if (statusCode >= 200 && statusCode < 300) {
    type = 'success';
  }

  return array.map(alert => ({ type, alert }));
};
