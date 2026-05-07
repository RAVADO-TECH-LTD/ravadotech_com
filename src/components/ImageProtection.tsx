"use client";

import type { DragEvent, MouseEvent, ReactNode } from "react";
import styles from "./ImageProtection.module.css";

function isImageTarget(target: EventTarget | null) {
    return target instanceof Element && target.closest("img");
}

export default function ImageProtection({ children }: { children: ReactNode }) {
    function blockImageContextMenu(event: MouseEvent<HTMLDivElement>) {
        if (isImageTarget(event.target)) {
            event.preventDefault();
        }
    }

    function blockImageDrag(event: DragEvent<HTMLDivElement>) {
        if (isImageTarget(event.target)) {
            event.preventDefault();
        }
    }

    return (
        <div
            className={styles.root}
            onContextMenu={blockImageContextMenu}
            onDragStart={blockImageDrag}
        >
            {children}
        </div>
    );
}
