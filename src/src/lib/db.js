import firebase from './firebase'

const firestore = firebase.firestore()

export function updateUser(uid, data) {
    return firestore.collection('users').doc(uid).update(data)
}

export function createUser(uid, data) {
    return firestore
        .collection('users')
        .doc(uid)
        .set({ uid, ...data }, { merge: true })
}

export async function getGroups(uid) {
    const groups = await firestore.collection('groups');

    const promise1 = new Promise((resolve, reject) => {
        groups.get().then((querySnapshot) => {
            const tempDoc = []
            querySnapshot.forEach((doc) => {
                var group = { id: doc.id, ...doc.data() };
                group.groupMembers.forEach((memberId) => {
                    if(memberId == uid){
                        tempDoc.push({ id: doc.id, ...doc.data() });
                    }
                })
            })
            resolve(tempDoc)
        })
    })
    return promise1;
}