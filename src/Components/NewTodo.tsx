import React, { useRef } from 'react';
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles ({
        addTodo: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px'
        },
        input: {
            marginRight: '10px',
            marginLeft: '10px',
            borderRadius: '7px',
            width: '555px'
        }
    })
)


interface NewTodoProps {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const classes = useStyles();

    const textInputRef = useRef<HTMLInputElement>(null);

    const ToDoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText =  textInputRef.current!.value;
        props.onAddTodo(enteredText);
    };

    return (
        <form className={classes.addTodo} onSubmit={ToDoSubmitHandler}>
            <div >
                <label htmlFor="todo-text">To Dos</label>
                <input className={classes.input} type="text" ref={textInputRef} />
            </div>
            <Button type="submit" variant="outlined" color="primary" >Add to list</Button>
        </form>
    )
}

export default NewTodo
