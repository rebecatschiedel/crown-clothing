import { typesOfActions } from "./user.typesOfActions";

export const setCurrentUser = user => ({
    type: typesOfActions.SET_CURRENT_USER,
    payload: user
});