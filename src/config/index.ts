process.env.NODE_ENV = process.env.NODE_ENV || "dev";

export default {
    port: parseInt(process.env.PORT, 10) || 8080,
    logs: {
        level: process.env.LOG_LEVEL || "silly"
    }
};
