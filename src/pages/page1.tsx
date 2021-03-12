import React, { memo } from 'react';
import Header from '@components/header';
import Footer from '@components/footer';

type Props = {};

const SimpleForm: React.FC<Props> = ({}) => {
  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default memo(SimpleForm);
