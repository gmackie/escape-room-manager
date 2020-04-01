"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const beerController_1 = require("../controllers/beerController");
class Routes {
    constructor() {
        this.beerController = new beerController_1.BeerController();
    }
    // ...
    routes(app) {
        // ...
        app
            .route('/')
            .get();
        app
            .route("/beers")
            .get(this.beerController.index)
            .put(this.beerController.put);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map