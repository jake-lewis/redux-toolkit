import './TextLogger.scss';
import { Logger } from './textLoggerSlice';

interface Props {
    logger: Logger,
    onDelete: () => void
}

export function TextLogger({logger, onDelete}: Props) {
    return(
        <div className="textLogger">
            <p>Port: {logger.port} | {logger.text}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}