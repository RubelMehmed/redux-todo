import { COLORCHANGED, STATUSCHANGED } from './actionTypes'


export const statusChanged = (status) => {
    return {
        action: STATUSCHANGED,
        payload:{
            status,

        }
    }
}


export const colourChanged = (color, changeType) => {
    return {
        action: COLORCHANGED,
        payload: {
            color,
            changeType
        }
    }
}