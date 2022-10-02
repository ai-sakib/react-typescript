import Person from './../models/persons'

const TodoItem: React.FC<{ item: Person }> = props => {
    const item = props.item
    return (
        <li className='text-3xl font-bold underline'>
            Name: {item.name}, Age: {item.age}
        </li>
    )
}

export default TodoItem
