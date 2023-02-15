import { NextFunction, Request, Response } from "express";
import Ajv, { JSONSchemaType } from "ajv";
import { ApiError } from "../../errors/base-error";

const ajv = new Ajv();

interface MyData {
  foo: number;
  bar: string;
}

const schema: JSONSchemaType<MyData> = {
  type: "object",
  properties: {
    foo: { type: "integer" },
    bar: { type: "string" },
  },
  required: ["bar", "foo"],
  additionalProperties: false,
};

const registerReqValidate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = {};
  const validate = ajv.compile(schema);
  if (validate(data)) return next();
  if (!validate.errors?.length) return next(ApiError.internal());
  const { message } = validate.errors[0];
  next(ApiError.internal(message, message));
};

export default registerReqValidate;
