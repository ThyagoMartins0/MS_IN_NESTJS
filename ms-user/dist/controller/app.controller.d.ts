import { AppService } from '../service/app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(body: any): string;
}
