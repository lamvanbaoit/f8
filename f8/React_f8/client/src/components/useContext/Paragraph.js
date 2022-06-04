import React, { useContext } from 'react';
import { ThemeContext } from './useContext';

function Paragraph({ theme }) {
    const theme1 = useContext(ThemeContext);
    // console.log({ theme });
    // className={theme}
    return <div className={theme1}>Paragraph</div>;
}

export default Paragraph;
