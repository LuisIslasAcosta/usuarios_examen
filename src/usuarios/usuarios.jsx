import { useEffect, useState } from "react";
import '../style.css';

export default function UserPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Simulando una API con un JSON local
        const fetchData = async () => {
            const data = [
                { name: "Luis", last_name: "Islas", email: "luis@gmail.com" },
                { name: "Ana", last_name: "Pérez", email: "ana@gmail.com" },
                { name: "Carlos", last_name: "Gómez", email: "carlos@gmail.com" }
            ];
            setUsers(data);
        };
        
        fetchData();
    }, []);

    return (
        <div className="p-4 max-w-4xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6 text-center">Información de los Usuarios</h1>
            {users.length > 0 ? (
                <table className="w-full table-auto text-sm text-left border-separate border-spacing-0 rounded-lg overflow-hidden">
                    <thead className="bg-teal-600 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left">Nombre</th>
                            <th className="px-6 py-3 text-left">Apellido</th>
                            <th className="px-6 py-3 text-left">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
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
                <p className="text-center">Cargando...</p>
            )}
        </div>
    );
}
