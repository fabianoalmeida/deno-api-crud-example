import { Request, Response, Router, RouteParams } from "https://deno.land/x/oak/mod.ts";
import Controller from "../interfaces/controller.interface.ts";
import UserService from "../services/user.service.ts";

class UserController implements Controller {

  public userService = new UserService();

  public index = async ({ response }: 
  { 
    response: Response 
  }) => {
    response.body = await this.userService.getUsers();
  }

  public findById = async ({ params, response }: 
               { params: RouteParams; response: Response; }) => {
      const userId = params.id;

      if (!userId) {
        response.status = 400;
        response.body = { msg: "Invalid user id" };
        return;
      }
    
      const foundUser = await this.userService.getUser(userId);
      if (!foundUser) {
        response.status = 404;
        response.body = { msg: `User with ID ${userId} not found` };
        return;
      }
    
      response.body = foundUser;
  }

  public create = async ({ request, response }: 
                 { request: Request; response: Response; }) => {
      if (!request.hasBody) {
        response.status = 400;
        response.body = { msg: "Invalid user data" };
        return;
      }
    
      const {
        value: { name, role, jiraAdmin }
      } = await request.body();
    
      if (!name || !role) {
        response.status = 422;
        response.body = { msg: "Incorrect user data. Name and role are required" };
        return;
      }
    
      const userId = await this.userService.createUser({ name, role, jiraAdmin });
    
      response.body = { msg: "User created", userId };
  }

  public update = async ({ params, request, response }: 
  { 
    params: any; request: Request; response: Response; 
  }) => {
      const userId = params.id;

      if (!userId) {
        response.status = 400;
        response.body = { msg: "Invalid user id" };
        return;
      }
    
      if (!request.hasBody) {
        response.status = 400;
        response.body = { msg: "Invalid user data" };
        return;
      }
    
      const {
        value: { name, role, jiraAdmin }
      } = await request.body();
    
      await this.userService.updateUser(userId, { name, role, jiraAdmin });
    
      response.body = { msg: "User updated" };
  }

  public delete = async ({ params, response }: 
  {
    params: RouteParams;
    response: Response;
  }) => {
    const userId = params.id;
  
    if (!userId) {
      response.status = 400;
      response.body = { msg: "Invalid user id" };
      return;
    }
  
    const foundUser = await this.userService.getUser(userId);
    if (!foundUser) {
      response.status = 404;
      response.body = { msg: `User with ID ${userId} not found` };
      return;
    }
  
    await this.userService.deleteUser(userId);
    response.body = { msg: "User deleted" };
  }
}

export default new UserController();