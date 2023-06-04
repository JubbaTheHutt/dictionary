import Synonyms from './synonyms/Synonyms.jsx';
import Definitions from './definitions/Definitions.jsx';
import * as PropTypes from 'prop-types';

const PartOfSpeech = (props) => {
    return (
        <div className={'flex flex-col'}>
            <div className={'flex font-bold items-center gap-6 py-4'}>
                <span>{props.partOfSpeech}</span>
                <div
                    className={'border-[1px] w-full grow-1 bg-[#f4f4f4]'}
                ></div>
            </div>
            {props.definitions.length > 0 && (
                <figure className={'pb-6'}>
                    <figcaption className={'text-[#929292] py-4'}>
                        Meaning
                    </figcaption>
                    <ul className={'flex flex-col gap-4'}>
                        {props.definitions.map((item, idx) => (
                            <Definitions
                                key={`def-${idx}`}
                                definition={item.definition}
                                example={item.example}
                            />
                        ))}
                    </ul>
                </figure>
            )}
            {props.synonyms.length > 0 && (
                <figure>
                    <figcaption className={'text-[#929292] py-4'}>
                        Synonyms
                    </figcaption>
                    <div className={'flex flex-col gap-4'}>
                        {props.synonyms.map((item, idx) => (
                            <Synonyms key={`syn-${idx}`} name={item} />
                        ))}
                    </div>
                </figure>
            )}
        </div>
    );
};

PartOfSpeech.propTypes = {
    synonyms: PropTypes.array,
    definitions: PropTypes.array,
    partOfSpeech: PropTypes.string,
};

export default PartOfSpeech;
