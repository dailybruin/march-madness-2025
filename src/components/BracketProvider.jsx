import React, { createContext, useState, useContext } from 'react';

const BracketContext = createContext();

export const BracketProvider = ({ children }) => {
    const [editor, setEditor] = useState('Ira');
    const [gen, setGen] = useState(["Women's"]);

    return (
        <BracketContext.Provider value={{ editor, setEditor, gen, setGen }}>
            {children}
        </BracketContext.Provider>
    );
};

export function useBracket() {
    return useContext(BracketContext);
}