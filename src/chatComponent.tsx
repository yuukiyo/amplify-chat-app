import React, { useEffect } from 'react'
import { makeStyles, TextField, Fab, Chip, Avatar } from '@material-ui/core'
import { State } from './reducer'
import { chatHundler } from './chatContainer'
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles({
    textFormWrapper: {
        padding: 30,
        textAlign: 'center',
        '& button': {
            padding: '0 50px'
        }
    },
    textFieldWrapper: {
        marginBottom: 30
    },
    chat: {
        margin: 2
    },
    chatOwn: {
        textAlign: 'right'
    }
});

type Props = State & chatHundler

export const ChatComponent: React.FC<Props> = (props: Props) => {
    const count = 1
    useEffect(() => {
        props.hundleInit()
        props.hundleChatsGet()
    }, [count])
    const classes = useStyles();
    return (
        <>
            <div className={classes.textFormWrapper}>
            Amplify Handson
            </div>
        </>
    )
}