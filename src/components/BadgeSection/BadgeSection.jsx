import React from "react";

const badges = [
  { id: 1, name: "Badge 1", unlocked: true, icon: "/icons/terre.png" },
  { id: 2, name: "Badge 2", unlocked: true, icon: "/icons/level.png" },
  { id: 3, name: "Badge 3", unlocked: false, icon: "/badges/badge3.png" },
  { id: 4, name: "Badge 4", unlocked: false, icon: "/badges/badge4.png" },
  { id: 5, name: "Badge 5", unlocked: false, icon: "/badges/badge5.png" },
  { id: 6, name: "Badge 6", unlocked: false, icon: "/badges/badge6.png" },
  { id: 7, name: "Badge 7", unlocked: false, icon: "/badges/badge7.png" },
  { id: 8, name: "Badge 8", unlocked: false, icon: "/badges/badge8.png" },
  { id: 9, name: "Badge 9", unlocked: false, icon: "/badges/badge9.png" },
  { id: 10, name: "Badge 10", unlocked: false, icon: "/badges/badge10.png" },
];

const BadgeSection = ({ maxWidth = "600px" }) => {
  const unlockedCount = badges.filter((b) => b.unlocked).length;

  return (
    <div
      style={{
        maxWidth,
        aspectRatio: "433.5 / 243", // ≈ 1.783
        backgroundImage: "url('/border/bordure.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "40px auto",
        borderRadius: "12px",
        padding: "1rem",
        fontFamily: "Mulish",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2
          style={{
            fontWeight: 700,
            fontSize: "1.8rem",
            letterSpacing: "1.3px",
            margin: 0,
          }}
        >
          Earn Badges
        </h2>
        <span
          style={{
            fontSize: "1.5rem",
            color: "#636771",
          }}
        >
          {unlockedCount}/10
        </span>
      </div>

      <p
        style={{
          fontSize: "1.2rem",
          letterSpacing: "0.99px",
          margin: 0,
        }}
      >
        Complete Modules To Earn Badges
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "0.75rem",
        }}
      >
        {badges.map((badge) => (
          <div
            key={badge.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: badge.unlocked ? 1 : 0.5,
            }}
          >
            <img
              src={badge.icon}
              alt={badge.name}
              style={{
                width: "35px",
                height: "35px",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeSection;
