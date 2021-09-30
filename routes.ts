import { Router, Context } from "https://deno.land/x/oak/mod.ts";

import UserController from "./controllers/user.controller.ts";

const router = new Router();

router.get('/', (ctx: Context) => {
        ctx.response.body = "Hello Deno!";
      })
      .get('/users', UserController.index)
      .get('/users/:id', UserController.findById)
      .post('/users', UserController.create)
      .put('/users/:id', UserController.update)
      .delete('/users/:id', UserController.delete)
;

export default router;