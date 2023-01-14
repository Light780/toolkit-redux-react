import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'

export const PokemonApp = () => {
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPokemons())
  }, [])
  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <ul>
        {pokemons.map(({ name }) => <li key={name}>{name}</li>)}
      </ul>
      <button
        onClick={() => dispatch(getPokemons(page))}
        disabled={isLoading}
      >
        Next
      </button>
    </>
  )
}
