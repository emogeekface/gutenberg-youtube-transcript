/**
 * BLOCK: transcript-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//
//  Import CSS.
import './style.scss';
import './editor.scss';

const { createHigherOrderComponent } = wp.compose;
const { Fragment} = wp.element;
const { RichText } = wp.editor;

const transcriptAttributes = {
    transcript: {
        type: 'array',
        source: 'children',
        selector: '.my-transcript',
        default: [],
    }
};

const registerAttributes = ( settings, name ) => {

    if ( 'core-embed/youtube' !== name ) {
        return settings;
    }

    settings.attributes = Object.assign( settings.attributes, transcriptAttributes );
    return settings;
};

wp.hooks.addFilter( 'blocks.registerBlockType', 'cgb/block-transcript-block', registerAttributes );

const addTranscriptToYoutube =  createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        if(props.name !== "core-embed/youtube") {
            return (
                <Fragment>
                    <BlockEdit { ...props } />
                </Fragment>
            );
        } else {
            const {
                attributes,
                setAttributes
            } = props;

            const {
                transcript
            } = attributes;

            return (
                <Fragment>
                    <BlockEdit {...props} />
                    <div className="youtube-transcript">
                        <a href={'#'} title={"Show transcript for video"}>Show Transcript</a>
                        <RichText
                        className="my-transcript"
                        placeholder="write transcript"
                        value={transcript}
                        multiline={'p'}
                        onChange={ function( value ){
                            setAttributes({ transcript: value });
                        } }
                        />
                    </div>
                </Fragment>
            );
        }
    };
});

wp.hooks.addFilter( 'editor.BlockEdit', 'cgb/block-transcript-block', addTranscriptToYoutube );

const saveAttributes = ( element, blockType, attributes ) => {
    if (!element ) {
        return;
    }

    if ( 'core-embed/youtube' !== blockType.name ) {
        return element;
    }

    return (
        <Fragment>
            {element}
            <div className="youtube-transcript">
                <a href='#' title="Show transcript for video">Show Transcript</a>
                <div className="my-transcript">{attributes.transcript}</div>
            </div>
        </Fragment>
    );

}

wp.hooks.addFilter(
    'blocks.getSaveElement',
    'cgb/block-transcript-block',
    saveAttributes
);
