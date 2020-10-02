import { createActions } from 'redux-actions'

export const { check } = createActions({
  CHECK: {
    CHECK_PEOPLE: (identification) => ({ identification }),
    CHECK_PEOPLE_SUCCESS: (people) => ({ people }),
    CHECK_PEOPLE_FAILED: (error) => ({ error })
  }
});