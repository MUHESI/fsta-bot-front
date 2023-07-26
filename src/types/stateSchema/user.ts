export type IUser = {
    id: number;
    full_name: string;
    status: "active" | "blocked" | "deleted";
    email: string;
    address: string;
    roles: { id: number; name: string }[];
    date_created: string;
    phone: string;
    organization: { id: number; name: string, [key: string]: string | number };
};
