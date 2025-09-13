import { API_URL } from "astro:env/client";


export type userData = {
    userID: string
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
    const response = await fetch(`${API_URL}/protected/user`, {
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