import safePanelReducer, {
  typePIN,
  enterPIN,
  clearPIN,
} from './SafePanel.slice';

describe('SafePanel reducer', () => {

  it('should handle initial state', () => {
    expect(safePanelReducer(undefined, { type: 'unknown' })).toEqual({
      displayValue: '',
      currentPIN: '',
      lockStatus: 'OPEN',
    });
  });

  it('should clear the display value on clearPIN', () => {
    const testState = {
      displayValue: 'INVALID',
    };
    const actual = safePanelReducer(testState, clearPIN());
    expect(actual.displayValue).toEqual('');
  });

  it('should change the display value on typePIN', () => {
    const testState = {
      displayValue: '',
    };
    const actual = safePanelReducer(testState, typePIN('11'));
    expect(actual.displayValue).toEqual('11');
  });

  it('should not change the display on typePIN if PIN is more than 4', () => {
    const testState = {
      displayValue: '1111',
    };
    const actual = safePanelReducer(testState, typePIN('22'));
    expect(actual.displayValue).toEqual('1111');
  });

  it('should store the PIN and lock on enterPIN if UNLOCKED & 4 digit PIN', () => {
    const testState = {
      displayValue: '',
      currentPIN: '',
      lockStatus: 'OPEN',
    };
    let actual = safePanelReducer(testState, typePIN('2'));
    actual = safePanelReducer(actual, typePIN('2'));
    actual = safePanelReducer(actual, typePIN('2'));
    actual = safePanelReducer(actual, typePIN('2'));
    actual = safePanelReducer(actual, enterPIN());
    expect(actual.displayValue).toEqual('2222');
    expect(actual.currentPIN).toEqual('2222');
    expect(actual.lockStatus).toEqual('LOCKED');
  });

  it('should not unlock on enterPIN if PIN doesnt match', () => {
    const testState = {
      displayValue: '',
      currentPIN: '1111',
      lockStatus: 'LOCKED',
    };
    let actual = safePanelReducer(testState, typePIN('22'));
    actual = safePanelReducer(actual, enterPIN());
    expect(actual.lockStatus).toEqual('LOCKED');
  });

  it('should unlock on enterPIN if PIN match', () => {
    const testState = {
      displayValue: '',
      currentPIN: '1111',
      lockStatus: 'LOCKED',
    };
    let actual = safePanelReducer(testState, typePIN('1111'));
    actual = safePanelReducer(actual, enterPIN());
    expect(actual.lockStatus).toEqual('OPEN');
  });

});