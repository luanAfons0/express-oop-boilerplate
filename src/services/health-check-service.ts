class HealthCheckService {
    constructor() {
        return this;
    }

    public find() {
        return { message: "API is up and running!" };
    }
}

export default HealthCheckService;