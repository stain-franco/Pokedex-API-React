
import { useSelector, useDispatch } from 'react-redux' 
import { changeName } from '../store/slices/username.slice'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

  const name = useSelector( state => state.username )

  const dispatch = useDispatch() 
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch( changeName( e.target[0].value ) )

    navigate( "/pokedex" )
  }
    return (
        <div> 
            <h1>{name}</h1>
    
            <form action="" onSubmit={ (e) => handleSubmit(e) }>
            <input type="text" />
            <button>Enviar</button>
            </form>
        </div>
    )
}



