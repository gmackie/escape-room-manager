import { Application } from "express";
import { BeerController } from '../controllers/beerController'

export class Routes {
  public beerController: BeerController = new BeerController();
  // ...
  public routes(app: Application): void {
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