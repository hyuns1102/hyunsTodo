const form = document.querySelector(".js-form"),
  greeting = document.querySelector(".js-greetings"),
  input = form.querySelector("input"),
  weather = document.querySelector(".js-weather"),
  toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const USERS_LS = "allUsers",
  USER_LS = "currentUser",
  TODOS_LS = "toDos",
  SHOWING_CN = "showing";

const API_KEYS = "8010af48d7da9bda9fa26093abf58cd2";
const COORDS = "coords";
