import { checkForName } from '../src/client/js/nameChecker'
const validName = "Biswadeep"
const invalidName = "Demoname"

test('The API is fetching with valid API Key', () => {
    expect(checkForName(validName)).toBe(true);
});

test('The API is fetching with an invalid API Key', () => {
    expect(checkForName(invalidName)).toBe(false);
});