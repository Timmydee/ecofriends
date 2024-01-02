// 'use client'
// import { useState } from "react";


// export default function Forms() {
//   const[name, setName] = useState('')
//   const[email, setEmail] = useState('')
//   const[phone, setPhone] = useState('')
//   const[choice, setChoice] = useState('')

//   const handleSubmit = async(e) => {
//     e.preventDefault()

//     const form = {
//       name,
//       email,
//       phone,
//       choice
//     }

//     console.log(form)

//     const response = await fetch('api/submit', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(form)
//     })
  
//     if (response.ok) {
//       const content = await response.json();
//       alert(content.data.tableRange);
//       setName('');
//       setEmail('');
//       setPhone('');
//       setChoice('');
//        // Assuming setName is a function to reset the state
//     } else {
//       // Handle error if the response status is not OK (e.g., response.status !== 200)
//       console.error('Error in form submission');
//     }

    
//   }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24 text-black bg-blue-200">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Name</label>
//             <input className="w-full border" type="text" value={name} name="name" id="name" onChange={e => setName(e.target.value)} />
//           </div>
//           <div>
//             <label>Email</label>
//             <input className="w-full border" type="text" value={email} name="email" id="email" onChange={e => setEmail(e.target.value)}  />
//           </div>
//           <div>
//             <label>Phone</label>
//             <input className="w-full border" type="text" value={phone} name="phone" id="phone" onChange={e => setPhone(e.target.value)} />
//           </div>
//           <div>
//             <label>Choice</label>
//             <input className="w-full border" type="text" value={choice} name="choice" id="choice" onChange={e => setChoice(e.target.value)} />
//           </div>

//           <div>
//             <button>Submit</button>
            
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }
