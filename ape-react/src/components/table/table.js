import { useMemo } from 'react';
import { useTable } from 'react-table';
import VansJson from './vans.json';
import Columns from './columns';
import './table.css'

const TablaVans = () => {

    //con ésto evitamos que se recalcule muchos calculos con cada render
    const columns = useMemo(() =>  Columns, [])
    const data = useMemo(() => VansJson, [])

    const tableInstance = useTable({
        columns,
        data
    })

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow 
    } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                            
                        </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    );
};

export default TablaVans;