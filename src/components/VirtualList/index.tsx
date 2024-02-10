import { useRef } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";

interface Props {
  children: React.ReactNode[];
}

export function VirtualList({ children }: Props) {
  const listRef = useRef<HTMLDivElement | null>(null);

  const virtualizer = useWindowVirtualizer({
    count: children.length,
    estimateSize: () => 176,
    overscan: 5,
    scrollMargin: listRef.current?.offsetTop ?? 0,
  });

  return (
    <div ref={listRef}>
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {virtualizer.getVirtualItems().map((item) => (
          <div
            key={item.key}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${item.size}px`,
              transform: `translateY(${item.start - virtualizer.options.scrollMargin}px)`,
            }}
          >
            {children[item.index]}
          </div>
        ))}
      </div>
    </div>
  );
}
