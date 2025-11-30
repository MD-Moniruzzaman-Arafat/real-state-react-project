import { updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';

export default function Register() {
  const { createUser } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoURL: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUser(formData.email, formData.password);
      if (res.user) {
        await updateProfile(res.user, {
          displayName: formData.name,
          photoURL: formData.photoURL,
        });
        navigate('/login');
        console.log(res.user);
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
    console.log('Form Data Submitted:', formData);
    // Here you can add logic to handle registration, e.g., call an API
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content w-6xl flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
          >
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">PhotoURL</label>
                <input
                  onChange={handleChange}
                  value={formData.photoURL}
                  name="photoURL"
                  type="text"
                  className="input"
                  placeholder="PhotoURL"
                />
                <label className="label">Password</label>
                <input
                  onChange={handleChange}
                  value={formData.password}
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
