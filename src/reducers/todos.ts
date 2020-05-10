const todos = (state = [], action: { id: number; text: string, type: string }) => {
    // @ts-ignore
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}

export default todos