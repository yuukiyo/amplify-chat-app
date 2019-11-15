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
        props.hundleChatsSubscription()
    }, [count])
    const classes = useStyles();
    return (
        <>
            <div className={classes.textFormWrapper}>
                <TextField
                    onChange={(e) => props.hundleUsernameUpdate(e.target.value)}
                    label="Username"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    disabled
                    value={props.username}
                    className={classes.textFieldWrapper}
                />
                <TextField
                    onChange={(e) => props.hundleContentUpdate(e.target.value)}
                    label="Content"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    value={props.content}
                    className={classes.textFieldWrapper}
                />
                <Fab
                    onClick={() => props.hundleChatSend(
                        props.username,
                        props.content
                    )}
                    variant="extended"
                    aria-label="like">
                    <NavigationIcon />Send
                </Fab>
            </div>
            <hr />
            {props.chats.map((chat, index) => {
                return <div key={index} className={classes.chat}>
                    {
                        props.username === chat.username ?
                            <div key={index} className={classes.chatOwn}>
                                <Chip
                                    color="primary"
                                    avatar={<Avatar>{chat.username.slice(0, 1)}</Avatar>}
                                    label={chat.content}
                                />
                            </div>
                            :
                            <div key="index">
                                <Chip
                                    color="secondary"
                                    avatar={<Avatar>{chat.username.slice(0, 1)}</Avatar>}
                                    label={chat.content}
                                />
                            </div>
                    }
                </div>
            })}
        </>
    )
}