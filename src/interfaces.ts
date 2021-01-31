export type ChatMessage = {
  id: string,
  isOwner: boolean,
  message: string,
  reply?: ChatMessage
}

export type ChatForm = {
  message: string
}
