import { useSelector } from 'react-redux';
import Dictionary from './dictionary/Dictionary.jsx';
import NotFound from './notFound/NotFound.jsx';
import Loader from './loader/Loader.jsx';
import Suggestions from './suggestions/Suggestions.jsx';

const Content = () => {
    const status = useSelector((state) => state.mainSlice.status);

    switch (status) {
        case 'idle':
            return <Suggestions />;
        case 'fulfilled':
            return <Dictionary />;
        case 'loading':
            return <Loader />;
        case 'error':
            return <NotFound />;
        default:
            break;
    }
};

export default Content;
