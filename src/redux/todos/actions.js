import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLOURSELECTED, DELETED, TOGGLED } from "./actionTypes";

export const added = (todoText) => {
    return {
        type: ADDED,
        payload:todoText
    }
}

export const allCompleted = () => {
    return {
        type: ALLCOMPLETED
    }
}

export const colourSelected = (todoId, color) => {
    return {
        type: COLOURSELECTED,
        payload:{
            todoId,
            color
        } 
    }
}

export const deleted = (todoId) =>  {
    return {
        type: DELETED,
        payload: todoId
    }
}

export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload:todoId
    }
}

export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED
    }
}