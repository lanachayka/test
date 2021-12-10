import DataService from "../dataService";
import axios from 'axios';
jest.mock('axios');

describe("DataService", () => {
  const dataService = new DataService();
  test("DataService should get data from an API", async () => {
    const info = { login: "lanachayka", id: 83415983 };
    axios.get.mockResolvedValueOnce(info);
    const result = await dataService.getGitHubUser("lanachayka");
    expect(result).toEqual(info);
  });
  test("DataService should call axios.get with specified URL", async () => {
    await dataService.getGitHubUser("lanachayka");
    expect(axios.get).toHaveBeenCalledWith(
      `https://api.github.com/users/lanachayka`
    );
  });
});


 


