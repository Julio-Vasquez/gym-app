import { createActions } from 'redux-actions';

export const { clients } = createActions({
  CLIENTS: {
    GET_CLIENTS: (role) => ({ role }),
    GET_CLIENTS_SUCCESS: (listCLients) => ({ listCLients }),
    GET_CLIENTS_FAILED: (error) => ({ error })
  }
});