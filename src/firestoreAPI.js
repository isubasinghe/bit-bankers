import firebase from "../src/firebaseConfig.js"

const db = firebase.firestore();
const dateThreshold = Math.floor(Date.now() / 1000) - 2592000;

export const trendingRef = db.collection("causes").where("status", "==", "trending");

export const recentRef = (uuid) => {
    return db.collection("transactions")
        .where("userId", "==", uuid)
        .where("dateTime", ">=", dateThreshold);
}

export const causesRef = db.collection("causes")

export const userRef = uuid => {
    return db.collection("users").doc(uuid)
}

export const recommendedRef = db.collection("causes").where("status", "==", "recommended")

export const allTransactions = uuid => {
    return db.collection("transactions")
        .where("userId", "==", uuid);
}