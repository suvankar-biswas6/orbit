const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex mt-3'>
              <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
					<span className='label-text font-bold'>Gender:</span>
			</label>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Male</span>
					<input type='checkbox' className='checkbox border-white' 
					checked={selectedGender === "male"}
					onChange={() => onCheckboxChange("male")}
					/>
				</label>
			</div>
          
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""} `}>
					<span className='label-text'>Female</span>
					<input type='checkbox' className='checkbox border-white'
					checked={selectedGender === "female"}
					onChange={() => onCheckboxChange("female")}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;