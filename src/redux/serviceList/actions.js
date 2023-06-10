import {LOADED} from './actionTypes'

export const loaded = (service) => {
    return {
        type: LOADED,
        payload: service,
    }
}

 


