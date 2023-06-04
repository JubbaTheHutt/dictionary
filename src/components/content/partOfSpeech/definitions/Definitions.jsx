import PropTypes from 'prop-types';

const Definitions = (props) => {
    return (
        <li className={'px-8'}>
            {props.definition} <br />
            {props.example?.length && (
                <span className={'text-[#767676]'}>"{props.example}"</span>
            )}
        </li>
    );
};

Definitions.propTypes = {
    definition: PropTypes.string,
    example: PropTypes.string,
};
export default Definitions;
