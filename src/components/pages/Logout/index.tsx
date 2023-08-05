import useUser from "lib/user/useUser";


export const Logout = () => {
  const { logout } = useUser();
  const onClick = () => {
    console.log('CLICKED')
    logout();
  }

  return (
    <button onClick={onClick}>Logout</button>
  )
}