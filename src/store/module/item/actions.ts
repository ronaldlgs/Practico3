export const addItemAction = (id:number, name:string) => {
    return {
        type: 'ADD_ITEM',
        payload: {id:id,name:name},
    }
}

export const updateItemAction = (id:number, name:string) => {
    return {
        type: 'UPDATE_ITEM',
        payload: {id:id,name:name},
    }
}

export const removeItemAction = (id: number) => {
    return {
        type: 'REMOVE_ITEM',
        payload: {id:id},
    }
}