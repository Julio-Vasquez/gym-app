import { createActions } from "redux-actions";

export const { suscription } = createActions({
  SUSCRIPTION: {
    ADD_SUSCRIPTION: (suscription) => ({ suscription }),
    ADD_SUSCRIPTION_SUCCESS: (success) => ({ success }),
    ADD_SUSCRIPTION_FAILED: (error) => ({ error }),

    REMOVE_TIME: (time) => ({ time }),
    REMOVE_TIME_SUCCESS: (success) => ({ success }),
    REMOVE_TIME_FAILED: (error) => ({ error }),
  },
});
