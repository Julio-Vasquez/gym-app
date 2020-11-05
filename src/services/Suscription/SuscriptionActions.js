import { createActions } from "redux-actions";

export const { suscription } = createActions({
  SUSCRIPTION: {
    ADD_SUSCRIPTION: (suscription) => ({ suscription }),
    ADD_SUSCRIPTION_SUCCESS: (success) => ({ success }),
    ADD_SUSCRIPTION_FAILED: (error) => ({ error }),
  },
});
