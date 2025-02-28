import { getAuth, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

export async function refreshSign(email, password) {
    const auth = getAuth();
    const user = auth.currentUser;
    let result = null

    if (!user) {
        throw new Error('Пользователь не найден.');
    }

    try {
        const credential = EmailAuthProvider.credential(email, password);

        result = await reauthenticateWithCredential(user, credential);
        console.log('Пользователь успешно повторно аутентифицирован.');

    } catch (error) {
        throw error;
    }

    return result
}
