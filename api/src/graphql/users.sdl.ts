export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    avatar: String
    createdAt: DateTime!
    updatedAt: DateTime!
    role: Role!
    invite: [Invite]!
    santa: [Pairing]!
    person: [Pairing]!
    wishList: [WishList]!
    thankYouAuthor: [ThankYou]!
    thankYouToUser: [ThankYou]!
    Event: [Event]!
  }

  enum Role {
    ADMIN
    USER
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    name: String
    avatar: String
    role: Role!
  }

  input UpdateUserInput {
    email: String
    name: String
    avatar: String
    role: Role
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
