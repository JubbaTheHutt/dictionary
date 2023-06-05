import { useEffect } from 'react';
import PlayButton from './playButton/PlayButton.jsx';
import PartOfSpeech from '../partOfSpeech/PartOfSpeech.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setAudio, setText } from '../../../redux/mainSlice.js';
import Source from './source/Source.jsx';

const Dictionary = () => {
    const dispatch = useDispatch();
    const text = useSelector((state) => state.mainSlice.text);
    const audio = useSelector((state) => state.mainSlice.audio);
    const response = useSelector((state) => state.mainSlice.response);

    useEffect(() => {
        const findText = () => {
            let text;
            for (let i = 0; i < response.phonetics.length; i++) {
                if (response.phonetics[i]?.text?.length > 0) {
                    dispatch(setText(response.phonetics[i].text));
                    text = response.phonetics[i].text;
                    break;
                }
            }
            if (text === '') dispatch(setAudio(''));
        };
        const findAudio = () => {
            let audio = '';
            for (let i = 0; i < response.phonetics.length; i++) {
                if (response.phonetics[i]?.audio?.length) {
                    dispatch(setAudio(response.phonetics[i].audio));
                    audio = response.phonetics[i].audio;
                    break;
                }
            }
            if (audio === '') dispatch(setAudio(''));
        };

        if (Object.keys(response).length !== 0) {
            findText();
            findAudio();
        }
    }, [dispatch, response]);

    return (
        <div className={'flex flex-col gap-8'}>
            <div className={'flex justify-between items-center'}>
                <div className={'flex flex-col gap-4'}>
                    <h1 className={'text-5xl font-semibold'}>
                        {response.word}
                    </h1>
                    <span className={'text-[#9b60ca]'}>{text}</span>
                </div>
                <PlayButton audio={audio} />
            </div>
            <div className={'flex flex-col gap-4'}>
                {response.meanings?.map((item, idx) => (
                    <PartOfSpeech key={idx} {...item} />
                ))}
            </div>
            <Source response={response} />
        </div>
    );
};

export default Dictionary;
