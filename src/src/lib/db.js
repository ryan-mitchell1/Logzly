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
            if (data != false) {
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
                }).then(() => {
                    resolve("created");
                })
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

export function deleteGroup(groupId) {
    const promise1 = new Promise((resolve, reject) => {
        firestore.collection("groups").doc(groupId).delete().then(() => {
            resolve("deleted");
        })
    })
    return promise1;
}

export function leaveGroup(uid, group){
    const promise1 = new Promise((resolve, reject) => {
        const newMemeberList = group.groupMembers.filter(function (elem) { return elem !== uid; });
        group.groupMembers = newMemeberList;
        firestore.collection('groups').doc(group.id).update(group).then(() => {
            resolve("joined");
        })
    })
    return promise1;
}

export function joinGroup(uid, groupName, password) {
    var groupNameCheck = checkGroupName(groupName);

    const promise1 = new Promise((resolve, reject) => {
        var index = 0;
        groupNameCheck.then(data => {
            if (data != false) {
                if (data.password == "" + md5(password)) {
                    data.groupMembers.forEach((memberId) => {
                        ++index;
                        if (memberId == uid) {
                            resolve("already member");
                            return;
                        }
                        if (index == data.groupMembers.length) {
                            data.groupMembers.push(uid);
                            firestore.collection('groups').doc(data.id).update(data).then(() => {
                                resolve("joined");
                            })
                        }
                    })
                } else {
                    resolve("wrong password");
                }
            } else {
                resolve("does not exist");
            }
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
                    resolve(group); //group with groupName does exist
                }
            })
            resolve(false); //group with groupName does not exist
        })
    })
    return promise1;
}

function getNow() {
    return new Date().getTime();
}
