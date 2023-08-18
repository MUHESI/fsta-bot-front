import axios from "axios";
import { MockedFunction } from "jest-mock";

// Cast axios.get to the mocked function type
export const mockedGet = axios.get as MockedFunction<typeof axios.get>;