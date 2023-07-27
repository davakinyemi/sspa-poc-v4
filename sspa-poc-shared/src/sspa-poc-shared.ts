// Anything exported from this file is importable by other in-browser modules.
import { BehaviorSubject } from "rxjs";

function emitEvent(name: any, data: any) {
    dispatchEvent(
        new CustomEvent(name, {
            detail: data
        })
    );
}

const AuthService = Object.freeze({

    _token: '693ae278-628d-4aa3-9012-fbef7575ad92',

    authentication() {
        return this._token;
    }
});

const SessionService = Object.freeze({

    startSession(user: any, token: string) {
        sessionStorage.setItem('user', JSON.stringify({ username: user }));
        sessionStorage.setItem('token', token);
        window.history.pushState(null, null, '/home');
    },

    stopSession() {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        window.history.pushState(null, null, '/login');
    },

    getToken() {
        return sessionStorage.getItem('token');
    },

    getUser() {
        return sessionStorage.getItem('user');
    }

});

const TodoListService = Object.freeze({});

export {
    emitEvent,
    AuthService,
    SessionService,
    TodoListService
};