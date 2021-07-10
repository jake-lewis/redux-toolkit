import { EntityId } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { TextLogger } from "./TextLogger";
import { removeLogger, selectLoggerById } from "./textLoggerSlice";


type ConnectedTextLoggerProps = {
    loggerId: EntityId;
}

export function ConnectedTextLogger({loggerId}: ConnectedTextLoggerProps) {

    const logger = useAppSelector(state => selectLoggerById(state, loggerId));
    const dispatch = useAppDispatch();

    return logger ?
        (<div>
            <TextLogger logger={logger} />
            <button onClick={() => dispatch(removeLogger(loggerId))}>Delete</button>
        </div>)
    : null;
}