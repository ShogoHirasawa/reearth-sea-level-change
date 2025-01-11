import {
  useCallback,
  useState,
  ChangeEvent,
} from "react";

export function useSeaLevel(initialValue = 0) {
  const [seaLevel, setSeaLevel] = useState<number>(initialValue);
  const handleSliderChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setSeaLevel(value);
  }, []);

  return {
    seaLevel,
    handleSliderChange,
  };
}