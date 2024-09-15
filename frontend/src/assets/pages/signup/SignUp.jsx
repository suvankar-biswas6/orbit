import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import useSignup from '../../../hooks/useSignup';


//import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {

	const [inputs, setInputs] = useState({
		fullName: "",
		userName: "",
		password: "",
		confirmedPassword: "",
		gender: "",
	});

	const {loading, signup} = useSignup()

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
		// console.log(inputs);
		
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> Orbit</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							{/* <span className='text-base label-text'>Full Name</span> */}
						</label>
						<input type='text' placeholder='Full Name' className='w-full input input-bordered  h-10' 
						value={inputs.fullName}
						onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							{/* <span className='text-base label-text'>Username</span> */}
						</label>
						<input type='text' placeholder='username' className='w-full input input-bordered h-10' 
							value={inputs.userName}
							onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							{/* <span className='text-base label-text'>Password</span> */}
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							{/* <span className='text-base label-text'>Confirm Password</span> */}
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputs.confirmedPassword}
							onChange={(e) => setInputs({ ...inputs, confirmedPassword: e.target.value })}

						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

					<div>
						<button className='mt-8 btn btn-block btn-sm border-none text-blue-400 font-bold text-lg hover:bg-blue-600 hover:text-white' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
							</button>
					</div>
					Already have an account?
					<Link to={"/login"} className='hover:underline hover:text-blue-600 mt-4 inline-block ml-2'>
						Log in
					</Link>

				</form>
			</div>
		</div>
	);
};
export default SignUp;