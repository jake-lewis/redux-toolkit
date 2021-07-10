import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ReduxTextLogger } from "./ReduxTextLogger";
import { addLogger, selectLoggerIds } from "./textLoggerSlice"

export function ReduxTextLoggerList() {

    const loggers = useAppSelector(state => selectLoggerIds(state));
    const dispatch = useAppDispatch();
    const [port, setPort] = useState<number>();
    const [text, setText] = useState('Type here');

    return (
        <div>
            <button disabled={!(port && text)} onClick={() => dispatch(addLogger({port: port!, text}))}>Add Logger</button>
            <input type="number" placeholder="Port" value={port} onChange={(event) => setPort(event.target.valueAsNumber)} />
            <input type="text" placeholder="text" value={text} onChange={event => setText(event.target.value)} />
            {loggers.map(id => <ReduxTextLogger key={id} loggerId={id}/>)}
        </div>);
}