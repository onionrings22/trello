// import './Task.css'

function Task(props) {
    const srcLane = props.srcLane
    const index = props.index
    const move = props.move
    const text = props.text
    const next = props.next
    const prev = props.prev

    return (
      <div className={'Task'}>
        {srcLane !== 'backlog' &&
            <button onClick={() => move(srcLane, index, prev)}>&lt;</button>
        }
        {text}
        {srcLane !== 'done' &&
            <button onClick={() => move(srcLane, index, next)}>&gt;</button>
        }
      </div>
    );
  }
  
  export default Task;