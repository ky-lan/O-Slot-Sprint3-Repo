import { db } from "../../firebaseUtils";
import { collection, getDocs } from "firebase/firestore";

export async function loadDB() {
    try{
        const querySnapshotOfServices = await getDocs(collection(db, "services"));
        const staffs = [];
        const querySnapshotOfStaffs = await getDocs(collection(db, "staffs"));
        const services = [];
        
        querySnapshotOfServices.forEach((doc) => {
            services.push({
              ...doc.data(),
              id: doc.id
          });
        });

        querySnapshotOfStaffs.forEach((doc) => {
            staffs.push({
              ...doc.data(),
              id: doc.id
          });
        });

        return {
            services:services,
            staffs:staffs    
        };
    }
    catch(error){
        throw new Error ('Failed to load the Database.');
    }
}