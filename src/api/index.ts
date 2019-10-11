import { Router } from "express";
import api from "./routes/api";

export default () => {
    const router = Router();

    api(router);

    return router;
};
