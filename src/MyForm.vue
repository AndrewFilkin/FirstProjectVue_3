<template>
  <hr />
  {{ formData.inputName }}
  {{ formData.inputEmail }}
  {{ formData.inputSalary }}
  <form
    action="http://localhost/api/v1/addEmployee"
    method="post"
    @submit.prevent
  >
    <input name="name" type="text" v-model="formData.inputName" />
    <input name="email" type="email" v-model="formData.inputEmail" />
    <input name="salary" type="number" v-model="formData.inputSalary" />
    <button type="submit" @click="doAction()">Send my greetings</button>
  </form>

  <!--  <form-->
  <!--    action="http://localhost/api/v1/employee"-->
  <!--    method="get"-->
  <!--    v-on:submit.prevent-->
  <!--    @click="consoleShow"-->
  <!--  >-->
  <!--    <input type="text" class="form-control" />-->
  <!--    <br />-->
  <!--    <button type="submit" class="btn btn-success">Отправить</button>-->
  <!--  </form>-->
</template>

<script>
import api from "./api";
export default {
  data() {
    return {
      formData: {
        inputName: "",
        inputEmail: "",
        inputSalary: "",
      },
    };
  },
  methods: {
    doAction() {
      api.sendPost();
      // api.sendPut();
      // api.sendGet();
      alert("ok");

      // const requestOptions = {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     name: this.formData.inputName,
      //     email: this.formData.inputEmail,
      //     salary: this.formData.inputSalary,
      //   }),
      // };
      // fetch("http://localhost/api/v1/addEmployee", requestOptions)
      //   .then((response) => response.json())
      //   .then((data) => (this.postId = data.id));
      // alert("Send");
    },
    InputChangeOne(event) {
      console.log("event.target.value", event.target.value);
    },
  },
};
</script>
<style></style>
