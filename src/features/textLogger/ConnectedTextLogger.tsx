import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks";
import { TextLogger } from "./TextLogger";
import { selectLoggerById } from "./textLoggerSlice";


type ConnectedTextLoggerProps = {
    loggerId: EntityId;
}

export function ConnectedTextLogger({loggerId}: ConnectedTextLoggerProps) {

    const logger = useAppSelector(state => selectLoggerById(state, loggerId));

    return logger ?
        (<div>
            <TextLogger logger={logger} />
        </div>)
    : null;
}