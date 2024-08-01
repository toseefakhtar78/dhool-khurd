import Image from "next/image"

const players = [
    {
        id: 0,
        name: "Yaseen Jutt",
        role: "Chairman",
        imgUrl: "/team-members/Yaseen.jpeg",
        shirtNo: '#295'
    },
   {
        id: 1,
        name: "Ch Sunny",
        role: "Captain",
        imgUrl: "/team-members/Sunny.jpeg",
        shirtNo: '#808'
    },
    {
        id: 2,
        name: "Khurram Shahzad",
        role: "All Rounder",
        imgUrl: "/team-members/Khurram.jpeg",
        shirtNo: '#100'
    },
    {
        id: 3,
        name: "Atif Ali",
        role: "All Rounder",
        imgUrl: "/team-members/Atif.jpeg",
        shirtNo: '#16'
    },
    {
        id: 4,
        name: "Toseef",
        role: "All-Rounder",
        imgUrl: "/team-members/Tossef.jpeg",
        shirtNo: '#26'
    },{
        id: 5,
        name: "Sami Khan",
        role: "Batsmen",
        imgUrl: "/team-members/Sami.jpeg",
        shirtNo: '#007'
    },
    {
        id: 6,
        name: "Itrab Ali",
        role: "Batsmen",
        imgUrl: "/team-members/Itrab.jpeg",
        shirtNo: '#8'
    },
    {
        id: 7,
        name: "Saqlain Ali",
        role: "Batsmen",
        imgUrl: "/team-members/Sqalian.jpeg",
        shirtNo: '#80'
    },
    {
        id: 8,
        name: "Abdullah",
        role: "All Rounder",
        imgUrl: "/team-members/Abdullah.jpeg",
        shirtNo: '#18'
    },
    {
        id: 9,
        name: "Zeeshan Ali",
        role: "All Rounder",
        imgUrl: "/team-members/Zeeshan.jpeg",
        shirtNo: '#98'
    },
   
    {
        id: 10,
        name: "Luqman",
        role: "Bowler",
        imgUrl: "/team-members/Luqman.jpeg",
        shirtNo: '#69'
    }, 
    {
        id: 11,
        name: "Shaheer Ahmad",
        role: "Bowler",
        imgUrl: "/team-members/SHAHEER.jpeg",
        shirtNo: '#97'
    },
    {
        id: 12,
        name: "Ch Fahad",
        role: "Bowler",
        imgUrl: "/team-members/Fahad.jpeg",
        shirtNo: '#52'
    },
    {
        id: 13,
        name: "Sheroz",
        role: "Bowler",
        imgUrl: "/team-members/Sheroz.jpeg",
        shirtNo: '#297'
    },
]

function PlayerX1() {
  return (
    <>
      <h2 className="text-yellow-500"> Here Our Team Members Are</h2>
    <div style={{marginTop: '1.5rem',flexWrap: 'wrap',gap:'2rem',justifyContent:'center'}} className="flex items-center  justify-center text-yellow-500 ">
     
       {players.map(player => <div className="" key={player.id}>
        <Image src={player.imgUrl} alt={player.name} width={300} height={300} />
        <div style={{marginTop: '1rem', justifyContent: 'space-between'}} className="flex ">
            <h3>{player.name}  ({player.role})</h3>
            <h3>{player.shirtNo}</h3>
        </div>

       </div>)}
    </div>
    </>
  
  )
}

export default PlayerX1
