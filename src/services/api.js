const baseURL = 'https://api-services.centapp.com.mx/app_cent/api/'

export const API = {
    createCustomer: `${baseURL}Customer/add`,
    homeApp: `${baseURL}Home_App`,
    transactionHistory: `${baseURL}Transaction_History_App`,
    customerClabe: `${baseURL}Customer/Clabe`,
    uploadINE: `${baseURL}Customer/upload_INE`,
    send_code: `${baseURL}transaction/send_code`,
    verified_code: `${baseURL}transaction/verified_code`,
    createPassword: `${baseURL}Customer/Password`,
    totalCredit: `${baseURL}transaction/total_credit`,
}