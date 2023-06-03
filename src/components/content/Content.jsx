import { BsPlayFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PartOfSpeech from './partOfSpeech/PartOfSpeech.jsx';
import useSound from 'use-sound';

const Content = () => {
    const [response, setResponse] = useState({});
    const [inputText, setInputText] = useState('');
    const [word, setWord] = useState('');
    const [phonetic, setPhonetic] = useState('');
    const [phoneticAudio, setPhoneticAudio] = useState('');
    const [status, setStatus] = useState('');
    const [play] = useSound(phoneticAudio);

    const submitWord = () => {
        setWord(inputText);
    };

    useEffect(() => {
        if (!word.length) return;
        setStatus('loading');

        axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then((response) => {
                setResponse(response.data[0]);
                setStatus('fulfilled');
            })
            .catch((error) => {
                console.log(error);
                setStatus('error');
            });
    }, [word]);

    useEffect(() => {
        const findText = () => {
            for (let i = 0; i < response.phonetics.length; i++) {
                if (response.phonetics[i]?.text?.length > 0) {
                    setPhonetic(response.phonetics[i].text);
                    break;
                }
            }
        };
        const findAudio = () => {
            for (let i = 0; i < response.phonetics.length; i++) {
                if (response.phonetics[i]?.audio?.length) {
                    setPhoneticAudio(response.phonetics[i].audio);
                    break;
                }
            }
        };

        if (Object.keys(response).length !== 0) {
            findText();
            findAudio();
            console.log(phoneticAudio);
        }
    }, [phoneticAudio, response]);

    const handlePlay = () => {
        play();
    };

    return (
        <div className={'flex flex-col gap-8'}>
            <div className={'flex'}>
                <input
                    type='text'
                    className={
                        'p-4 w-full bg-[#f4f4f4] font-semibold rounded-l-[13px]'
                    }
                    onChange={(e) => setInputText(e.target.value)}
                    value={inputText}
                    placeholder={'Search...'}
                />
                <button
                    className={
                        'bg-[#f4f4f4] text-[#a543eb] text-xl font-semibold rounded-r-[13px] p-4'
                    }
                    onClick={submitWord}
                >
                    <FiSearch />
                </button>
            </div>
            <div className={'flex justify-between items-center'}>
                <div className={'flex flex-col gap-4'}>
                    <h1 className={'text-5xl font-semibold'}>
                        {response.word}
                    </h1>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <span className={'text-[#9b60ca]'}>{phonetic}</span>
                </div>
                <div>
                    <button
                        onClick={handlePlay}
                        className={'bg-[#e9cffa] p-4 rounded-full'}
                    >
                        {phoneticAudio}
                        <BsPlayFill className={'text-[#a543eb] text-3xl'} />
                    </button>
                </div>
            </div>
            <div className={'flex flex-col gap-4'}>
                {response.meanings?.map((item, idx) => (
                    <PartOfSpeech key={idx} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Content;
