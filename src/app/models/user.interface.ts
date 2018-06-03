/**
 *This interface holds the user information that is logged at this moment
 *in our application. The service authentication system must return back
 *this object and persisted in the service object thru the lifecycle of the
 *application
 */

// This is the interface model returned by the authentication method
export interface UserLogged {
    username: string;
    displayName: string;
    role: string;
}

// This is the interface model sent to the authentication method
export interface UserAuth {
    username: string;
    password: string;
    group: string;
}
