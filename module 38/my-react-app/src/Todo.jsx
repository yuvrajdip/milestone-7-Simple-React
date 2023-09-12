
function Todo({task, isDone}){
  return <>
    <ul>
      <li>Task : {task}</li>
      {/* Conditional Rendering */}
      <li>React shikha : {isDone? `shesh`:`shesh hoinai`}</li>
    </ul>
  </>
}

export default Todo