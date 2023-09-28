import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineCheck } from "react-icons/ai";


export const notify = () => toast.success('عملیات با موفقیت انجام شد', {
  duration: 4000,
  position: 'top-center',

  // Styling
  style: {},
  className: '',

  // Custom Icon
  icon: <AiOutlineCheck />,

  // Change colors of success/error/loading icon
  iconTheme: {
      primary: '#000',
      secondary: '#fff',
  },

  // Aria
  ariaProps: {
      role: 'status',
      'aria-live': 'polite',
  },
});

export const ToasterCom = ()=>
<Toaster
position="top-center"
reverseOrder={false}
gutter={8}
containerClassName=""
containerStyle={{}}
toastOptions={{
    className: '',
    duration: 5000,
    style: {
        background: '#22c55e',
        color: '#fff',
    },

    success: {
        duration: 3000,
        theme: {
            primary: 'green',
            secondary: 'black',
        },
    },
}}
/>