import { useState } from "react";
import styles from "./Rating.module.css";
interface RatingProps {
  maxRate: number;
  onUserRate: Function;
}
function Rating(props: RatingProps) {
  const [currentRate, setCurrentRate] = useState(0);
  const [choosedRate, setChoosedRate] = useState(0);
  return (
    <div className={styles.rating}>
      <ul className={styles.stars}>
        {Array(props.maxRate)
          .fill(0)
          .map((e, i) => i + 1)
          .map((num) => {
            const isHovered = num <= currentRate ? true : false;
            return (
              <li
                key={num}
                onMouseEnter={() => setCurrentRate(num)}
                onMouseLeave={() => setCurrentRate(choosedRate)}
                onClick={() => {
                  if (choosedRate === currentRate) {
                    setChoosedRate(0);
                    props.onUserRate(0);
                    return;
                  }
                  setCurrentRate(num);
                  setChoosedRate(num);
                  props.onUserRate(num);
                }}
              >
                <Star isHovered={isHovered} />
              </li>
            );
          })}
      </ul>
      <p className={styles.rate}>{currentRate !== 0 && currentRate}</p>
    </div>
  );
}
function Star(props: any) {
  const emptyStar = (
    <span className={styles.star}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fcc419">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}"></path>
      </svg>
    </span>
  );
  const filledStar = (
    <span className={styles.star}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#fcc419" viewBox="0 0 20 20" stroke="#fcc419">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    </span>
  );
  return <>{props.isHovered ? filledStar : emptyStar}</>;
}
export default Rating;
