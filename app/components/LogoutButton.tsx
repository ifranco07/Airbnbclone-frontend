'use client';

import { useRouter } from "next/navigation";

import {resetAuthCookies} from "../lib/actions";

import MenuLink from "./navbar/MenuLink";

const LogoutButton: React.FC = () => {
    const router = useRouter();

    const SubmitLogout = async () => {
        resetAuthCookies();

        router.push('/');
    }

    return (
        <MenuLink
            label="Logout"
            onClick={SubmitLogout}
        />
    )
}

export default LogoutButton;