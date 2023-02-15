import { Response } from "express";

enum HttpSuccessCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
}

class ApiSuccess {
  public res;
  public data;
  constructor(res: Response, data: any) {
    this.res = res;
    this.data = data;
  }
  static success = (res: Response, data: any) =>
    res.status(HttpSuccessCode.OK).json({ error: false, data });
  static created = (res: Response, data: any) =>
    res.status(HttpSuccessCode.CREATED).json({ error: false, data });
}

export { ApiSuccess };
