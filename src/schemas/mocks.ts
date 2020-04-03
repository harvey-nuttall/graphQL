import casual from "casual";
import { MockList } from "apollo-server";

export let mocks = {
  Users: () => new MockList([0, 2]),
  User: () => {
    return {
      id: 54,
      name: casual.name,
      mail: casual.email,
      password: casual.string,
      accounts: () => new MockList([0, 4])
    };
  },
  Account: () => {
    return {
      number: casual.string,
      sortcode: casual.string,
      balance: 22.0
    };
  }
};
