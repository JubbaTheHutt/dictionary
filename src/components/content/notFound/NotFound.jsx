import { useSelector } from 'react-redux';
import { BiError } from 'react-icons/bi';

const NotFound = () => {
    const word = useSelector((state) => state.mainSlice.word);

    return (
        <div className={'flex flex-col justify-center items-center'}>
            <h1 className={'text-4xl pt-4 pb-8 text-center'}>
                Word "{word}" not found.
            </h1>
            <BiError className={'text-[140px]'} />
        </div>
    );
};

export default NotFound;
