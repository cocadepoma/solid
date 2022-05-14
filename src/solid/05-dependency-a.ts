import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService, WebApiPostService } from './05-dependency-c';


// Main
(async () => {
  const jsonService = new JsonDatabaseService();
  const localService = new LocalDataBaseService();
  const webService = new WebApiPostService();

  const postService = new PostService(webService);

  const posts = await postService.getPosts();
  console.log({ posts })


})();