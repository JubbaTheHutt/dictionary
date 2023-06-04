import { useSelector } from 'react-redux';
import { BiError } from 'react-icons/bi';

const NotFound = () => {
    const error = useSelector((state) => state.mainSlice.error);
    const word = useSelector((state) => state.mainSlice.word);

    return (
        <div className={'flex flex-col justify-center items-center'}>
            <h1 className={'text-4xl pt-4 pb-8'}>
                Error {error}! Word "{word}" doesn't exist.
            </h1>
            <BiError className={'text-[140px]'} />
        </div>
    );
};

export default NotFound;
