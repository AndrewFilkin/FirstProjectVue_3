import axios from "axios";

let arr = [];

const api = {
  sendPost() {
    axios
      .post("http://localhost/api/v1/addEmployee", {
        name: "Fred",
        email: "Flintstone@mail.ru",
        salary: 100,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  sendPut() {
    axios
      .put("http://localhost/api/v1/updateEmployee/1", {
        name: "Fred",
        email: "Flintstone@mail.ru",
        salary: 100,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  async sendGet() {
    try {
      const response = await axios.get("http://localhost/api/v1/employee");
      // console.log(response.data.data[0].name);
      // return response.data.data[0].name;

      arr = response.data.data;
      return arr;
    } catch (error) {
      console.error(error);
    }
  },
};

export default api;
