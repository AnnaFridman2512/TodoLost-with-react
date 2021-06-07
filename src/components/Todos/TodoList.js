/**TodoList
props: { items: [{ text: string, completed: boolean }]}
Renders a list of TodoItem components, passing text and completed to as props.
If the items array is empty, the component should show a span with text: "Nothing to do! :)"**/

import TodoItem from './TodoItem';

function TodoList({items}){
    return items.length > 0 ? (
        <ul>
            {items.map(
                ({text, completed}) => <TodoItem text={text} completed={completed} />
            )}
        </ul>
    ) : (

        <h3>Nothing to do!</h3>

    );
}





export default TodoList;
