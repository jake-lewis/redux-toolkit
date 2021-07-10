import { useState } from 'react';
import './TextLogger.scss';
import { Logger } from './textLoggerSlice';

interface Props {
    logger: Logger,
    portIsLoading: boolean,
    setLoading: (loading: boolean) => void,
    onUpdate: (text: string) => void,
    onDelete: () => void
}

export function TextLogger({logger, portIsLoading, setLoading, onUpdate, onDelete}: Props) {

    const [textValue, setTextValue] = useState(logger.text);
    const [isEditing, setEditing] = useState(false);

    const isLoading = portIsLoading && !isEditing;
    
    const onClickEdit = () => {
        setEditing(true);
        setLoading(true);
    }
    const onSubmit = () => {
        onUpdate(textValue);
        setEditing(false);
        setLoading(false);
    }
    const onCancel = () => {
        setTextValue(logger.text);
        setEditing(false);
        setLoading(false);
    }

    return(
        <div className={`textLogger${isLoading ? ' loading' : ''}`}>
            <p>Port: {logger.port}</p>
            <input
                type="text"
                placeholder={'Text here'}
                readOnly={!isEditing}
                onChange={event => setTextValue(event.target.value)} 
                value={textValue}/>

            {!isEditing && <button onClick={onClickEdit} disabled={isLoading}>Edit</button>}
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