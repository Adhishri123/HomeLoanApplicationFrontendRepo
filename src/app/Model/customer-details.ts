import { CustomerAddress } from "./customer-address";
import { CustomerAllDocuments } from "./customer-all-documents";
import { CustomerBankDetails } from "./customer-bank-details";
import { CustomerProfession } from "./customer-profession";
import { Ledger } from "./ledger";
import { LoanDetails } from "./loan-details";
import { LoanDisbursement } from "./loan-disbursement";
import { LoanSanctionLetter } from "./loan-sanction-letter";

export class CustomerDetails 
{
    customerApplicationId:number;
    customerFirstName:string;
    customerMiddleName:string;
    customerLastName:string;
    customerMobileNumber:number;
    customerAdditionalMobileNumber:number;
    customerPanCardNumber:string;
    customerAadharCard:number;
    customerDateOfBirth:string;
    customerEmail:string;
    customerPassword:string;
    customerGender:string;
    customerQualification:string;
    customerLoanStatus:string;
    customerLoanAmountRequired:number;
    customerdocstatus:string;
    customerAddress:CustomerAddress;
    customerProfession:CustomerProfession;
    customerBankDetails:CustomerBankDetails;
    customerLoanInformation:LoanDetails;
    customerLoanDisbursement:LoanDisbursement;
    customerLedger:Ledger;
    customerSanctionLetter:LoanSanctionLetter;
    customerAllDocuments:CustomerAllDocuments;
}
