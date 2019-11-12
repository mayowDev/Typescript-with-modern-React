import React, {Fragment,useState} from 'react'
import ReactDOM from 'react-dom';

type formType=React.FormEvent<HTMLFormElement>

interface ITodo{
    text:string,
    complete:boolean
    
}

export default function App():JSX.Element {
    const [Value, setValue] = useState<string>('')
    const [Todos, setTodos] = useState<ITodo[]>([])

    const handlesubmit=(e:formType):void =>{
        e.preventDefault()
        addTodo(Value)
        setValue('')
    }

    // add todo
    const addTodo=(text:string):void =>{
        const newTodo:ITodo[]=[...Todos,{text,complete:false}]
        setTodos(newTodo)
    }

    //complete todolist
    const completeTodo=(index:number):void =>{
        const newTodos:ITodo[]=[...Todos];
        newTodos[index].complete= !newTodos[index].complete;
        setTodos(newTodos)
    }
    //removetodo
    const removeTodo=(index:number)=>{
        const newTodos:ITodo[]=[...Todos];
        newTodos.splice(index,1);
        setTodos(newTodos)
    }
    return (
        <Fragment>
            <form style={{marginBottom:'20px'}} onSubmit={handlesubmit}>
                <input type='text' placeholder='please add something...' value={Value} onChange={e=>setValue(e.target.value)} required/>
                {/* <br></br> */}
                <button type='submit' style={{marginLeft:'5px'}}>Add todo</button>
            </form>
            <section>
    {Todos.map((todo:ITodo,index:number)=>
    <Fragment key={index}>
        <div>
            <div  onClick={()=>completeTodo(index)} style={{textDecoration:todo.complete?'line-through':'',marginBottom:'8px',cursor:'pointer'}}>{todo.text }</div>
            <button style={{marginLeft:'10px'}} type='button' onClick={()=>removeTodo(index)}>&times;</button>
        </div>
        
    {/* <button type='button' onClick={()=>completeTodo(index)}>{todo.complete?'icnomplete':'Complete'}</button> */}
        
    </Fragment>)}
            </section>
        </Fragment>
    )
}


const root=document.getElementById('app-root');

ReactDOM.render(<App/>,root)