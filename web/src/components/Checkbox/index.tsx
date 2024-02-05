import { CheckboxField, CheckboxFieldProps, Label } from '@redwoodjs/forms'

interface Props extends CheckboxFieldProps {
  label: string
  name: string
  id: string;
}

const Checkbox = ({ label, name, id, ...rest }: Props) => {
  return (
    <div className="mb-4 text-black dark:text-white">
      <CheckboxField name={name} id={id} {...rest} />
      <Label name={id}>{label}</Label>
    </div>
  )
}

export default Checkbox
