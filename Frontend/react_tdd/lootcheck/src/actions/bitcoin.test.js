// https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { FETCH_BITCOIN } from "./constants";
import { fetchBitcoin } from "./bitcoin";

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });

const mockResponse = { body: { bpi: "bitcoin price index" } };

fetchMock.get(
  'https://api.coindesk.com/v1/bpi/currentprice.json',
  mockResponse
)
describe('Bitcoin', () => {
  it('creates an async actions to fetch bitcion value', () => {
    const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }]
    store.dispatch(fetchBitcoin())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})


