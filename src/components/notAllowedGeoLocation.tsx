import {useSelector} from "react-redux";

export default function NotAllowedGeoLocation() {

  const isGeoLocationAllowed = useSelector(state => state.auth.isGeoLocationAllowed)

  return (
    !isGeoLocationAllowed && (
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center z-50">
        <h1 className="text-center text-black">turn on your location and restart the app.</h1>
      </div>
    )
  )
}