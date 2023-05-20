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

import { isLocal } from '@/constant/env';
import { IOrderInputValues } from '@/interfaces';
const CreateOrderForm: React.FC = (): JSX.Element => {
  let inputValuesInit: IOrderInputValues = {
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    ordertitle: '',
    orderdescription: '',
    price: '',
  };

  isLocal &&
    (inputValuesInit = {
      firstname: 'John',
      lastname: 'Doe',
      email: `john.doe${Math.floor(Math.random() * 1000)}@gmail.com`,
      phonenumber: Math.floor(Math.random() * 1000000000).toString(),
      ordertitle: 'iPhone 12 Pro Max',
      orderdescription: 'Broken screen',
      price: '100',
    });

  const [inputValues, setInputValues] =
    useState<IOrderInputValues>(inputValuesInit);
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
      maxLength: 30,
    },
    {
      label: 'Phone Number',
      icon: <PhoneAndroidRoundedIcon />,
      placeholder: 'Phone Number',
      type: 'tel',
      maxLength: 9,
    },
    {
      label: 'Order Title',
      icon: <TitleRoundedIcon />,
      placeholder: 'Order Title',
      type: 'text',
      maxLength: 150,
    },
    {
      label: 'Price',
      icon: <AttachMoneyRoundedIcon />,
      placeholder: 'Price',
      type: 'number',
      maxLength: 6,
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
