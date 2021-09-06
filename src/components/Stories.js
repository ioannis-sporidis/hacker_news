import React from 'react';
import { useGlobalContext } from '../helpers/context';

const Stories = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className='loading'></div>;
  }

  return <div></div>;
};

export default Stories;
