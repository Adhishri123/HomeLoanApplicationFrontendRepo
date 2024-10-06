import { Cibil } from "./cibil";


export class CustomerEnquiryDetails 
{
        customerEnquiryId:number;
        customerFirstName:string;
        customerLastName: string;
        customerPanCard: string;
        customerAadharNumber: number;
        customerEmailId:string;
        customerPassword: string;
        customerMobileNumber: number;
        customerCibilStatus: string;
        customerCibilScore:number;
        cibil:Cibil;
     }

