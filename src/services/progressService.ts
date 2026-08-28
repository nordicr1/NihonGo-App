import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { UserStats } from '../types';

export const PROGRESS_COLLECTION = 'user_progress';

/**
 * Fetches user stats from Firestore by User ID.
 * Returns null if the document does not exist.
 */
export async function fetchUserStatsFromCloud(uid: string): Promise<UserStats | null> {
  try {
    const docRef = doc(db, PROGRESS_COLLECTION, uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as UserStats;
    }
    return null;
  } catch (error) {
    console.error('Error fetching user stats from cloud:', error);
    throw error;
  }
}

/**
 * Saves/merges user stats to Firestore for a given User ID.
 */
export async function saveUserStatsToCloud(uid: string, stats: Partial<UserStats>): Promise<void> {
  try {
    const docRef = doc(db, PROGRESS_COLLECTION, uid);
    // Use merge to only update the fields provided, preventing accidental overwrites
    await setDoc(docRef, stats, { merge: true });
  } catch (error) {
    console.error('Error saving user stats to cloud:', error);
    throw error;
  }
}
