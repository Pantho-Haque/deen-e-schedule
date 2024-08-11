// api/indexedDB.js
import { openDB } from 'idb';

const DB_NAME = 'MyAppDB';
const STORE_NAME = 'UserData';

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'name' }); // Use 'name' as the keyPath
      }
    },
  });
};

export const addData = async (data) => {
  const db = await initDB();
  return db.add(STORE_NAME, data);
};

export const getData = async (name) => {
  const db = await initDB();
  return db.get(STORE_NAME, name);
};

export const getAllData = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

export const updateData = async (data) => {
  const db = await initDB();
  return db.put(STORE_NAME, data); // Uses 'name' to update data
};

export const deleteData = async (name) => {
  const db = await initDB();
  return db.delete(STORE_NAME, name);
};
