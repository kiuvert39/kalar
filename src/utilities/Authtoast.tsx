
import React from 'react';
import { toast } from 'react-toastify';

const Toast: React.FC<{ message: string }> = (props) => {
  toast.error(props.message);
  return null;
};

export default Toast;
