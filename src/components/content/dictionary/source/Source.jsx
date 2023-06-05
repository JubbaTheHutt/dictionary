import { LuExternalLink } from 'react-icons/lu';
import * as PropTypes from 'prop-types';

const Source = (props) => {
    return (
        <div className={'pb-32'}>
            <div
                className={'border-[1px] my-4 mb-8 w-full grow-1 bg-[#f4f4f4]'}
            ></div>
            <div className={'flex gap-8'}>
                <span className={'text-[#9e9e9e]'}>Source</span>
                <div className={'max-w-[60%]'}>
                    <a
                        className={
                            'underline flex justify-start items-center gap-2'
                        }
                        href={props.response?.sourceUrls[0]}
                    >
                        {props.response?.sourceUrls[0]}
                        <LuExternalLink />
                    </a>
                </div>
            </div>
        </div>
    );
};

Source.propTypes = { response: PropTypes.any };

export default Source;
