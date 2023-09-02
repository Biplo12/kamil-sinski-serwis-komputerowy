interface IFormField {
  id: string;
  label: string;
  type: string;
  formState: {
    email: string;
    password: string;
  };
  setFormState: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
}

const FormField: React.FC<IFormField> = ({
  id,
  label,
  type,
  formState,
  setFormState,
}) => (
  <div className='flex flex-col'>
    <label
      htmlFor={id}
      className={`
        mb-1 text-sm font-bold text-white transition duration-300 ease-in-out
      `}
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      className='input ease outline-none duration-300 focus:ring-0'
      value={formState[id]}
      onChange={(e) => setFormState({ ...formState, [id]: e.target.value })}
    />
  </div>
);

export default FormField;
