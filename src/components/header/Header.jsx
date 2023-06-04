import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { TbMoon } from 'react-icons/tb';
import { FiSearch } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { fetchData, setColorMode, setWord } from '../../redux/mainSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { BsBookHalf } from 'react-icons/bs';
const Header = () => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState('');
    const word = useSelector((state) => state.mainSlice.word);
    const colorScheme = useSelector((state) => state.mainSlice.colorMode);

    const submitWord = (e) => {
        e.preventDefault();
        dispatch(setWord(inputText));
    };

    useEffect(() => {
        if (!word.length) return;
        dispatch(fetchData(word));
    }, [word]);

    const toggleColor = (e) => {
        e.target.checked;
        dispatch(setColorMode());
    };

    return (
        <header className={'flex flex-col py-8'}>
            <div className={'flex justify-between p-2 py-4'}>
                <div className={'text-[#767676] text-4xl'}>
                    <BsBookHalf />
                </div>
                <div className={'flex gap-4 justify-center items-center'}>
                    <Toggle
                        defaultChecked={colorScheme === 'dark'}
                        onChange={(e) => toggleColor(e)}
                        icons={false}
                        className={'toggler'}
                    />
                    <TbMoon className={'text-2xl text-[#767676]'} />
                </div>
            </div>
            <form className={'flex'}>
                <input
                    type='text'
                    className={
                        'p-4 w-full bg-[#f4f4f4] font-semibold rounded-l-[13px] dark:bg-[#1f1f1f]'
                    }
                    onChange={(e) => setInputText(e.target.value)}
                    value={inputText}
                    placeholder={'Search...'}
                />
                <button
                    className={
                        'bg-[#f4f4f4] text-[#a543eb] text-xl font-semibold rounded-r-[13px] p-4 dark:bg-[#1f1f1f]'
                    }
                    onClick={(e) => submitWord(e)}
                >
                    <FiSearch />
                </button>
            </form>
        </header>
    );
};

export default Header;
