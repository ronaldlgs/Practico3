import { useSelector, useDispatch } from 'react-redux'
import { addItemAction } from '../../store/module/item/actions';
import { removeItemAction } from '../../store/module/item/actions';
import { itemSelector } from '../../store/module/item/selectors';
import { 
    BrowserRouter as Router,
    Link,
    Route,
  } from 'react-router-dom'
  import { useState} from 'react';

const Lista = () => {  
    const items: any = useSelector(itemSelector)
    const dispatch = useDispatch()
    
    const handlerAddItem= (event: any) => {
        event.preventDefault()
        if(name===''){
           alert('Ingrese producto'); 
        }else{
            const i = new Date().getTime()
        
            dispatch(addItemAction(i,name))
            setName('')
        }
    }
    
    const handlerDeleteItem= (id:any) => {
        dispatch(removeItemAction(id))
        alert(`Se ha eliminado item de la lista`)
    }

    
    const [name, setName] = useState('')
    const [id, setId] = useState(0)
    
    const handlerChangeItem =(event: any) =>{ 
        const value = event.target.value;
        setName(value)
    }

   
    return (
       <div>
            <form >
                <input type="txt"
                    value={name}
                    onChange={handlerChangeItem}
                />
                <button className="btn btn-primary" onClick={handlerAddItem}>Agregar </button>
            </form>

       
       <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {items.item.map((item: any) =>(
                    <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <th>{item.name}</th>
                    <td>
                        <Link  to={`/Item/${item.id}?name=${item.name}`} >Detalle</Link>
                    
                    <button onClick={() =>handlerDeleteItem(item.id)}>eliminar</button>
                    </td>
                    
                    
                </tr>
                ))}
    
            </tbody>
            </table>
            </div>
    )
}

export default Lista