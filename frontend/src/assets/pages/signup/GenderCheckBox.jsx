const GenderCheckbox = () => {
	return (
		<div className='flex mt-3'>
              <label className={`label gap-2 cursor-pointer`}>
					<span className='label-text font-bold'>Gender:</span>
			</label>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Male</span>
					<input type='checkbox' className='checkbox border-white' />
				</label>
			</div>
          
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Female</span>
					<input type='checkbox' className='checkbox border-white' />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;