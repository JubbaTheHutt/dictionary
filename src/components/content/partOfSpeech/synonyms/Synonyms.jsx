import { setWord } from '../../../../redux/mainSlice.js';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const Synonyms = (props) => {
    const dispatch = useDispatch();
    const applySuggestion = (e) => {
        dispatch(setWord(e.target.outerText));
    };

    return (
        <span
            onClick={(e) => applySuggestion(e)}
            className={'px-8 text-[#9046d1] cursor-pointer'}
        >
            {props.name}
        </span>
    );
};

Synonyms.propTypes = {
    name: PropTypes.string,
};

export default Synonyms;
