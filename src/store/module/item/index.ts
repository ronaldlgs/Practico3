
const initialState = {
    item: [
        {
            id:1,
            name: 'Aceite',
        },
        {
            id:2,
            name: 'Mantequila'
        },
        {
            id:3,
            name: 'Azucar'
        },
        {
            id:4,
            name: 'Arina'
        }
    ]
}

const itemReducer = (prevState: any = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                item:  [...prevState.item, action.payload],
            }
        case 'UPDATE_ITEM':
            const lista = [...prevState.item]
            alert(action.payload.id);
            const itemEncontrado = lista.find(item => item.id === action.payload.id);
            if(itemEncontrado===undefined){
                alert('no se puedo modificar')
            }else{
                itemEncontrado.name = action.payload.name
            }

             return {
                item:  [...prevState.item],
            }
        case 'REMOVE_ITEM':
             const listaActual = [...prevState.item]
             listaActual.splice(listaActual.indexOf(listaActual.find(item => item.id === action.payload), 0));
            return {
                
                item:listaActual
            }
        default:
            return prevState
    }
}

export default itemReducer