import { API_URL } from "astro:env/client";


export type userData = {
    userID: string
    userData: {
        userName?: string
    }
}

type successResponse = {
    data: any
    status: "OK"
}

type errorResponse = {
    message: string
    status: "ERROR"
}

type unauthenticatedResponse = {
    status: "UNAUTHENTICATED"
}

type apiResponse = successResponse | errorResponse | unauthenticatedResponse


export const apiHealthCheck = async (): Promise<apiResponse> => {
    const response = await fetch(`${API_URL}`, {
        method: "GET"
    });
    if (response.status === 200) {
        return {
            data: await response.json(),
            status: "OK"
        }
    }
    else {
        return {
            message: response.statusText,
            status: "ERROR"
        }
    }
}

export const apiGetUser = async (): Promise<apiResponse> => {
    const response = await fetch(`${API_URL}/user`, {
        method: "GET",
        credentials: "include"
    });

    if (response.status === 200) {
        return {
            data: await response.json() as userData,
            status: "OK"
        }
    }
    else if (response.status === 401) {
        return {
            status: "UNAUTHENTICATED"
        }
    }
    else {
        return {
            message: response.statusText,
            status: "ERROR"
        }
    }
}

export const apiSetUserName = async (userName: string): Promise<apiResponse> => {
    const response = await fetch(`${API_URL}/user/name`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ name: userName })
    });
    if (response.status === 200) {
        return {
            data: await response.json(),
            status: "OK"
        }
    }
    else {
        return {
            message: response.statusText,
            status: "ERROR"
        }
    }
}