  const Task = (props ) => {
    return (
        <div className='task'
        style  = {{ backgroundColor: props.completed? "lightgreen" : "lightpink"}} 
        >
       <h4>{props.taskName}</h4>
       <button onClick={()=> props.completeTask(props.id)}>Completed</button>
       <button onClick={()=>props.deleteTask(props.id)}>Delete</button>
       
       </div>
     )
}

export default Task;

