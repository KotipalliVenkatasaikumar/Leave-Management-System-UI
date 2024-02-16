import { Employee } from "./employe.model";
import { LeaveType } from "./leaveType.model";

export class AdminLeaveRequests {
  constructor(
    public requestId:number,
    public employeeId: Employee,
    public startDate: string,
    public endDate: string,
    public leaveTypeId: LeaveType | null, // Modified parameter to accept LeaveType or null
    public reason: string,
    public status: string,
    public managerId: number,
    public description: string
    
  ) {}
 
}