import axios from "axios";

export const fetch = async ({ method, url, body }) => {
  const host = "https://api.csdi.gov.hk";

  const mainFetch = async () => {
    if (method === "post") {
      return axios({
        method: "post",
        url: `${host}/${url}`,
        data: body,
      }).then((res) => res);
    } else {
      return axios({
        method: "get",
        url: host + url,
        responseType: "json",
      }).then((res) => res);
    }
  };

  try {
    const res = await mainFetch();
    return res;
  } catch (error) {
    console.error("Error:", error.message);
    if (error.response) {
      console.error("Data:", error.response.data);
      console.error("Status:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else {
      console.error("Error Message:", error.message);
      console.log(error);
    }
  }
};
