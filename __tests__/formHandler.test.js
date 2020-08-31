import { callAPI } from '../src/client/js/formHandler'
const validApiKey = "eedbf0ad68a3f77e66b520506d56f16a"
const inValidApiKey = "demokeyof2020"

test('The API is fetching with valid API Key', async() => {
    const data = await callAPI(validApiKey);
    expect(data).toMatch(/"subjectivity":"SUBJECTIVE","confidence":"86",/);
});

test('The API is fetching with an invalid API Key', async() => {
    const data = await callAPI(inValidApiKey);
    expect(data).toMatch(/\"msg\":\"Operation denied\"/);
});