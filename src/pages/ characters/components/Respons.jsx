// import {IsLoading} from "../../../components/IsLoading"

export const Respons = ({data=[],isLoading}) => {
  return (
    <>
        {
            isLoading?
            <h1>hello</h1>
            :<Cards data={data}/>
        }
    </>
  )
}
