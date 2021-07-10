import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ConnectedTextLogger } from "./ConnectedTextLogger";
import { addLogger, selectLoggerIds } from "./textLoggerSlice"

export function ConnectedTextLoggerList() {

    const loggers = useAppSelector(state => selectLoggerIds(state));
    const dispatch = useAppDispatch();

    return (
        <div>
            <button onClick={() => dispatch(addLogger({id: 1234, port: 3456, text: 'new logger'}))}>Add Logger</button>
            {loggers.map(id => <ConnectedTextLogger loggerId={id}/>)}
        </div>);
}