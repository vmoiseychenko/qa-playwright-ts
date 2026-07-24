import { APIRequestContext } from '@playwright/test';

export class UsersApiClient {
  constructor(private request: APIRequestContext) {}

  async getUser(id: number) {
    return this.request.get(`https://dummyjson.com/users/${id}`);
  }

  async getUsers() {
    return this.request.get(`https://dummyjson.com/users`);
  }

  async createUser(data: { firstName: string; age: number }) {
    return this.request.post(`https://dummyjson.com/users/add`, { data });
  }

  async updateUser(id: number, data: { age?: number }) {
    return this.request.put(`https://dummyjson.com/users/${id}`, { data });
  }

  async deleteUser(id: number) {
    return this.request.delete(`https://dummyjson.com/users/${id}`);
  }

}