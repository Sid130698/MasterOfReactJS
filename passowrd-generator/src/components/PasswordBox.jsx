import React, { useState, useCallback, useEffect, useRef } from 'react';
import ToolBar from './ToolBar';

const PasswordBox = () => {
    const [length, setLength] = useState(8);
    const [isSpCharAllowed, setSPCharAllowed] = useState(false);
    const [isNumAllowed, setNumAllowed] = useState(false);
    const [generatedpassword, setGeneratedPassword] = useState("password");
    const [copyBtn, setCopyButton] = useState("copy");
    //useRef hook
    const passwordRef = useRef()
    const passwordGenerator = useCallback(() => {
        let password = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        str += isNumAllowed ? "0123456789" : "";
        str += isSpCharAllowed ? "!@#$%&'()*^-+/?{}|<=>`~" : "";
        for (let i = 0; i < length; i++) {
            let charIndex = Math.floor(Math.random() * str.length);
            password += str.charAt(charIndex);
        }
        setGeneratedPassword(password);
        setCopyButton("Copy")
    }, [length, isNumAllowed, isSpCharAllowed,setGeneratedPassword]);

    useEffect(() => {
        passwordGenerator();
    }, [length, isNumAllowed, isSpCharAllowed, passwordGenerator]);
    const copyPasswordToClipBoard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(generatedpassword);
        setCopyButton("Copied✔️");
    },[generatedpassword]);
    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-xl bg-cyan-900 px-5 py-6'>
                <div className='text-center mb-2 text-xl text-white'>Password generator </div>
                <div className='flex items-center justify-center'>
                    <input 
                        type="text" 
                        className='box-border bg-white px-3 py-3 rounded-l-lg w-80' 
                        ref={passwordRef} 
                        readOnly 
                        value={generatedpassword}
                    />
                    <button className='outline-none bg-blue-400 py-3 px-3 pr-20 rounded-r-lg w-20' onClick={copyPasswordToClipBoard}>{copyBtn}</button>
                </div>
                <ToolBar length={length} setLength={setLength} num={isNumAllowed} setNum={setNumAllowed} spChar={isSpCharAllowed} setSPChar={setSPCharAllowed} />
            </div>
        </div>
    );
}

export default PasswordBox;
