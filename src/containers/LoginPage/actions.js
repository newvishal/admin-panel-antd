import { ADD_VALIDATION_ERRROR } from "./constants";


export function enterValidationErrorAction(errors) {
    return {
        type: ADD_VALIDATION_ERRROR,
        errors
    }
}