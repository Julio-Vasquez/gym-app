import { createActions } from "redux-actions";

export const { check } = createActions({
  CHECK: {
    CHECK_PEOPLE: (identification) => ({ identification }),
    CHECK_PEOPLE_SUCCESS: (people) => ({ people }),
    CHECK_PEOPLE_FAILED: (error) => ({ error }),

    CHECK_PEOPLE_IN: (identification) => ({ identification }),
    CHECK_PEOPLE_IN_SUCCESS: (people) => ({ people }),
    CHECK_PEOPLE_IN_FAILED: (error) => ({ error }),
  },
});
