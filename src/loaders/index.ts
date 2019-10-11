import expressLoader from "./express";
import dependencyInjectorLoader from "./dependencyInjector";

export default async ({ expressApp }) => {
    await dependencyInjectorLoader();
    await expressLoader({ app: expressApp });
};
