import { useState } from 'react';
import './TextLogger.scss';
import { Logger } from './textLoggerSlice';

interface Props {
    logger: Logger,
    portIsLoading: boolean,
    onEdit: (text: string) => void,
    onDelete: () => void
}

export function TextLogger({logger, portIsLoading, onEdit, onDelete}: Props) {

    const [textValue, setTextValue] = useState(logger.text);
    const [isEditing, setEditing] = useState(false);

    const isLoading = portIsLoading && !isEditing;
    const onSubmit = () => {
        onEdit(textValue);
        setEditing(false);
    }
    const onCancel = () => {
        setTextValue(logger.text);
        setEditing(false);
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

            {!isEditing && <button onClick={() => setEditing(true)}>Edit</button>}
            {isEditing && 
                <>
                    <button onClick={onSubmit}>Submit</button>
                    <button onClick={onCancel}>Cancel</button>
                    <button onClick={onDelete}>Delete</button>
                </>
            }
        </div>
    )
}