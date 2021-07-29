import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const b = { id: uuid(), name: action.name }
      console.log(state.bands)
      return { ...state, bands: [...state.bands, b] }
      
      case 'DELETE_BAND':
        state = { ...state, bands: state.bands.filter( b => b.id !== action.id ) }
      console.log(state.bands)
      return state

    default:
      return state;
  }
};
