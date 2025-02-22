import { useEffect, useState } from "react";
import '../style.css';

export default function UserPage() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://3.147.62.131/');
                if (!response.ok) {
                    console.error(`Error: ${response.status} - ${response.statusText}`);
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error al obtener los usuarios:", error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 max-w-4xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6 text-center">Información de los Usuarios</h1>

            <input
                type="text"
                placeholder="Buscar por nombre, apellido o correo..."
                value={searchTerm}
                onChange={handleSearch}
                className="mb-6 p-2 w-full rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />

            {filteredUsers.length > 0 ? (
                <table className="w-full table-auto text-sm text-left border-separate border-spacing-0 rounded-lg overflow-hidden">
                    <thead className="bg-teal-600 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left">Nombre</th>
                            <th className="px-6 py-3 text-left">Apellido</th>
                            <th className="px-6 py-3 text-left">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'} hover:bg-teal-700`}
                            >
                                <td className="px-6 py-4 border-b border-gray-600">{user.name}</td>
                                <td className="px-6 py-4 border-b border-gray-600">{user.last_name}</td>
                                <td className="px-6 py-4 border-b border-gray-600">{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center">No se encontraron usuarios...</p>
            )}
        </div>
    );
}
