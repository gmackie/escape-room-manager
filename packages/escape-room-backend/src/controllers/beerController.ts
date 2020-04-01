import { Request, Response } from "express";
import { BeerInterface, Beer } from "../models/beer.model";
import { DestroyOptions } from "sequelize";

export class BeerController {
    public get(req: Request, res: Response): void {
      const beerId: number = parseInt(req.params.id);
      
      Beer.findByPk<Beer>(beerId)
        .then((beer: Beer | null) => {
          if (beer) {
            res.json(beer);
          } else {
            res.status(404).json({ errors: ['Beer not found'] });
          }
        })
        .catch((err: Error) => res.status(500).json(err));
    }

    public index(_req: Request, res: Response): void {
      Beer.findAll<Beer>({})
        .then((beers: Beer[]) => res.json(beers))
        .catch((err: Error) => res.status(500).json(err));
    }

    public delete(req: Request, res: Response): void {
      const beerId: number = parseInt(req.params.id);
      const options: DestroyOptions = {
        where: { id: beerId },
        limit: 1,
      };

      Beer.destroy(options)
        .then(() => res.status(204).json({ data: 'success'}))
        .catch((err: Error) => res.status(500).json(err));
    }

    public put(req: Request, res: Response): void {
      const params: BeerInterface = req.body;

      Beer.create<Beer>(params)
        .then((beer: Beer) => res.status(201).json(beer))
        .catch((err: Error) => res.status(500).json(err));
    }
}