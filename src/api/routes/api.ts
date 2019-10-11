import { Router, Request, Response, NextFunction } from "express";
import multer from "multer";

export default (router: Router) => {
    const route = Router();
    const upload = multer({ dest: "../uploads/" });

    route.get(
        "/echo",
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                return res.status(201).send({
                    header: req.headers,
                    body: req.body,
                    params: req.params,
                    query: req.query
                });
            } catch (error) {
                console.error("🔥 error: %o", error);
                return next(error);
            }
        }
    );

    route.post(
        "/echo",
        upload.single("file"),
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                return res.status(201).send({
                    header: req.headers,
                    body: req.body,
                    params: req.params,
                    query: req.query
                });
            } catch (error) {
                console.error("🔥 error: %o", error);
                return next(error);
            }
        }
    );

    router.use(route);
};
