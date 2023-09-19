import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const CurrentUser = createParamDecorator(
    //  data of type never to specify it won't receive anthing
    //  context of type ExuctionContenct to be suitable for any type of connection http or websocket ... etc
    (data: never, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest(); // convert the context of incoming request to http to  can extract the session id
        return request.currentUser;
    }
)