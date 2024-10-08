export default interface IUser {
    id: string;
    name: string;
    email: string;
    profileImage?: string,
    accessToken: string,
    refreshToken: string,
}