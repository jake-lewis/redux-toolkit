import { EntityId } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { TextLogger } from "./TextLogger";
import { removeLogger, selectLoggerById } from "./textLoggerSlice";


type ReduxTextLoggerProps = {
    loggerId: EntityId;
}

export function ReduxTextLogger({loggerId}: ReduxTextLoggerProps) {

    const logger = useAppSelector(state => selectLoggerById(state, loggerId));
    const dispatch = useAppDispatch();

    return logger ?
        (<div>
            <TextLogger logger={logger} onDelete={() => dispatch(removeLogger(loggerId))} />
        </div>)
    : null;
}