import { Response, Request } from 'express';
import { getManager } from 'typeorm';
import { Post } from '../entity/Post';

export async function postSaveAction(request: Request, response: Response){
    const postRepository = getManager().getRepository(Post);
    const newPost = postRepository.create(request.body);

    await postRepository.save(newPost);

    response.send(newPost);
}