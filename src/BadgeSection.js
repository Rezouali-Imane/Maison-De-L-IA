import React from "react";


const badges = [
  { id: 1, name: "Badge 1", unlocked: true, icon: "/icons/terre.png" },
  { id: 2, name: "Badge 2", unlocked:  true, icon: "/icons/level.png" },
  { id: 3, name: "Badge 3", unlocked: false, icon: "/badges/badge3.png" },
  { id: 4, name: "Badge 4", unlocked: false, icon: "/badges/badge4.png" },
  { id: 5, name: "Badge 5", unlocked: false, icon: "/badges/badge5.png" },
  { id: 6, name: "Badge 6", unlocked: false, icon: "/badges/badge6.png" },
  { id: 7, name: "Badge 7", unlocked: false, icon: "/badges/badge7.png" },
  { id: 8, name: "Badge 8", unlocked: false, icon: "/badges/badge8.png"},
  {id:9,  name: "Badge 8", unlocked: false, icon: "/badges/badge8.png"},
  {id:10, name: "Badge 8", unlocked: false, icon: "/badges/badge8.png"},
];

const BadgeSection = () => {
  const unlockedCount = badges.filter((b) => b.unlocked).length;

  return (
        <div
      style={{
        backgroundImage:"url('/border/bordure.webp')  ",
       padding: "10px",
       height:"243px",
       width:"433.5px",
        margin: "40px auto",
        color: "#FFFFFF",
        font:"Mulish",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ font:"Mulish",fontWeight:700 ,fontSize:"30px",lineHeight:"38px",letterSpacing:"1.3px", color:"#FFFFFF",marginLeft:"15px",marginTop:"9px",marginRight:"0px",marginBottom:"0px"}}>
          Earn Badges
        </h2>
        <span style={{ marginBottom:"2px",fontSize: "24px", color: "#636771" ,textAlign:"justify",lineHeight:"28px",marginRight:"4px"}}>
          {unlockedCount}/10
        </span>
      </div>

      <p style={{ fontSize: "24px",marginLeft:"20px",marginRight:"20px", color: "#FFFFFF", letterSpacing :"0.99px", marginTop:"0px"}}>
        Complete Modules To Earn Badges 
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "17px",
          marginBottom:"5px",
          
        }}
      >
        {badges.map((badge) => (
          <div
            key={badge.id}
            style={{               display: "flex",
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
                opacity: badge.unlocked ? 1 : 0.5,
                alignContent:"center",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default BadgeSection;