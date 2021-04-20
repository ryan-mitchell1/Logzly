import firebase from './firebase'
import md5 from 'crypto-js/md5';

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

export function createGroup(uid, groupName, groupTitle, password) {
    var groupNameCheck = checkGroupName(groupName);

    const promise1 = new Promise((resolve, reject) => {
        groupNameCheck.then(data => {
            if (data == true) {
                resolve("taken");
            } else {
                firestore.collection('groups').add({
                    "admin": uid,
                    "groupMembers": [
                        uid
                    ],
                    "groupName": groupName,
                    "groupTitle": groupTitle,
                    "password": "" + md5(password),
                    "lastUpdated": getNow()
                })
                resolve("created");
            }
        })
    })
    return promise1;
}

export async function getGroups(uid) {
    const groups = await firestore.collection('groups');

    const promise1 = new Promise((resolve, reject) => {
        groups.get().then((querySnapshot) => {
            const tempDoc = []
            querySnapshot.forEach((doc) => {
                var group = { id: doc.id, ...doc.data() };
                group.groupMembers.forEach((memberId) => {
                    if (memberId == uid) {
                        tempDoc.push({ id: doc.id, ...doc.data() });
                    }
                })
            })
            resolve(tempDoc)
        })
    })
    return promise1;
}

async function checkGroupName(groupName) {
    const groups = await firestore.collection('groups');

    const promise1 = new Promise((resolve, reject) => {
        groups.get().then((querySnapshot) => {
            const tempDoc = []
            querySnapshot.forEach((doc) => {
                var group = { id: doc.id, ...doc.data() };
                if (group.groupName == groupName) {
                    resolve(true);
                }
            })
            resolve(false)
        })
    })
    return promise1;
}

function getNow(){
    return new Date().getTime();
}
