import { connect } from "react-redux";
import store, { AppState } from './store';
import { ChatComponent } from "./chatComponent";
import { Dispatch } from "redux";
import { Actions } from "./action";
import { Chat } from "./reducer";
// import { Auth } from 'aws-amplify'
import * as mutations from './graphql/mutations'
import * as queries from './graphql/queries'
import * as subscriptions from './graphql/subscriptions'
import { Auth, API, graphqlOperation } from 'aws-amplify'
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
    dispatch(Actions.updateUsername('xxx-user'))
    Auth.currentAuthenticatedUser().then(user => {
        const login: string = user.username
        dispatch(Actions.updateUsername(login))
    });
}

const hundleChatsGet = () => async (dispatch: Dispatch) => {
    var chats: Chat[] = []
    const result = await API.graphql(graphqlOperation(queries.listMessages, {limit:100}))
    const chat = result.data.listMessages.items.map((item): Chat => {
        return {
            content: item.content,
            createdAt: item.createdAt,
            username: item.username
        }
    })
    chats = chats.concat(chat)

    // const chats: Chat[] = [
    //     {
    //         username: 'fuga',
    //         content: 'Amplifyは最高ですね！',
    //         createdAt: '2019-10-01 00:00:00'
    //     },
    //     {
    //         username: 'fuga',
    //         content: 'こんな簡単にチャットが作れてしまうなんて',
    //         createdAt: '2019-10-01 00:00:00'
    //     },
    //     {
    //         username: 'hoge',
    //         content: 'す、すごいー',
    //         createdAt: '2019-10-01 00:00:00'
    //     },
    //     {
    //         username: 'fuga',
    //         content: 'ということで本日休みます',
    //         createdAt: '2019-10-01 00:00:00'
    //     },
    // ]
    dispatch(Actions.updateChats(chats))
}

const hundleChatsSubscription = () => async (dispatch: Dispatch) => {
    API.graphql(
        graphqlOperation(subscriptions.onCreateMessage)
    ).subscribe({
        next: (data: any) => {
            const subscribeChat = data.value!.data!.onCreateMessage as Chat
            const stateChat: Chat[] = store.getState().state.chats
            const chats = stateChat.concat(subscribeChat)
            dispatch(Actions.updateChats(chats))
        }
    })
}

const hundleChatUpdate = () => async () => {
    console.log("update")
}

const hundleChatSend = (username: string, content: string) => async () => {
    console.log(username)
    console.log(content)
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