import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import Logo from "../../../media/logo1.png";
import profile from "../../../media/default_profile.png";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectUser } from "../../../redux/slices/authSlice";
import { HiOutlineLogout } from "react-icons/hi";
import { TbLogin2 } from "react-icons/tb";
import UserAvatar from "../../../components/profilePic/UserAvatar";

const Header = () => {
	const [hambergerOn, setHambergerOn] = useState(true);
	const dispatch = useDispatch();
	const { isAuthenticated, user } = useSelector(selectUser);
	const logout = () => {
		dispatch(logoutUser());
	};

	return (
		<header id='header'>
			<Link className='logoContainer' to={"/"}>
				<img src={Logo} alt='logiclords.dev' />
				<h1 className='nunito-8'>
					Logiclords<span className='nunito-4'>.dev</span>
				</h1>
			</Link>

			<ul
				// className="linksContainer"
				className={
					hambergerOn ? "linksContainer" : "linksContainer hambergerOn"
				}
			>
				<div className='profileContainerMobile'>
					<Link to='/profile/:uid'>
						{/* find it in global components */}
						<UserAvatar user={user} />
					</Link>
				</div>

				<Link to='/' className='currentLink'>
					<li>Home</li>
				</Link>
				<Link to='/courses'>
					<li>Courses</li>
				</Link>
				<Link to='/projects'>
					<li>Projects</li>
				</Link>
				<Link to='/leaderboard'>
					<li> Leader Board</li>
				</Link>

				<div className='authContainer'>
					{isAuthenticated ? (
						<button className='btn' onClick={logout}>
							<HiOutlineLogout /> Logout
						</button>
					) : (
						<Link to='/login'>
							<button className='btn'>
								{" "}
								<TbLogin2 />
								Login
							</button>
						</Link>
					)}

					<div className='profileContainer'>
						<Link to='/profile/:uid'>
							{/* Sani loves component that are reUseable and easy to use 😝 find it in global components */}
							<UserAvatar user={user} />
						</Link>
					</div>
				</div>
			</ul>
			<div className='hamberger' onClick={() => setHambergerOn(!hambergerOn)}>
				{hambergerOn ? (
					<IoMenu className='icon' />
				) : (
					<FaXmark className='icon' />
				)}
			</div>
		</header>
	);
};

export default Header;
