let nextTodoId = 0;
export const addTodo = (text: string) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}
