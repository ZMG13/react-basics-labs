const Task = (props) => {
    
      return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.discription}</p>
        </div>
    )


}

export default Task
