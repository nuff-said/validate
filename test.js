import validate from "./index.js";

validate({
  required: [validate.required()],
  string: [validate.string()],
  length: [validate.string(), validate.hasLength(8)],
  minLength: [validate.string(), validate.minLength(8)],
  maxLength: [validate.string(), validate.maxLength(8)],
  regex: [validate.string(), validate.regex(/[a-z]+/g)],
  array: [
    validate.array([validate.string(), validate.maxLength(3)]),
    validate.minLength(1),
  ],
  number: validate.number(),
  min: [validate.number(), validate.min(3)],
  max: [validate.number(), validate.max(3)],
  boolean: validate.boolean(),
  date: validate.date(),
})({
  required: true,
  string: "this",
  length: "long boi",
  minLength: "longer boi",
  maxLength: "smolboi",
  regex: "aaaaa",
  number: 2,
  min: 4,
  max: 3,
  boolean: true,
  date: new Date(),
  array: ["str"],
});
