import { connect } from "react-redux";
import { AppState } from './store';
import { ChatComponent } from "./chatComponent";
import { Dispatch } from "redux";
import { Actions } from "./action";
import { Chat } from "./reducer";
// import Amplify, { API, graphqlOperation } from 'aws-amplify'
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

export interface chatHundler {
    hundleUsernameUpdate(s: string): void
    hundleContentUpdate(s: string): void
    hundleInit(): void
    hundleChatsGet(): void
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
    const login: string = 'xxx-user'
    dispatch(Actions.updateUsername(login))
}

const hundleChatsGet = () => async (dispatch: Dispatch) => {
    const chats: Chat[] = [
        {
            username: 'fuga',
            content: 'Amplifyは最高ですね！',
            createdAt: '2019-10-01 00:00:00'
        },
        {
            username: 'fuga',
            content: 'こんな簡単にチャットが作れてしまうなんて',
            createdAt: '2019-10-01 00:00:00'
        },
        {
            username: 'xxx-user',
            content: 'す、すごいー',
            createdAt: '2019-10-01 00:00:00'
        },
        {
            username: 'fuga',
            content: 'ということで本日休みます',
            createdAt: '2019-10-01 00:00:00'
        },
    ]
    dispatch(Actions.updateChats(chats))
}

const hundleChatUpdate = () => async () => {
    console.log("update")
}

const hundleChatSend = (username: string, content: string) => async () => {
    console.log(username)
    console.log(content)
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
    hundleChatUpdate,
    hundleChatSend
})(ChatComponent)