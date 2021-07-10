import { EntityId } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { TextLogger } from "./TextLogger";
import { editLogger, removeLogger, selectLoggerById, selectPortIsLoading } from "./textLoggerSlice";


type ReduxTextLoggerProps = {
    loggerId: EntityId;
}

export function ReduxTextLogger({loggerId}: ReduxTextLoggerProps) {

    const logger = useAppSelector(state => selectLoggerById(state, loggerId));
    const portIsLoading = useAppSelector(state => selectPortIsLoading(state, logger?.id ?? 0));
    const dispatch = useAppDispatch();

    return logger ?
        (<div>
            <TextLogger 
                logger={logger} 
                portIsLoading={portIsLoading}
                onEdit={text => dispatch(editLogger({id: loggerId, changes: {text}}))} 
                onDelete={() => dispatch(removeLogger(loggerId))} />
        </div>)
    : null;
}