import {SystemIntegrationModel} from "../../../model/database/model/system-integration";

/**
 * It is extract from database using Payload of JWT
 */
export class Identity {
    service: SystemIntegrationModel;
    public get isAuthenticated(): boolean {
        return !!this.service;
    }
}
