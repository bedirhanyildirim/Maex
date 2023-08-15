import {FiSmile} from "react-icons/fi";

export default function UserCard({user}) {

  const getLogoClasses = () => {
    return user.gender === 'male' ? "flex items-center justify-center rounded-full border border-blue-500 border-4" : "flex items-center justify-center rounded-full border border-red-500 border-4"
  }

  const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();

    const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    const isBirthdayPassed = (
      currentDate.getMonth() > birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate())
    );

    return isBirthdayPassed ? yearsDiff : yearsDiff - 1
  }

  const timeAgo = (timestamp) => {
    if (timestamp === undefined) return ''
    const currentDate = new Date();
    const inputDate = new Date(timestamp.seconds * 1000);

    const elapsedMilliseconds = currentDate - inputDate;
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

    if (elapsedSeconds < 60) {
      return `${elapsedSeconds} seconds ago`;
    } else if (elapsedSeconds < 3600) {
      const elapsedMinutes = Math.floor(elapsedSeconds / 60);
      return `${elapsedMinutes} minutes ago`;
    } else if (elapsedSeconds < 86400) {
      const elapsedHours = Math.floor(elapsedSeconds / 3600);
      return `${elapsedHours} hours ago`;
    } else {
      const elapsedDays = Math.floor(elapsedSeconds / 86400);
      return `${elapsedDays} days ago`;
    }
  }

  return (
    <div className="w-full flex items-center gap-2 mt-4 border-b pb-4">
      <div className={getLogoClasses()}>
        <FiSmile size={32} />
      </div>
      <div className="w-full flex items-center">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <span className="font-semibold">{user.name}</span>,
            <span>{calculateAge(user.birthdate)}</span>
          </div>
          <div className="text-xs capitalize text-gray-500">
            Looking for: {user.lookingFor}
          </div>
        </div>
        <div className="ml-auto text-xs">
          {timeAgo(user.lastLogin)}
        </div>
      </div>
    </div>
  )
}