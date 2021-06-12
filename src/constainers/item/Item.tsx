import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateItemAction } from '../../store/module/item/actions';
import { isElement } from 'react-dom/test-utils'


import{
    useParams,
    useHistory,
    useLocation,
} from 'react-router-dom'



const Lista = () => {  
    const [name, setName] = useState('')
    const location = useLocation()
    const params: any = useParams()
    const history = useHistory()
    
    useEffect(() =>{
        const n = new URLSearchParams(location.search).get('name') || ''
        setName(n)
    }, [location])
    const handlerVover = () =>{
       history.push('/ListaCompra')
     }
     const dispatch = useDispatch()
     const handlerUpdateItem= (id:number, name:string) => {
        dispatch(updateItemAction(id,name))
    }
    const handlerChangeItem =(event: any) =>{ 
        const value = event.target.value;
        setName(value)
    }
   return (
        
      <div> 
          <h1>Editar producto</h1>
      <input type="text" name="id" id="id" value={params.ItemID} />
      <br />
      <input onChange={handlerChangeItem} type="text" name="id" id="id" value={name} />
      <br />
      <button onClick={handlerVover}  >volve</button>
      <button onClick={() =>handlerUpdateItem(params.ItemID, name)}>Editar</button>
      </div>
    
   )
}

export default Lista

function dispatch(arg0: { type: string; payload: { id: number; name: string; }; }) {
    throw new Error('Function not implemented.');
}


function id(id: any, name: string): any {
    throw new Error('Function not implemented.');
}
