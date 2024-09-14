import React from 'react'

// STARTER CODE FOR THIS FILE
const Login = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-blue-500 font-bold'> Orbit</span>
				</h1>

				<form>
					<div>
						{/* <label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label> */}
						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10 mt-5' />
					</div>

					<div>
						{/* <label className='label'>
							<span className='text-base label-text'>Password</span>
						</label> */}
						<input
							type='password'
							placeholder='Enter Password'
							className='mt-5 w-full input input-bordered h-10'
						/>
					<div>
						<button className='btn btn-block btn-sm mt-6 text-blue-500 font-bold'>Login</button>
					</div>

					</div>
					<a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-4 inline-block'>
						{"Don't"} have an account? Sign Up
					</a>

				</form>
			</div>
		</div>
	);
};
export default Login;