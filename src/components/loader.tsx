import { useSelector } from 'react-redux'

export default function Loader () {

  const isLoading = useSelector(state => state.loader.isLoading)

  return (
    isLoading === true && (
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center z-50">
        <h1 className="text-center text-black">Loading..</h1>
      </div>
    )
  )
}