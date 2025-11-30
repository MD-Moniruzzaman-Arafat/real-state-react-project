import { updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';

export default function Register() {
  const { createUser, signInWithGoogle } = useAuth();
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
  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithGoogle();
      console.log(res);
      navigate('/');
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content w-6xl flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
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
            </form>
            <button
              onClick={handleGoogleLogin}
              className="btn mx-6 mb-5 bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
