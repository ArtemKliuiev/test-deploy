import {onAuthStateChanged, getAuth} from "firebase/auth";

const auth = getAuth();

export async function getUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(user);
            } else {
                resolve(null);
            }
            unsubscribe();
        }, (error) => {
            reject(error);
        });
    });
}