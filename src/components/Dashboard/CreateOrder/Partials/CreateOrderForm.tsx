import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import TitleRoundedIcon from '@mui/icons-material/TitleRounded';
import React, { Fragment, useState } from 'react';

import CreateOrderButton from '@/components/Dashboard/CreateOrder/Partials/CreateOrderButton';
import ImagesDrop from '@/components/Dashboard/CreateOrder/Partials/ImagesDrop';
import InputField from '@/components/Dashboard/CreateOrder/Partials/InputField';
import TextAreaField from '@/components/Dashboard/CreateOrder/Partials/TextAreaField';

import { IInputValues } from '@/interfaces';
const CreateOrderForm: React.FC = (): JSX.Element => {
  const inputValuesInit: IInputValues = {
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    ordertitle: '',
    orderdescription: '',
    price: 0,
  };

  const [inputValues, setInputValues] = useState<IInputValues>(inputValuesInit);
  const inputFields = [
    {
      label: 'First Name',
      icon: <AccountCircleRoundedIcon />,
      placeholder: 'First Name',
      type: 'text',
      maxLength: 20,
    },
    {
      label: 'Last Name',
      icon: <AccountCircleRoundedIcon />,
      placeholder: 'Last Name',
      type: 'text',
      maxLength: 20,
    },
    {
      label: 'Email',
      icon: <AlternateEmailRoundedIcon />,
      placeholder: 'Email',
      type: 'email',
      maxLength: 50,
    },
    {
      label: 'Phone Number',
      icon: <PhoneAndroidRoundedIcon />,
      placeholder: 'Phone Number',
      type: 'text',
      maxLength: 9,
    },
    {
      label: 'Order Title',
      icon: <TitleRoundedIcon />,
      placeholder: 'Order Title',
      type: 'text',
      maxLength: 200,
    },
    {
      label: 'Price',
      icon: <AttachMoneyRoundedIcon />,
      placeholder: 'Price',
      type: 'number',
      maxLength: 10,
    },
  ];
  return (
    <div className='mb-10 w-full'>
      {inputFields.map((inputField, index) => (
        <Fragment key={index}>
          <InputField
            label={inputField.label}
            icon={inputField.icon}
            placeholder={inputField.placeholder}
            type={inputField.type}
            inputValues={inputValues}
            setInputValues={setInputValues}
            maxLength={inputField.maxLength}
          />
        </Fragment>
      ))}
      <div className='flex flex-col'>
        <TextAreaField
          label='Order Description'
          placeholder='Order Description'
          inputValues={inputValues}
          setInputValues={setInputValues}
        />
        <ImagesDrop />
      </div>
      <CreateOrderButton inputValues={inputValues} />
    </div>
  );
};
export default CreateOrderForm;
