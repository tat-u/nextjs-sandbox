"use client";

import { cssPropsToKebebCase } from "@/libs/libs";
import { Display } from "@/ui/components/Display/Display";
import { MySlider } from "@/ui/components/MySlider/MySlider";
import { CSSProperties, useState } from "react";

export default function Home() {
  const [sliderValue, setSliderValue] = useState(0.5);
  const cssProps: CSSProperties = {
    backgroundColor: "#e5e5f7",
    opacity: "0.5",
    backgroundImage: `linear-gradient(#444cf7 ${
      8 * sliderValue
    }px, transparent ${8 * sliderValue}px), linear-gradient(90deg, #444cf7 ${
      8 * sliderValue
    }px, transparent ${8 * sliderValue}px), linear-gradient(#444cf7 ${
      4 * sliderValue
    }px, transparent ${4 * sliderValue}px), linear-gradient(90deg, #444cf7 ${
      4 * sliderValue
    }px, #e5e5f7 ${4 * sliderValue}px)`,
    backgroundSize: `${200 * sliderValue}px ${200 * sliderValue}px, ${
      200 * sliderValue
    }px ${200 * sliderValue}px, ${40 * sliderValue}px ${40 * sliderValue}px, ${
      40 * sliderValue
    }px ${40 * sliderValue}px`,
    backgroundPosition: `${-8 * sliderValue}px ${-8 * sliderValue}px, ${
      -8 * sliderValue
    }px ${-8 * sliderValue}px, ${-4 * sliderValue}px ${-4 * sliderValue}px, ${
      -4 * sliderValue
    }px ${-4 * sliderValue}px`,
  };

  return (
    <div>
      <main>
        <MySlider setter={setSliderValue} />
        <Display cssProps={cssProps} />
        <pre>
          <code>
            {cssPropsToKebebCase(cssProps)}
            {/* TODO: ここにCSSを表示するコードブロックを入れる。今はべた書きだけど */}
            {/* TODO: コードブロックの実装を考える */}
            {/* https://www.homepage-tukurikata.com/html/pre-code.html */}
          </code>
        </pre>
      </main>
    </div>
  );
}
