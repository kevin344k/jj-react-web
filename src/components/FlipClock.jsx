import React, { useState, useEffect } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import  mempoolJS  from "@mempool/mempool.js";
export default function FlipClock() {
  const [digitStyle, setDigitStyle] = useState({});
  const [separatorStyle, setSeparatorStyle] = useState({});
  const [targetTime, setTargetTime] = useState(null);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    function updateSize() {
      const w = window.innerWidth;
      if (w < 640) {
        // < sm
        setDigitStyle({
          width: "1.5rem",
            backgroundColor: '#333',
          height: "2.5rem",
          fontSize: "1.25rem",
          borderRadius: "0.3rem",
        });
        setSeparatorStyle({
          color: "#333",
          size: "6px",
        });
      } else if (w < 768) {
        // sm ≤ w < md
        setDigitStyle({
          width: "3rem",
          height: "4rem",
          fontSize: "2.5rem",
           backgroundColor: '#333',
          borderRadius: "0.4rem",
        });
        setSeparatorStyle({
           color: "#333",
          size: "9px",
        });
      } else if (w < 1024) {
        // md ≤ w < lg
        setDigitStyle({
          width: "4.5rem",
          height: "5.5rem",
           backgroundColor: '#333',
          fontSize: "3.5rem",
          borderRadius: "0.5rem",
        });
        setSeparatorStyle({
           color: "#333",
          size: "12px",
        });
      } else if (w < 1280) {
        // lg ≤ w < xl
        setDigitStyle({
          width: "4rem",
          height: "5rem",
          fontSize: "2rem",
          borderRadius: "0.6rem",
        });
        setSeparatorStyle({
           color: "#333",
          size: "12px",
        });
      } else {
        // ≥ xl
        setDigitStyle({
          width: "4.5rem",
          height: "5.5rem",
          fontSize: "3.25rem",
           backgroundColor: '#333',
          borderRadius: "0.7rem",
        });
        setSeparatorStyle({
           color: "#333",
          size: "16px",
        });
      }
    }

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const init = async () => {
      try {
        const {
          bitcoin: { blocks },
        } = mempoolJS({
          hostname: "mempool.space",
        });

        const blocksTipHeight = await blocks.getBlocksTipHeight();

        if (typeof blocksTipHeight !== "number" || blocksTipHeight <= 0) {
          console.error("Altura de bloque inválida:", blocksTipHeight);
          return;
        }

        const blocksRemaining = 1050000 - blocksTipHeight;

        if (blocksRemaining <= 0) {
          console.warn("Halving ya ocurrió o altura bloque mayor a objetivo.");
          setTargetTime(Date.now()); // cuenta regresiva a 0
          setLoading(false);
          return;
        }

        const secondsRemaining = blocksRemaining * 10 * 60;
        const targetDate = Date.now() + secondsRemaining * 1000;

        setTargetTime(targetDate);
         setLoading(false);
        
      } catch (error) {
        console.error("Error obteniendo datos de mempoolJS:", error);
        setLoading(false);
      }
    };

    init();
  }, []);

console.log(targetTime);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40 ">
        <div
          className="loader"
          style={{
            border: '6px solid #e0f7f5',
            borderTop: '6px solid #3ef2d0',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            animation: 'spin 1s linear infinite',
          }}
        />
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}</style>
      </div>
    );
  }

  return (
    <FlipClockCountdown
      to={targetTime} // dentro de 24 h
      labels={["Dias", "Horas", "Min", "Seg"]}
      showLabels={false}
      onComplete={() => console.log("¡Tiempo terminado!")}
      digitBlockStyle={digitStyle}
      separatorStyle={separatorStyle}
      dividerStyle={{ color: "#000", height: 1 }}
    >
      
    </FlipClockCountdown>
  );
}
