import { connect } from "react-redux";
import store, { AppState } from './store';
import { ChatComponent } from "./chatComponent";
import { Dispatch } from "redux";
import { Actions } from "./action";
import { Chat } from "./reducer";
import { Auth, API, graphqlOperation } from 'aws-amplify'
import * as mutations from './graphql/mutations'
import * as queries from './graphql/queries'
import * as subscriptions from './graphql/subscriptions'
import { CreateMessageInput } from './API'
import moment from 'moment'

export interface chatHundler {
    hundleUsernameUpdate(s: string): void
    hundleContentUpdate(s: string): void
    hundleInit(): void
    hundleChatsGet(): void
    hundleChatsSubscription(): void
    hundleChatUpdate(): void
    hundleChatSend(name, description): void
}

const hundleUsernameUpdate = (username: string) => async (dispatch: Dispatch) => {
    dispatch(Actions.updateUsername(username))
}

const hundleContentUpdate = (content: string) => async (dispatch: Dispatch) => {
    dispatch(Actions.updateContent(content))
}

const hundleInit = () => async (dispatch: Dispatch) => {
    Auth.currentAuthenticatedUser().then(user => {
        const login: string = user.username
        dispatch(Actions.updateUsername(login))
    })
}

const hundleChatsSubscription = () => async (dispatch: Dispatch) => {
    API.graphql(
        graphqlOperation(subscriptions.onCreateMessage)
    ).subscribe({
        next: (data: any) => {
            const subscribeChat = data.value!.data!.onCreateMessage as Chat
            console.log(subscribeChat)
            const stateChat: Chat[] = store.getState().state.chats
            const chats = stateChat.concat(subscribeChat)
            dispatch(Actions.updateChats(chats))
        }
    })
}

const hundleChatsGet = () => async (dispatch: Dispatch) => {
    var chats: Chat[] = []
    const result = await API.graphql(graphqlOperation(queries.listMessages, { limit: 100 }))
    const chat = result.data.listMessages.items.map((item): Chat => {
        return {
            content: item.content,
            createdAt: item.createdAt,
            username: item.username
        }
    })
    chats = chats.concat(chat)
    dispatch(Actions.updateChats(chats))
}

const hundleChatUpdate = () => async () => {
    console.log("update")
}

const hundleChatSend = (username: string, content: string) => async () => {
    const input: CreateMessageInput = {
        roomId: "1",
        username: username,
        content: content,
        createdAt: moment().format('YYYY-MM-DD THH:mm:ssZ')
    }
    const result = await API.graphql(graphqlOperation(mutations.createMessage, { input: input }))
    console.log(result)
}

const mapStateToProps = (appState: AppState) => {
    return Object.assign({}, appState.state, {
        chat: appState.state.chats
    })
}
export default connect(mapStateToProps, {
    hundleInit,
    hundleUsernameUpdate,
    hundleContentUpdate,
    hundleChatsGet,
    hundleChatsSubscription,
    hundleChatUpdate,
    hundleChatSend
})(ChatComponent)