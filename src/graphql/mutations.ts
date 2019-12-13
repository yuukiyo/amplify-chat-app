// tslint:disable
// this is an auto generated file. This will be overwritten

export const createMessage = `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    roomId
    createdAt
    username
    content
  }
}
`;
export const updateMessage = `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    roomId
    createdAt
    username
    content
  }
}
`;
export const deleteMessage = `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    roomId
    createdAt
    username
    content
  }
}
`;
