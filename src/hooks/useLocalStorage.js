import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from local storage by key
            const item = localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error return initialValue
            return initialValue;
        }
    });
    useEffect(() => {
        try {
            // Save state to localStorage
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.log(error);
        }
    }, [key, storedValue]); // Watch these values for changes

    return[storedValue, setStoredValue];
}

export default useLocalStorage;