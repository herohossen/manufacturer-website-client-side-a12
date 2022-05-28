import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const [userInfo, setUserInfo] = useState({});
  const {
    isLoading,
    error,
    data: info,
    refetch,
  } = useQuery('info', () =>
    fetch(`http://localhost:8888/userinfo`).then((res) => res.json())
  );

  useEffect(() => {
    setUserInfo(info);
  }, [info]);

  if (isLoading) {
    return <Loading></Loading>;
  }
  const formSubmit = (e) => {
    e.preventDefault();

    // user info
    const email = user?.email;
    const displayName = user?.displayName;
    const address = e.target.address.value;
    const education = e.target.education.value;
    const profile = e.target.profile.value;
    const phone = e.target.phone.value;

    const updateUser = {
      email,
      displayName,
      address,
      phone,
      profile,
      education,
    };
    console.log(updateUser);

    // setUserInfo(updateUser);
    fetch('http://localhost:8888/userinfo', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Success:', data);
        // refetch();
        if (data) {
          toast.success('Your profile is update successfully');
        }
        // setUserInfo(data);

        e.target.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 justify-items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-success">
              User Information
            </h1>
            <p className="py-1 text-xl font-semibold">
              User Name: {user?.displayName}
            </p>
            <p className="py-1 pb-5 text-xl font-semibold">
              User Email: {user?.email}
            </p>

            {userInfo?.education && (
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title ">
                  <h1 className="text-4xl font-bold text-success">
                    Updated Details{' '}
                    <span className="text-sm text-neutral">(Show/Hied)</span>
                  </h1>
                </div>
                <div className="collapse-content">
                  <p className="py-1 text-xl font-semibold">
                    Education: <b>{userInfo.education}</b>
                  </p>
                  <p className="py-1 text-xl">Location: {userInfo.location}</p>
                  <p className="py-1 text-xl font-semibold">
                    LinkedIn Profile: <b>{userInfo.profile}</b>
                  </p>
                  <p className="py-1 text-xl font-semibold">
                    Phone: <b>{userInfo.phone}</b> Unit
                  </p>
                </div>
              </div>
            )}

            {/* clopas end */}
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={formSubmit} className="form-control">
                <h1 className="text-center uppercase text-xl font-bold">
                  Update Your Information
                </h1>
                <label className="label">
                  <span className="label-text">Your Education</span>
                </label>
                <input
                  type="text"
                  name="education"
                  placeholder="CSE/MBA/HSC/SSC"
                  className="input input-bordered mb-3"
                  required
                />
                <label className="label">
                  <span className="label-text">Your Location</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Dhaka, Bangladesh"
                  className="input input-bordered mb-3"
                  required
                />

                <label className="label">
                  <span className="label-text">LinkedIn URL</span>
                </label>
                <input
                  type="text"
                  name="profile"
                  placeholder="LinkedIn"
                  className="input input-bordered mb-3"
                  required
                />

                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="input input-bordered mb-3"
                  required
                />
                <input
                  id="placeOrder"
                  className="btn btn-success"
                  type="submit"
                  value="Update"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
