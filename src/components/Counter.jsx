import { useState } from "react";

export default function Counter({ count, setCount }) {
    return (
        <>
            <p className="count"
                onClick={() => {
                    if (count < 5) setCount(count + 1);
                }}
            >
                {count}
            </p>
        </>
    );
}