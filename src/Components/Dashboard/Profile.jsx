import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BiEditAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Profile = () => {
    const [loadProfile, setLoadProfile] = useState([]);
    const [user] = useAuthState(auth);
    
    // useEffect(() => {

    //     const run = async () => {
    //         await axios.get(` https://manufacturer-website-87c0c.web.app/myprofile/${user?.email}`)
    //             .then(function (res) {
    //             setLoadProfile(res.data)
    //         })

    //     }
    //     run()
    // }, [loadProfile, setLoadProfile])
    return (
        <div className='lg:my-12 card shadow-xl mt-5 mx-10'>
            <div className='flex navbar'>
                    <div className='m-5 ml-14'>
                        <h2 className='text-3xl font-semibold  text-purple-500'>My profile</h2>
                    </div>
                    <div className='ml-24 text-3xl mt-5 navbar-end'>
                        <Link to='myprofile/loadprofile'><BiEditAlt /></Link>
                    </div>
                </div>
                <hr />
            <div className="card lg:card-side bg-base-100 mb-5 mx-5">
                <figure>
                <div className="avatar placeholder m-10">
                        <div className="w-40 h-40 mt-5 rounded-full">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </div>
                    </figure>
                <div className="card-body">
                <div>
                        <h2 className='text-pink-400 font-bold'>Email:<span className='text-black ml-5'>{user?.email}</span></h2>
                        <br />
                        <h2 className='text-pink-400 font-bold'> Name: <span className='text-black ml-5'> {loadProfile.name}</span> </h2>
                        <br />
                        <h2 className='text-pink-400 font-bold'>Phone Number:<span >{loadProfile.phoneNumber}</span></h2>
                        <br />
                        <h2><span className='text-pink-400 font-bold'>Education:</span> {loadProfile.education}</h2>
                    </div>
                </div>
            </div>      
            </div>
    );
}

export default Profile;
