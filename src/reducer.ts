import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Actions } from './action'

export interface Chat {
    username: string,
    content: string,
    createdAt: string
}

export interface State {
    username: string,
    content: string,
    chats: Chat[]
}

const initialState: State = {
    username: '',
    content: '',
    chats: []
}

export const Reducers = reducerWithInitialState(initialState)
    .case(Actions.updateUsername, (state, username) => {
        return Object.assign({}, state, { username })
    })
    .case(Actions.updateContent, (state, content) => {
        return Object.assign({}, state, { content })
    })
    .case(Actions.updateChats, (state, chats) => {
        return Object.assign({}, state, { chats })
    })