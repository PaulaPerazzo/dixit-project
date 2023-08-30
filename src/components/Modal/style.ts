import styled from 'styled-components';
import Modal from 'react-modal';
import { Inter } from 'next/font/google';

const inter = Inter({
   subsets: ['latin'],
   weight: '600',
   style:'normal'

})

export const ModalWrapper = styled(Modal)`
     display: grid;
     width: 569px;
     height: 230px;
     flex-shrink: 0;
     justify-content: center;
     align-items: center;
     margin-left: 30%;
     margin-top: 13%;
     border-radius: 8px;
     background-color: rgba(0, 0, 0, 0.95);
     text-align: center;
     font-family: ${inter};
     font-size: 22px;
     font-style: normal;
     font-weight: 600;
     line-height: normal;
     color: #FFF;
     /* grid-template-rows: auto auto;
     gap: 20px; 
     align-items: center;  */

     grid-template-columns: 100%;
     grid-template-rows: 110px;

     overlay {
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
     }

    content {
        border-radius: 8px;
        padding: 20px;
        max-width: 400px;
        width: 90%;
        position: relative;
     }

     .button {
         display: flex;
         margin-bottom: 20px;
     }
`;
