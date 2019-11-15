import actionCreatorFactory, { } from 'typescript-fsa'
import { Chat } from './reducer'

const actionCreator = actionCreatorFactory()

export const Actions = {
    updateUsername: actionCreator<string>('UPDATE_USERNAME'),
    updateContent: actionCreator<string>('UPDATE_CONTENT'),
    updateChats: actionCreator<Chat[]>('UPDATE_CHATS')
}