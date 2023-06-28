import joi from "joi";

export const email = joi.string().pattern(new RegExp("gmail.com$")).required();

export const password = joi
  .string()
  .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
  .required();

export const title = joi.string().required();

export const id_title = joi.string().uppercase().alphanum().required(); // alphanum nghia la k chua ki tu dac biet
export const comment = joi.string().required();
