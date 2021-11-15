const Adapter = require("enzyme-adapter-react-16")
// import jestFetchMock from "jest-fetch-mock"

require("enzyme").configure({ adapter: new Adapter() })

// jestFetchMock.enableMocks()
