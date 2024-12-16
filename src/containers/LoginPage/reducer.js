import { produce } from "immer";
import { ADD_VALIDATION_ERRROR } from "./constants";

const EmptyField = {
    username: '',
    password: '',
    remember: false
};

export const initialState = {
    initialValues: EmptyField,
    formValues: {},
    errors: [],
    isLoading: false
};

const loginPageReducer = produce((draft, action) => {
    switch(action.type) {
        case ADD_VALIDATION_ERRROR:
            draft.errors = action.errors;
            draft.isLoading = false;
            break;
    }
}, initialState);

export default loginPageReducer;