import './TextLogger.scss';
import { Logger } from './textLoggerSlice';

interface Props {
    logger: Logger
}

export function TextLogger({logger}: Props) {

    return(
        <div className="textLogger">
            <p>Port: {logger.port} | {logger.text}</p>
        </div>
    )
}