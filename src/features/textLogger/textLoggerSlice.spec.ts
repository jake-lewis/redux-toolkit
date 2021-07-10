import { createEntityAdapter } from '@reduxjs/toolkit';
import textLoggerReducer, {
  addLogger,
  editLogger,
  removeLogger,
  Logger
} from './textLoggerSlice';

describe('counter reducer', () => {
  const loggerAdapter = createEntityAdapter<Logger>();
  const initialState = loggerAdapter.getInitialState();

  it('should handle initial state', () => {
    expect(textLoggerReducer(undefined, { type: 'unknown' })).toEqual({
      loggers:[]
    });
  });

  it('should handle adding a logger', () => {
    const actual = textLoggerReducer(initialState, addLogger({id: 3, port: 1235, text: 'Test adding logger'}));
    expect(actual.entities).toHaveLength(3);
  });

  it('added logger values should match', () => {
    const newLogger = {id: 3, port: 1235, text: 'Test values of added logger'};
    const actual = textLoggerReducer(initialState, addLogger(newLogger));
    expect(actual.entities).toContain(newLogger);
  });

  it('should handle editing a logger', () => {
    const actual = textLoggerReducer(initialState, editLogger({id: 2,  changes: {port: 1234, text: 'new text'} }));
    expect(actual.entities[2]?.text).toEqual('new text');
  });

  it('should handle removing a logger', () => {
    const actual = textLoggerReducer(initialState, removeLogger(2));
    expect(actual.entities).toHaveLength(1);
  });
});
