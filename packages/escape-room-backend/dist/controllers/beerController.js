"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const beer_model_1 = require("../models/beer.model");
class BeerController {
    get(req, res) {
        const beerId = parseInt(req.params.id);
        beer_model_1.Beer.findByPk(beerId)
            .then((beer) => {
            if (beer) {
                res.json(beer);
            }
            else {
                res.status(404).json({ errors: ['Beer not found'] });
            }
        })
            .catch((err) => res.status(500).json(err));
    }
    index(_req, res) {
        beer_model_1.Beer.findAll({})
            .then((beers) => res.json(beers))
            .catch((err) => res.status(500).json(err));
    }
    delete(req, res) {
        const beerId = parseInt(req.params.id);
        const options = {
            where: { id: beerId },
            limit: 1,
        };
        beer_model_1.Beer.destroy(options)
            .then(() => res.status(204).json({ data: 'success' }))
            .catch((err) => res.status(500).json(err));
    }
    put(req, res) {
        const params = req.body;
        beer_model_1.Beer.create(params)
            .then((beer) => res.status(201).json(beer))
            .catch((err) => res.status(500).json(err));
    }
}
exports.BeerController = BeerController;
//# sourceMappingURL=beerController.js.map