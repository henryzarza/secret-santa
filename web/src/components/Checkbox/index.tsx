import { CheckboxField, Label } from '@redwoodjs/forms'

const Checkbox = ({
  label,
  name,
  ...rest
}: {
  label: string
  name: string
}) => {
  return (
    <div className="mb-4">
      <CheckboxField name={name} {...rest} />
      <Label name={name}>{label}</Label>
    </div>
  )
}

export default Checkbox
