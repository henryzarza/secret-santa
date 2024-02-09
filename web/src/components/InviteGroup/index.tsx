import {
  Label,
  TextField,
  Form,
  EmailField,
  FieldError,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { EVENT_DETAIL_QUERY } from 'src/pages/GroupInvitePage/GroupInvitePage'

import Card from '../Card'
import RoundButton from '../RoundButton'

const CREATE_INVITE = gql`
  mutation createInvite($name: String!, $email: String!, $eventId: String!) {
    createInvite(
      input: { eventId: $eventId, status: INVITED, email: $email, name: $name }
    ) {
      id
      name
      status
      email
    }
  }
`

const REMOVE_INVITE = gql`
  mutation createInvite($id: String!) {
    deleteInvite(id: $id) {
      id
    }
  }
`

const InviteGroup = ({
  eventId,
  invites,
}: {
  eventId: string
  invites: Array<{
    id: string
    email: string
    name: string
    user: { avatar: string }
  }>
}) => {
  const formMethods = useForm()
  const [createInvite, { loading }] = useMutation(CREATE_INVITE, {
    onError: (error) => {
      toast.error(error.message)
    },
    onCompleted: () => {
      toast.success('The invitation was sent')
      formMethods.reset()
    },
    refetchQueries: [EVENT_DETAIL_QUERY],
  })
  const [removeInvite, { loading: loadingRemove }] = useMutation(
    REMOVE_INVITE,
    {
      onError: (error) => {
        toast.error(error.message)
      },
      onCompleted: () => {
        toast.success('The invitation was removed')
      },
      refetchQueries: [EVENT_DETAIL_QUERY],
    }
  )

  const handleSubmit = (data: Record<string, string>) => {
    createInvite({ variables: { ...data, eventId } })
  }

  const handleRemoveInvite = (id: string) => {
    if (!loadingRemove) {
      removeInvite({ variables: { id } })
    }
  }

  return (
    <div>
      <h6 className="label ml-5 dark:text-white">
        Invite a friend or family member
      </h6>
      <Form
        onSubmit={handleSubmit}
        className="mb-10 ml-5 flex items-center gap-5 bg-spanishGreen p-4 dark:bg-blackPearl"
        formMethods={formMethods}
      >
        <div className="relative mb-0 flex-1">
          <Label name="name">Name</Label>
          <TextField
            name="name"
            id="name"
            placeholder=""
            validation={{
              required: {
                value: true,
                message: 'Name is required',
              },
            }}
          />
          <FieldError name="name" className="error-message text-white" />
        </div>
        <div className="relative mb-0 flex-1">
          <Label name="email">Email</Label>
          <EmailField
            name="email"
            id="email"
            placeholder=""
            validation={{
              required: {
                value: true,
                message: 'Email is required',
              },
            }}
          />
          <FieldError name="email" className="error-message text-white" />
        </div>
        <fieldset disabled={loading}>
          <RoundButton type="submit" status="warning" icon="plus" />
        </fieldset>
      </Form>

      {invites.length > 0 && (
        <div className="grid grid-cols-2 gap-x-12 gap-y-8 pb-16">
          {invites.map((user) => (
            <Card
              key={user.id}
              avatar={{
                avatar: user.user?.avatar,
                letter: user.name.charAt(0),
              }}
              name={user.name}
              email={user.email}
              onClick={() => handleRemoveInvite(user.id)}
              isCloseShowing
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default InviteGroup
