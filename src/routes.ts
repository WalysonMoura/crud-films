import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { GetAllVideosController } from "./controllers/GetAllVideosCromtroller";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

const routes = Router();

routes.get("/categories", new GetAllCategoriesController().handle);
routes.post("/categories", new CreateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories:id", new UpdateCategoryController().handle);

routes.get("/video", new GetAllVideosController().handel)
routes.post("/video", new CreateCategoryController().handle)
routes.delete("/video" )
routes.put("/video")

export { routes };
