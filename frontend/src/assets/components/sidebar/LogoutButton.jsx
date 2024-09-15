import { TbPower } from "react-icons/tb";
import useLogout from "../../../hooks/useLogout";


const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			{!loading ? (
				<TbPower className='mt-8 w-6 h-6 size-8 rounded-badge hover:bg-blue-600 hover:border-2 hover:border-blue-800 text-white cursor-pointer hover:animate-pulse' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
