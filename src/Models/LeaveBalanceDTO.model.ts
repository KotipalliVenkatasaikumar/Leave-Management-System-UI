import { LeaveBalance } from "./LeaveBalance.model";
import { LeaveType } from "./leaveType.model";

export class LeaveBalanceDTO {
    constructor(
        public leave_type_id: LeaveType,
        public leave_balance: number,
        public leave_type_name: string,
          ) { }
}