import { Application, NextFunction, Request, Response } from "express";
import { HTTP } from "./utils/enums";
import { mainError } from "./error/mianError";
import { handleError } from "./error/handleError";


export const mainApp = (app: Application) => {
  try {


    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          message: "Picture API",
        });
      } catch (error) {
        return res.status(404).json({
          message: "Error loading",
        });
      }
    });

    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new mainError({
          name: `Route Error`,
          message: `Route Error: because the page, ${req.originalUrl} doesn't exist`,
          status: HTTP.BAD_REQUEST,
          success: false,
        })
      );
    });

    app.use(handleError);
  } catch (error) {
    return error;
  }
};
