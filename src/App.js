
import React, { useState } from 'react';

const Restaurant = () => {
 
  const [members, setMembers] = useState([
    { id: 1, name: 'Roshani Mahla', email: 'roshni@example.com',phone:'4442222245' ,Gender:'Female',date:'2026-04-22' },
    { id: 2, name: 'Jay Patel', email: 'jay.p@example.com',phone:'9090909090',Gender:'male',date:'2026-04-23'  },
    { id: 3, name: 'Priya patel',email:'priya@gmail.com',phone:'4545454545',Gender:'Female',date:'2026-04-25' }
  ]);

  const [formData, setFormData] = useState({ name: '', email: '', phone:'',Gender:'',Date:''});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMember = {
      id: members.length + 1,
      ...formData
    };
  
    setMembers([...members, newMember]);
    setFormData({ name: '', email: '', phone:'',Gender:'',Date:'' });
  };

  return (
    <div> 
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Restaurant Registration</h2>
      
      {/* Registration Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <input 
          type="text" name="name" placeholder="Full Name" 
          value={formData.name} onChange={handleChange} required 
          style={{ marginRight: '10px', padding: '8px' }} 
        />
        <input 
          type="email" name="email" placeholder="Email" 
          value={formData.email} onChange={handleChange} required 
          style={{ marginRight: '10px', padding: '8px' }} 
        />

         <input 
          type="text" name="phone" placeholder="Phone" 
          value={formData.phone} onChange={handleChange} required 
          style={{ marginRight: '10px', padding: '8px' }} 
        />

        
         <input 
          type="Date" name="date" placeholder="date" 
          value={formData.date} onChange={handleChange} required 
          style={{ marginRight: '10px', padding: '8px' }} 
        />
          
        <select name="Gender" value={formData.Gender} onChange={handleChange} style={{ marginRight: '10px', padding: '8px' }}>
          <option value="Basic">Male</option>
          <option value="Premium">Female</option>
        </select>
        
             

        <button type="submit" style={{ padding: '8px 15px', cursor: 'pointer', backgroundColor: '#28a745', color: 'white', border: 'none' }}>
          Add Member
        </button>
      </form>

      {/* Data Table */}
      <h3>Registration List (Data Set)</h3>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Booking Date</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.Gender}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>{member.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Restaurant;
