/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateMessageInput = {
  roomId: string,
  createdAt: string,
  username: string,
  content: string,
};

export type ModelMessageConditionInput = {
  username?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateMessageInput = {
  roomId: string,
  createdAt: string,
  username?: string | null,
  content?: string | null,
};

export type DeleteMessageInput = {
  roomId: string,
  createdAt: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelMessageFilterInput = {
  roomId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage:  {
    __typename: "Message",
    roomId: string,
    createdAt: string,
    username: string,
    content: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage:  {
    __typename: "Message",
    roomId: string,
    createdAt: string,
    username: string,
    content: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage:  {
    __typename: "Message",
    roomId: string,
    createdAt: string,
    username: string,
    content: string,
  } | null,
};

export type GetMessageQueryVariables = {
  roomId: string,
  createdAt: string,
};

export type GetMessageQuery = {
  getMessage:  {
    __typename: "Message",
    roomId: string,
    createdAt: string,
    username: string,
    content: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  roomId?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMessagesQuery = {
  listMessages:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      roomId: string,
      createdAt: string,
      username: string,
      content: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage:  {
    __typename: "Message",
    roomId: string,
    createdAt: string,
    username: string,
    content: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage:  {
    __typename: "Message",
    roomId: string,
    createdAt: string,
    username: string,
    content: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage:  {
    __typename: "Message",
    roomId: string,
    createdAt: string,
    username: string,
    content: string,
  } | null,
};
