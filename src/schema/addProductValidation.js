import * as yup from "yup";

export const AddProductValidation = yup.object().shape({
  sku: yup
    .string("Please provide the data of indicated type")
    .required("Please submit required data")
    .strict(),
  productname: yup
    .string("Please provide the data of indicated type")
    .required("Please submit required data"),
  price: yup
    .number("Please provide the data of indicated type")
    .typeError("Type must be number")
    .required("Please submit required data"),
  select: yup.string().required("Please select a product type"),
  size: yup
    .number("Please provide the data of indicated type")
    .typeError("Type must be number")
    .when("select", {
      is: "DVD",
      then: yup.string().required("Please submit required data"),
    }),
  height: yup
    .number("Please provide the data of indicated type")
    .typeError("Type must be number")
    .when("select", {
      is: "Furniture",
      then: yup.string().required("Please submit required data"),
    }),
  width: yup
    .number("Please provide the data of indicated type")
    .typeError("Type must be number")
    .when("select", {
      is: "Furniture",
      then: yup.string().required("Please submit required data"),
    }),
  length: yup
    .number("Please provide the data of indicated type")
    .typeError("Type must be number")
    .when("select", {
      is: "Furniture",
      then: yup.string().required("Please submit required data"),
    }),
  weight: yup
    .number("Please provide the data of indicated type")
    .typeError("Type must be number")
    .when("select", {
      is: "book",
      then: yup.string().required("Please submit required data"),
    }),
});
