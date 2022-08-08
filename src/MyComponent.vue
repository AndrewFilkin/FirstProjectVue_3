<template>
  <div>
    <hr />
    <h2>Список заметок</h2>
    <input
      type="text"
      id="input1"
      v-bind:placeholder="clue"
      v-on:keypress.enter="checkClick()"
    />
    <ul class="list-group" v-if="notes.length !== 0">
      <li
        class="list-group-item"
        v-for="(oneNote, index) in notes"
        v-bind:key="index"
      >
        {{ oneNote }}

        <br />
        <button class="btn btn-danger" v-on:click="deleteNote(index)">
          Удалить
        </button>
      </li>
    </ul>
    <div v-else>Здесь заметок нет</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
      clue: "Введите текст",
      notes: ["one", "two", "three"],
    };
  },
  methods: {
    addNewNote() {
      this.notes.push(event.target.value);
      // this.inputValue = "";
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
    checkClick() {
      if (document.getElementById("input1").value === "") {
        console.log("empty value");
      } else {
        this.addNewNote();
      }
    },
  },
};
</script>
