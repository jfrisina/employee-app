import React from 'react'
import EmployeeListItem from './EmployeeListItem'

function EmployeeList() {
    const employees = [
        { id: 1, name: 'James King', position: 'President and CEO', imgUrl: 'path' },
        { id: 2, name: 'Julie Taylor', position: 'VP of Marketing', imgUrl: 'path' },
        { id: 3, name: 'Eugene Lee', position: 'CFO', imgUrl: 'path' },
        { id: 4, name: 'John Williams', position: 'VP of Engineering', imgUrl: 'path' },
        { id: 5, name: 'Ray Moore', position: 'VP of Sales', imgUrl: 'path' },
        { id: 6, name: 'Paul Jones', position: 'QA Manager', imgUrl: 'path' }
    ];
  return (
    <div>
    {employees.map(employee => (
        <EmployeeListItem
        key={employee.id}
        imageUrl={employee.imgUrl}
        name={employee.name}
        position={employee.position}
        />
    ))}
</div>
    );
}

export default EmployeeList