/** 
TodoItem
props: { text: string, completed: boolean }
Renders an element with a checkbox that is checked if completed === true and a span with the value of text. **/


function TodoItem({text, completed}){
return (
    <li>
        <input type="checkbox" checked={completed}></input>
        <span>{text}</span>
    </li>
);
}



export default TodoItem;