export default () => {
    try {
    } catch (e) {
        console.error("🔥 Error on dependency injector loader: %o", e);
        throw e;
    }
};
