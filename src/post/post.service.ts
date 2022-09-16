import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePostDto, EditPostDto } from "./dto";
import { Post } from "./entities";

@Injectable()
export class PostService {
  constructor(
    //Inyeccion de dependencias, el post es el repositorio de donde va a extender capacidades
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  getMany(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async getOne(id: number) {
    const post = await this.postRepository.findOne({ where: { id: id } });
    if (!post) throw new NotFoundException("get not found");
    return post;
  }
  async createOne(dto: CreatePostDto) {
    const post = await this.postRepository.create(dto as any);
    console.log("post", post);

    return await this.postRepository.save(post);
  }
  async editOne(id: number, dto: EditPostDto) {
    const post = await this.postRepository.findOne({ where: { id: id } });
    if (!post) throw new NotFoundException("post not found");
    const editedPost = Object.assign(post, dto);
    return await this.postRepository.save(editedPost);
  }
  async deleteOne(id: number) {
    console.log(id);

    const data = await this.postRepository.delete(id);
    return {
      ok: "deleteOne",
      data,
    };
  }
}
