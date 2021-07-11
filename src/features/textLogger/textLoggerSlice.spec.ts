import { createEntityAdapter } from '@reduxjs/toolkit';
import textLoggerReducer, {
  addLogger,
  editLogger,
  removeLogger,
  Logger
} from './textLoggerSlice';

describe('counter reducer', () => {
  const loggerAdapter = createEntityAdapter<Logger>();
  const initialState = loggerAdapter.getInitialState({
    loadingPorts: [] as number[]
  });
  initialState.entities = { 
    1: {id: 1, port: 1234, text: 'First'}, 
    2: {id: 2, port: 4567, text: 'Second'}
  }
  initialState.ids = Object.keys(initialState.entities).map(Number);

  it('should handle initial state', () => {
    expect(textLoggerReducer(undefined, { type: 'unknown' })).toEqual({
      entities:{},
      ids: [],
      loadingPorts: []
    });
  });

  it('should handle adding a logger', () => {
    const actual = textLoggerReducer(initialState, addLogger({port: 1235, text: 'Test adding logger'}));
    expect(actual.ids).toHaveLength(3);
  });

  it('added logger values should match', () => {
    const newLogger = {id: 3, port: 1235, text: 'Test values of added logger'};
    const actual = textLoggerReducer(initialState, addLogger(newLogger));
    expect(actual.entities[3]).toEqual(newLogger);
  });

  it('should handle editing a logger\'s port', () => {
    const actual = textLoggerReducer(initialState, editLogger({id: 2,  changes: {port: 1234} }));
    expect(actual.entities[2]?.port).toEqual(1234);
  });
  
  it('should handle editing a logger\'s text', () => {
    const actual = textLoggerReducer(initialState, editLogger({id: 2,  changes: {text: 'new text'} }));
    expect(actual.entities[2]?.text).toEqual('new text');
  });

  it('should handle removing a logger', () => {
    const actual = textLoggerReducer(initialState, removeLogger(2));
    expect(actual.ids).toHaveLength(1);
  });
});
