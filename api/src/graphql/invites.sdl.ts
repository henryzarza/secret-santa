export const schema = gql`
  type Invite {
    id: String!
    userId: Int
    user: User
    eventId: String!
    event: Event!
    status: Status!
    email: String!
    name: String!
  }

  enum Status {
    INVITED
    DECLINED
    ACCEPTED
  }

  type Query {
    invites: [Invite!]! @skipAuth
    invite(id: String!): Invite @skipAuth
  }

  input CreateInviteInput {
    userId: Int
    eventId: String!
    status: Status!
    email: String!
    name: String!
  }

  input UpdateInviteInput {
    userId: Int
    eventId: String
    status: Status
    email: String
    name: String
  }

  type Mutation {
    createInvite(input: CreateInviteInput!): Invite! @requireAuth
    updateInvite(id: String!, input: UpdateInviteInput!): Invite! @requireAuth
    deleteInvite(id: String!): Invite! @requireAuth
  }
`
