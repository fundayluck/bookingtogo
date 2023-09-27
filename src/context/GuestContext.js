import createDataContext from "./createDataContext"

const guestReducer = (state, action) => {
    switch (action.type) {
        case 'edit_GuestList':
            return state.map((guestList) => {
                return guestList.id === action.payload.id
                    ? action.payload
                    : guestList
            })
        case 'delete_GuestList':
            return state.filter((guestList) => guestList.id !== action.payload)
        case 'add_GuestList':
            return [...state,
            {
                id: state.length + 1,
                name: `Guest ${state.length + 1}`,
                gender: 'male'
            }]
        default:
            return state
    }
}

const addGuestList = (dispatch) => {
    return () => {
        dispatch({ type: 'add_GuestList' })
    }
}

const deleteGuestList = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_GuestList', payload: id })
    }
}

const editGuestList = (dispatch) => {
    return (id, name, gender) => {
        dispatch({
            type: 'edit_GuestList',
            payload: { id, name, gender }
        })
    }
}

export const { Context, Provider } = createDataContext(
    guestReducer,
    { addGuestList, deleteGuestList, editGuestList },
    [{ id: 1, name: 'Jhon Doe', gender: 'male' }, { id: 2, name: 'Dorie Doe', gender: 'female' }]
)