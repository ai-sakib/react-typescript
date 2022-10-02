import { useRef } from 'react'

const NewTodo: React.FC<{
    onAddNewTodo: (name: string, age: number) => void
}> = props => {
    const nameRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const name = nameRef.current!.value
        const age = ageRef.current!.value

        props.onAddNewTodo(name, +age)
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' ref={nameRef} />
            </div>
            <div>
                <label htmlFor='age'>Age</label>
                <input id='age' type='number' ref={ageRef} />
            </div>

            <button>Submit</button>
        </form>
    )
}

export default NewTodo
