import { useState } from 'react';

import FormField from '@/components/Dashboard/auth/Partials/FormField';
import FormSubmitButton from '@/components/Dashboard/auth/Partials/FormSubmitButton';

const SignInCard: React.FC = (): JSX.Element => {
  const initialFormState = {
    email: '',
    password: '',
  };

  const [formState, setFormState] = useState(initialFormState);

  const formFields = [
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <div className='bg-pylon mx-2 rounded-lg p-5 shadow-lg md:p-20'>
      <img
        src='/images/big-logo.png'
        alt='logo'
        className='mx-auto mb-5 h-20 w-auto'
      />
      <form className='flex flex-col gap-5'>
        {formFields.map((field) => (
          <FormField
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            formState={formState}
            setFormState={setFormState}
          />
        ))}
        <FormSubmitButton />
      </form>
    </div>
  );
};

export default SignInCard;
