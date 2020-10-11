import { createActions } from "redux-actions";

export const { clients } = createActions({
  CLIENTS: {
    GET_CLIENTS: (role) => ({ role }),
    GET_CLIENTS_SUCCESS: (listCLients) => ({ listCLients }),
    GET_CLIENTS_FAILED: (error) => ({ error }),

    CREATE_CLIENT: (client) => ({ client }),
    CREATE_CLIENT_SUCCESS: (success) => ({ success }),
    CREATE_CLIENT_FAILED: (error) => ({ error }),

    UPDATE_CLIENT: (identification, newClient) => ({
      identification,
      newClient,
    }),
    UPDATE_CLIENT_SUCCESS: (success) => ({ success }),
    UPDATE_CLIENT_FAILED: (error) => ({ error }),
  },
});
