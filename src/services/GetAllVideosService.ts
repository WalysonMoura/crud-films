import { getRepository } from "typeorm";
import { Videos } from "../entities/Videos";

export class GetAllVideosService {
  async execute() {
    const repo = getRepository(Videos);

    const videos = await repo.find();

    return videos;
  }
}
