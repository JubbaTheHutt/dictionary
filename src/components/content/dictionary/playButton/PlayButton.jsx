import { BsPlayFill } from 'react-icons/bs';
import * as PropTypes from 'prop-types';

const PlayButton = (props) => {
    const audio = new Audio(props.audio);

    return (
        <div>
            <button
                disabled={!props.audio}
                onClick={() => audio.play()}
                className={
                    'bg-[#e9cffa] dark:bg-[#2c1342] p-4 rounded-full disabled:opacity-40'
                }
            >
                <BsPlayFill className={'text-[#a543eb]  text-3xl'} />
            </button>
        </div>
    );
};

PlayButton.propTypes = {
    onClick: PropTypes.func,
    audio: PropTypes.any,
};

export default PlayButton;
