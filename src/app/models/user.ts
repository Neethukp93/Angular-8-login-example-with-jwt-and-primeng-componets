export class User {
    id: string;
    username: string;
    password: string;
    token: string;
    firstName: string;
    lastName: string;
    constructor(obj?:any){
       this.id = obj.id || '';
       this.username = obj.username || '';
    }
}