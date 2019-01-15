import { camelCase } from 'lodash';

export default type => ({
  SUCCESS: `${type}_SUCCESS`,
  FAILURE: `${type}_FAILURE`,
  PENDING: `${type}_PENDING`,
  loadingKey: camelCase(`${type}_PENDING`),
  stateKey: camelCase(`${type}_DATA`)
});
