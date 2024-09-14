import React from 'react'
import GenderCheckbox from './GenderCheckBox';

//import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> Orbit</span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							{/* <span className='text-base label-text'>Full Name</span> */}
						</label>
						<input type='text' placeholder='Full Name' className='w-full input input-bordered  h-10' />
					</div>

					<div>
						<label className='label p-2 '>
							{/* <span className='text-base label-text'>Username</span> */}
						</label>
						<input type='text' placeholder='username' className='w-full input input-bordered h-10' />
					</div>

					<div>
						<label className='label'>
							{/* <span className='text-base label-text'>Password</span> */}
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
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
						/>
					</div>

					<GenderCheckbox/>

					<div>
						<button className='mt-8 btn btn-block btn-sm border text-blue-500 font-bold'>Sign Up</button>
					</div>
					<a className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block' href='#'>
						Already have an account? Sign in
					</a>

				</form>
			</div>
		</div>
	);
};
export default SignUp;