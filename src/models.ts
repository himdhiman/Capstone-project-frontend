export interface UserDetails {
    id: string | null,
    accountNumber: string | null, 
    name: string | null,
    middleName: null | string,
    lastName: null | string,
    userName: string | null,
    securityQuestion: string | null,
    securityAnswer: string | null,
    accountType: string | null,
    mobileNumber: string | null,
    accountBalance: string | null,
    setPin: boolean
}

export interface Transaction {
    transactionId: string | null,
    accountNumber: number | null,
    accountTypeId: string | null,
    transactionType: string | null,
    transactionDate: string | null,
    amount: number | null,
    credited: boolean
}