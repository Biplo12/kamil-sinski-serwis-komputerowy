import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import TitleRoundedIcon from '@mui/icons-material/TitleRounded';
import React, { Fragment, useEffect, useMemo, useState } from 'react';

import ImagesDrop from '@/components/Dashboard/CreateOrder/Partials/ImagesDrop';
import InputField from '@/components/Dashboard/CreateOrder/Partials/InputField';
import TextAreaField from '@/components/Dashboard/CreateOrder/Partials/TextAreaField';
import EditOrderButton from '@/components/Dashboard/OrderDetails/Partials/EditOrderButton';
import SelectOrderStatus from '@/components/Dashboard/OrderDetails/Partials/SelectOrderStatus';

import { IInputValues } from '@/interfaces';
import { IOrder } from '@/interfaces/IOrderSlice';

interface IEditOrderDetails {
  orderDetails: IOrder | null;
}

const EditOrderDetails: React.FC<IEditOrderDetails> = ({
  orderDetails,
}): JSX.Element => {
  const inputValuesInit = useMemo(() => {
    return {
      ordertitle: orderDetails?.ordertitle,
      orderdescription: orderDetails?.orderdescription,
      price: orderDetails?.price,
    };
  }, [
    orderDetails?.ordertitle,
    orderDetails?.orderdescription,
    orderDetails?.price,
  ]);

  const [inputValues, setInputValues] = useState<IInputValues>(inputValuesInit);

  useEffect(() => {
    setInputValues(inputValuesInit);
  }, [inputValuesInit]);

  const inputFields = [
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
    <div className='mb-10 mt-5 w-full'>
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
        <SelectOrderStatus />
      </div>
      <EditOrderButton
        inputValues={inputValues}
        orderId={orderDetails?.orderId}
        orderDetails={orderDetails}
      />
    </div>
  );
};
export default EditOrderDetails;
