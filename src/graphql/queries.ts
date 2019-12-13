// tslint:disable
// this is an auto generated file. This will be overwritten

export const getMessage = `query GetMessage($roomId: String!, $createdAt: String!) {
  getMessage(roomId: $roomId, createdAt: $createdAt) {
    roomId
    createdAt
    username
    content
  }
}
`;
export const listMessages = `query ListMessages(
  $roomId: String
  $createdAt: ModelStringKeyConditionInput
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listMessages(
    roomId: $roomId
    createdAt: $createdAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      roomId
      createdAt
      username
      content
    }
    nextToken
  }
}
`;
