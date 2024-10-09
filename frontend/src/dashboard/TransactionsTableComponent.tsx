import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const TransactionsTableComponent = () => {

  const data = [
    {
      'date': '1 Mar',
      'vendor': 'ica',
      'category': 'Food',
      'subcategory': 'Necessity',
      'total': '100',
    },
    {
      'date': '1 Mar',
      'vendor': 'ica',
      'category': 'Food',
      'subcategory': 'Necessity',
      'total': '100',
    },
    {
      'date': '1 Mar',
      'vendor': 'ica',
      'category': 'Food',
      'subcategory': 'Necessity',
      'total': '100'
    },
    {
      'date': '1 Mar',
      'vendor': 'ica',
      'category': 'Food',
      'subcategory': 'Necessity',
      'total': '100',
    },
    {
      'date': '1 Mar',
      'vendor': 'ica',
      'category': 'Food',
      'subcategory': 'Necessity',
      'total': '100',
    },
    {
      'date': '1 Mar',
      'vendor': 'ica',
      'category': 'Food',
      'subcategory': 'Necessity',
      'total': '100'
    },
    {
      'date': '1 Mar',
      'vendor': 'ica',
      'category': 'Food',
      'subcategory': 'Necessity',
      'total': '100',
    },
    {
      'date': '1 Mar',
      'vendor': 'ica',
      'category': 'Food',
      'subcategory': 'Necessity',
      'total': '100',
    },
    {
      'date': '1 Mar',
      'vendor': 'ica',
      'category': 'Food',
      'subcategory': 'Necessity',
      'total': '100'
    },
  
  ]
  return (
    <>
      <div className="w-full h-[355px] border-4 overflow-auto no-scrollbar border-[#09B96D] bg-[#09B96D] ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Datum</TableHead>
              <TableHead>Butik</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Underkategori</TableHead>
              <TableHead className="text-right">Kostnad</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

            {data.map((obj, index) => (
              <TableRow className="hover:bg-gray-100 transition-colors capitalize" key={index}>
                <TableCell>{obj.date}</TableCell>
                <TableCell>{obj.vendor}</TableCell>
                <TableCell>{obj.category}</TableCell>
                <TableCell>{obj.subcategory}</TableCell>
                <TableCell className="text-right">{obj.total} Kr</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>


      <br />

    </>
  )
}

export default TransactionsTableComponent