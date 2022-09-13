//lint иза незадейственых переменых которые не посылаются на сервер

import ReactFlagsSelect from "react-flags-select";
import "./index.sass";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect, SetStateAction } from "react";
import Select from "react-select";
import { Inputs, SelectI } from "../types";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  setWork,
  setProfession,
  setAge,
  setDate,
} from "../redux/slices/inputGrouplices";
import { fetchPost } from "../redux/slices/function";
const logo = require("../assets/image/add_24px.png");

const Form = () => {
  const dispatch = useAppDispatch();
  //списки
  const { listLabelInput, listLabelGroup, listLabelLang } = useAppSelector(
    (state) => state.lists
  );
  const { inputWork, inputProfesion, inputAge, inputDate } = useAppSelector(
    (state) => state.group
  );

  //форма
  const { register, handleSubmit } = useForm<Inputs>();
  //
  const setInput = (e: { target: { value: SetStateAction<string> } }) => {
    setinputValue(e.target.value);
  };

  //состояния для записи новых полей и функция  и Ефект для перезаписи с зависимостью
  const [newInput, setnewInput] = useState<SelectI | null>(null);
  const [inputValue, setinputValue] = useState<string>("");
  const setValueInput = () => {
    if (newInput?.value === "inputProfesion")
      dispatch(setProfession(inputValue));
    if (newInput?.value === "inputWork") dispatch(setWork(inputValue));
    if (newInput?.value === "inputAge") dispatch(setAge(inputValue));
    if (newInput?.value === "inputDate") dispatch(setDate(inputValue));
  };
  useEffect(() => {
    setValueInput();
  }, [inputValue]);
  //состояние выбора флага
  const [selected, setSelected] = useState("UA");
  const [selectGroup, setselectGroup] = useState<SelectI | null>(null);

  //состояние выбор языка
  const [lang, setLang] = useState<SelectI | null>(null);

  // API

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const datas = {
      ...data,
      coutry: selected,
      lang: lang?.value,
      workplace: inputWork,
      profession: inputProfesion,
      // age: inputAge,
      // date: inputDate,
      idRole: "de9b62b2-1ba9-4393-b191-efb19e05b22e",
    };
    const one = JSON.stringify({
      userPhoneNumber: 380989472104,
      userName: "pavlo",
      lastName: null,
      email: null,
      workplace: null,
      lang: null,
      profession: null,
      idRole: "de9b62b2-1ba9-4393-b191-efb19e05b22e",
    });
    console.log(one);
    fetchPost(one);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container_title">
          <img src={logo} alt="" /> <h1>Додати Користувача</h1>
        </div>
        <div className="flex_container">
          <div>
            <p className="input_name">Ім’я</p>
            <input
              placeholder="Ім’я"
              className="inputs"
              {...register("userName", { required: true })}
            />
            <p className="input_name">Номер телефону</p>
            <div className="phone_container">
              <ReactFlagsSelect
                className="flags"
                selectButtonClassName="flags-button"
                showSelectedLabel={false}
                showOptionLabel={false}
                fullWidth={false}
                selected={selected}
                onSelect={(code) => setSelected(code)}
              />
              <input
                placeholder="61514545454"
                className="input-telephone"
                {...register("userPhoneNumber", { required: true })}
              />
            </div>

            <p className="input_name">Група користувачів</p>
            <Select
              classNamePrefix="select-group"
              placeholder="Групы"
              onChange={setselectGroup}
              options={listLabelGroup}
            />
            <p className="input_name">Додати нове поле</p>
            <Select
              classNamePrefix="select-input"
              placeholder="Додати нове поле"
              onChange={setnewInput}
              options={listLabelInput}
            />
          </div>
          <div className="child_flex">
            <p className="last_name">Призвіще</p>
            <input
              placeholder="Призвіще"
              className="inputs"
              {...register("lastName", { required: true })}
            />
            <p className="input_name">Email</p>
            <input
              className="inputs"
              placeholder="email"
              {...register("email")}
            />
            <p className="input_name">Мова</p>
            <Select
              classNamePrefix="select-lang"
              placeholder="Обрати мову"
              onChange={setLang}
              options={listLabelLang}
            />
            <p className="input_name">Значення поля</p>
            {newInput && (
              <input
                value={inputValue}
                onChange={setInput}
                className="inputs"
                placeholder="Значення поля"
                type="text"
              />
            )}
            <div className="btn_container">
              <input
                value="Додати користувача"
                className="btn_form"
                type="submit"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
