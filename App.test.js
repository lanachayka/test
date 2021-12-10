import React from "react";
import rerender from "react-test-renderer";
import App from "../App";
import DataService from "../dataService";

describe("App", () => {
  test("render correctly", () => {
    const component = rerender.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// describe("App", () => {
//   jest.mock("../dataService", () => {
//     return jest.fn().mockImplementation(() => {
//       return { getGitHubUser: () => {} };
//     });
//   });
//   const dataService = new DataService();
//   test("should called getGitHubUser()", () => {
//     rerender.create(<App />);
//     expect(dataService.getGitHubUser).toHaveBeenCalled();
//   });
// });
