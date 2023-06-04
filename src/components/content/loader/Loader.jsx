import { AiOutlineLoading } from 'react-icons/ai';

const Loader = () => {
    return (
        <div className={'flex justify-center items-center'}>
            <AiOutlineLoading className={'animate-spin text-8xl'} />
        </div>
    );
};

export default Loader;
