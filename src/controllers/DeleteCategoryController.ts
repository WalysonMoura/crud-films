import { DeleteCategorySevice } from "../services/DeleteCategoryService";

import { Request,Response } from "express";

export class DeleteCategoryController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DeleteCategorySevice()
        const result = service.execute(id)

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }

        return res.status(204).end()
    }
}