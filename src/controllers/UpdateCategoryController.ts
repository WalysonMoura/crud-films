import { Request, Response } from "express";
import { UpdateCategoryService } from "../services/UpdateCategoryService";

export class UpdateCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description } = req.body;

    const service = new UpdateCategoryService();
    const result = service.execute({ id, name, description });

    if (result instanceof Error) {
      res.json(result.message);
    }

    return res.json(result);
  }
}
