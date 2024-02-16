import { Employee } from "./employe.model";
import { LeaveType } from "./leaveType.model";

export class LeaveBalance {
    constructor(
    public balanceId:number,
    public employee:Employee,
    public leaveType:LeaveType,
    public leaveBalance:number,
    public year:number
    ){}
  }