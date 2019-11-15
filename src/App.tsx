import React from 'react';
import ChatContainer from './chatContainer';
import { withAuthenticator } from 'aws-amplify-react';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
const App: React.FC = () => {
  return (
    <>
      <ChatContainer />
    </>
  );
}

export default withAuthenticator(App);
