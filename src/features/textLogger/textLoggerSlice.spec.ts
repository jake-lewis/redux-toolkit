import textLoggerReducer, {
  LoggerState,
  add,
  edit,
  remove
} from './textLoggerSlice';

describe('counter reducer', () => {
  const initialState: LoggerState = {
    loggers: [
      {port: 1231, text: 'First logger'},
      {port: 1234, text: 'Second logger'}
    ]
  };

  it('should handle initial state', () => {
    expect(textLoggerReducer(undefined, { type: 'unknown' })).toEqual({
      loggers:[]
    });
  });

  it('should handle adding a logger', () => {
    const actual = textLoggerReducer(initialState, add({port: 1235, text: 'Test adding logger'}));
    expect(actual.loggers).toHaveLength(3);
  });

  it('added logger values should match', () => {
    const newLogger = {port: 1235, text: 'Test values of added logger'};
    const actual = textLoggerReducer(initialState, add(newLogger));
    expect(actual.loggers).toContain(newLogger);
  });

  it('should handle editing a logger', () => {
    const actual = textLoggerReducer(initialState, edit({ port: 1234, text: 'new text' }));
    expect(actual.loggers.find(logger => logger.port === 1234)?.text).toEqual('new text');
  });

  it('should handle removing a logger', () => {
    const actual = textLoggerReducer(initialState, remove(1231));
    expect(actual.loggers).toHaveLength(1);
  });
});
