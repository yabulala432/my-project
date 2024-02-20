import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log({ error }, " line 7 AsyncStorage.ts");
  }
};

export const getItem = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log({ error }, " line 15 AsyncStorage.ts");
  }
};

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log({ error }, " line 23 AsyncStorage.ts");
  }
};
