import jest from 'jest';

describe('retrieving question list', () => {
  test('can retrieve empty question list', () => {
    // assert
    expect(selectors.selectAllQuestions(store.getState())).toEqual({
      questions: [],
    });
  });
});

export {};