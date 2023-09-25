
interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const Container = ({ children, title }: Props) => {
  return (
    <div className="bg-violet-500 p-4 border shadow rounded-md">
      {title && <h2 className="text-xl pb-2 text-white">{title}</h2>}
      {children}
      </div>
  )
}

export default Container