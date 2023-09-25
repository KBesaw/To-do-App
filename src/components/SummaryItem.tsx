
interface Props {
  itemName: string;
  itemValue: number;
}

const SummaryItem = ({ itemName, itemValue }: Props) => {
  return (
    <article className="bg-indigo-50 w-36 rounded-sm flex justify-between p-2">
      <h3 className="font-bold">{itemName}</h3>
      <span className="bg-indigo-900 text-white px-2 rounded-sm">
        {itemValue}
      </span>
    </article>
  )
}

export default SummaryItem