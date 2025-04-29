import styles from "@/ui/components/MySlider/MySlider.module.css";
import Slider from "@mui/material/Slider";
import { Dispatch, SetStateAction } from "react";

export function MySlider({
  setter,
}: {
  setter: Dispatch<SetStateAction<number>>;
}) {
  const handleChange = (event, value, activeThumb) => {
    setter(value);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <Slider
            // 見た目
            className={styles.slider}
            valueLabelDisplay="auto"
            marks
            // イベントハンドラ
            onChange={handleChange}
            // スライダー詳細
            defaultValue={0.5}
            min={0.1}
            max={1}
            step={0.1}
            shiftStep={0.2}
          />
        </div>
      </div>
    </>
  );
}
