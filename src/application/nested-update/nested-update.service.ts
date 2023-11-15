import { Injectable } from '@nestjs/common';

@Injectable()
export class NestedUpdateService {

    //! update user data
    // async updateUserData(id: Types.ObjectId, name: string, email?: string, avatar?: string): Promise<void> {
    //     //1. CHANGE AVATAR BY USER
    //     await this.requestModel.updateMany(
    //         {
    //             'updateBy.id': id,
    //         },
    //         {
    //             $set: {
    //                 'updateBy.$[element].fullname': name,
    //             },
    //         },
    //         { arrayFilters: [{ 'element.id': id }], multi: true },
    //     );
    //
    //     //2. UPDATE REPORTEDBY INSIDE USER REPORT
    //     await this.userReportModel.updateMany(
    //         {
    //             'reportedBy.id': id,
    //         },
    //         {
    //             $set: {
    //                 'reportedBy.email': email,
    //                 'reportedBy.fullname': name,
    //                 'reportedBy.avatar': avatar,
    //             },
    //         },
    //         { upsert: false },
    //     );
    //
    //     //3. UPDATE EXPORTEDBY INSIDE USER REPORT
    //     await this.userReportModel.updateMany(
    //         {
    //             'exportedBy.id': id,
    //         },
    //         {
    //             $set: {
    //                 'exportedBy.email': email,
    //                 'exportedBy.fullname': name,
    //                 'exportedBy.avatar': avatar,
    //             },
    //         },
    //         { upsert: false },
    //     );
    //
    //     //4. UPDATE CRETAEDBY INSIDE ACTIVITY LOG
    //     await this.activityLogModel.updateMany(
    //         {
    //             'createdBy.id': id,
    //         },
    //         {
    //             $set: {
    //                 'createdBy.email': email,
    //                 'createdBy.fullname': name,
    //                 'createdBy.avatar': avatar,
    //             },
    //         },
    //         { upsert: false },
    //     );
    //
    //     //5. UPDATE CRETAEDBY INSIDE SCHEDULE REPORT
    //     await this.scheduleReportModel.updateMany(
    //         {
    //             'createdBy.id': id,
    //         },
    //         {
    //             $set: {
    //                 'createdBy.email': email,
    //                 'createdBy.fullname': name,
    //             },
    //         },
    //         { upsert: false },
    //     );
    //
    //     //6. UPDATE UPDATEDBY INSIDE SCHEDULE REPORT
    //     await this.scheduleReportModel.updateMany(
    //         {
    //             'updatedBy.id': id,
    //         },
    //         {
    //             $set: {
    //                 'createdBy.email': email,
    //                 'updatedBy.fullname': name,
    //             },
    //         },
    //         { upsert: false },
    //     );
    // }
}
