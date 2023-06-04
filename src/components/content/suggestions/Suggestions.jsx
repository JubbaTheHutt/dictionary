import { useDispatch } from 'react-redux';
import { setWord } from '../../../redux/mainSlice.js';

const Suggestions = () => {
    const dispatch = useDispatch();
    const words = [
        'children',
        'RSVP',
        'a',
        'go',
        'child',
        'get',
        'come',
        'stereotype',
        'abandon',
        'fascism',
        'humble',
        'home',
        'take',
        'culture',
        'courtesy',
        'bias',
    ];

    const applySuggestion = (e) => {
        dispatch(setWord(e.target.outerText));
    };

    return (
        <>
            <h1 className={'mb-8 text-2xl'}>Most popular words of all time:</h1>
            <div
                className={'flex gap-4 flex-wrap justify-between items-center'}
            >
                {words.map((item, idx) => (
                    <div
                        key={idx}
                        onClick={(e) => applySuggestion(e)}
                        className={
                            'bg-[#f4f4f4] dark:bg-[#1f1f1f] dark:hover:bg-[#2f2f2f] rounded-lg flex-grow-1 md:w-1/5 w-[45%] p-6 text-center hover:bg-[#f0f0f0] cursor-pointer'
                        }
                    >
                        {item}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Suggestions;
