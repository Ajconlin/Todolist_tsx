import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        list: {
            marginLeft: '45%',
            padding: '10px'
        }
    }))

interface TodoListProps {
    items: { id: string , text: string }[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
    const classes = useStyles();
    return (
        <div className={classes.list}>
            <ul>
                {props.items.map(todo => (
                    <li key={todo.id}>
                        <span> {todo.text} </span>
                        <Button onClick={props.onDeleteTodo.bind(null, todo.id)}>
                            <DeleteForeverIcon/>
                        </Button>
                    </li> ))}
            </ul>
        </div>
    )
}

export default TodoList;
