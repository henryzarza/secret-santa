export const schema = gql`
  type Event {
    id: String!
    name: String!
    date: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
    sendReminder: Boolean!
    createdByUser: Int!
    user: User!
    invite: [Invite]!
    pairing: [Pairing]!
    wishList: [WishList]!
    thankYou: [ThankYou]!
  }

  type Query {
    events: [Event!]! @requireAuth
    event(id: String!): Event @requireAuth
  }

  input CreateEventInput {
    name: String!
    date: DateTime!
    sendReminder: Boolean!
    createdByUser: Int!
  }

  input UpdateEventInput {
    name: String
    date: DateTime
    sendReminder: Boolean
    createdByUser: Int
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @requireAuth
    updateEvent(id: String!, input: UpdateEventInput!): Event! @requireAuth
    deleteEvent(id: String!): Event! @requireAuth
  }
`
