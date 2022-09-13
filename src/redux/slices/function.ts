import axios from "axios";

export const fetchPost = async (props: {}) => {
  const res = await axios.post(
    "https://botpashatesting.inboost.ai/api/MyClients/AddNewClient",
    props,
    {
      headers: {
        Authorize:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxMDA0NDkwIiwiUm9sZUlkIjoiNCIsIlBvcnRhbElkIjoiMTAyNDI0Iiwicm9sZSI6IlBvcnRhbEFkbWluIiwibmJmIjoxNjYyMDExNzcwLCJleHAiOjE2Nzc2NTAxNzAsImlhdCI6MTY2MjAxMTc3MH0.xRegVe8mVkCf8JzD5xp6g7DDHDqtwX5tK550CZTFuhk",
      },
    }
  );
  console.log(res.status);
};

// Проект повиннен бути на React + TypeScript
// Стилі повинні бути на Sass
// Для запитів використай axios
// Підключення арі - https://botpashatesting.inboost.ai/api/MyClients/AddNewClient
// Method-POST
// Авторизація:  header «Authorize»: «Barear token»
// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxMDA0NDkwIiwiUm9sZUlkIjoiNCIsIlBvcnRhbElkIjoiMTAyNDI0Iiwicm9sZSI6IlBvcnRhbEFkbWluIiwibmJmIjoxNjYyMDExNzcwLCJleHAiOjE2Nzc2NTAxNzAsImlhdCI6MTY2MjAxMTc3MH0.xRegVe8mVkCf8JzD5xp6g7DDHDqtwX5tK550CZTFuhk

// (You need to send to /api/MyClients/AddNewClient POST request with this like request [Image 1].
// If UserPhoneNumber is unique you will receive 200OK.
