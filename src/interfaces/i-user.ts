export default interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    middleName?: string;
    phoneNumber: string;
    gender: string;
    role: string;
    profileImage?: string,
    accessToken: string,
    refreshToken: string,
}