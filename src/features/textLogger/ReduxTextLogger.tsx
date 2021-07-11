import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks";
import { useAppDispatch } from "../../app/store";
import { TextLogger } from "./TextLogger";
import { editLogger, removeLogger, selectLoggerById, selectPortIsLoading, setPortLoading } from "./textLoggerSlice";


type ReduxTextLoggerProps = {
    loggerId: EntityId;
}

export function ReduxTextLogger({loggerId}: ReduxTextLoggerProps) {

    const logger = useAppSelector(state => selectLoggerById(state, loggerId));
    const portIsLoading = useAppSelector(state => selectPortIsLoading(state, loggerId));
    const dispatch = useAppDispatch();

    const onUpdate = (text: string) => {
        dispatch(editLogger({id: loggerId, changes: {text}}));
        dispatch(setPortLoading({port: logger!.port, loading: false}))
    }

    return logger ?
        (<div>
            <TextLogger 
                logger={logger} 
                portIsLoading={portIsLoading}
                setLoading={(loading: boolean) => dispatch(setPortLoading({port: logger.port, loading}))}
                onUpdate={onUpdate} 
                onDelete={() => dispatch(removeLogger(loggerId))} />
        </div>)
    : null;
}