// src/components/tasks/dropdown/PriorityTag.tsx

import React from "react";

export type Priority = "low" | "medium" | "high" | "superHigh";

interface PriorityTagProps {
  priority: Priority;
  className?: string;
}

const PRIORITY_CONFIG: Record<
  Priority,
  {
    label: string;
    background: string;
    textColor: string;
    width: number;
  }
> = {
  low: {
    label: "Baixa Prioridade",
    background: "#46F7B7",
    textColor: "#096343",
    width: 143,
  },
  medium: {
    label: "Média Prioridade",
    background: "#F5EB88",
    textColor: "#653408",
    width: 148,
  },
  high: {
    label: "Alta Prioridade",
    background: "#FFA775",
    textColor: "#702D08",
    width: 133,
  },
  superHigh: {
    label: "Altíssima Prioridade",
    background: "#F27F77",
    textColor: "#5F0F0B",
    width: 169,
  },
};

export const PriorityTag: React.FC<PriorityTagProps> = ({
  priority,
  className,
}) => {
  const config = PRIORITY_CONFIG[priority];

  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 28,
        width: config.width,
        padding: "4px 16px",
        gap: 10,
        borderRadius: 4,
        backgroundColor: config.background,
        opacity: 1,
      }}
    >
      <span
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "13.33px",
          lineHeight: "100%",
          letterSpacing: "0%",
          color: config.textColor,
          whiteSpace: "nowrap",
        }}
      >
        {config.label}
      </span>
    </div>
  );
};

export default PriorityTag;
