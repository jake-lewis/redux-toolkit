import { useState } from 'react';
import './TextLogger.scss';
import { Logger } from './textLoggerSlice';

interface Props {
    logger: Logger,
    onEdit: (text: string) => void,
    onDelete: () => void
}

export function TextLogger({logger, onEdit, onDelete}: Props) {

    const [textValue, setTextValue] = useState(logger.text);
    const [isEditing, setEditing] = useState(false);

    const toggleEditing = () => setEditing(editing => !editing);
    const onSubmit = () => {
        onEdit(textValue);
        toggleEditing();
    }

    return(
        <div className="textLogger">
            <p>Port: {logger.port}</p>
            <input
                type="text"
                placeholder={'Text here'}
                readOnly={!isEditing}
                onChange={event => setTextValue(event.target.value)} 
                value={textValue}/>

            {!isEditing && <button onClick={toggleEditing}>Edit</button>}
            {isEditing && 
                <>
                    <button onClick={() => onSubmit()}>Submit</button>
                    <button onClick={onDelete}>Delete</button>
                </>
            }
        </div>
    )
}