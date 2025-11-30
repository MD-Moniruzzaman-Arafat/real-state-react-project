import { useState } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';

export default function Login() {
  const { loginUser } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
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
      const res = await loginUser(formData.email, formData.password);
      if (res.user) {
        navigate('/');
      }
    } catch (error) {
      console.error('Error logging in user:', error);
    }
    console.log('Form Data Submitted:', formData);
    // Here you can add logic to handle login, e.g., call an API
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content w-6xl flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
          >
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
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
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
