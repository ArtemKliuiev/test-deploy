import { doc, getDoc } from "firebase/firestore";
import {getUser} from "@/components/mixins";
import {db} from "@/components/mixins";


export async function useCheckAdmin(){
    const user = await getUser()
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const role = await docSnap.data().role
        if(role === 'admin'){
            return true
        }
    }

    return false
}