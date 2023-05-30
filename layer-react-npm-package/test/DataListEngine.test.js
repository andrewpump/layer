import * as dle from '../src/react-components/DataListEngine.ts';

// Test validateApiKey
test('incorrect/invalid api key', () => {

    const engine = new dle.MyDataListEngine();
    
    return engine.validateApiKey().then(data => {
        expect(data).toBe(false);
    });
  });