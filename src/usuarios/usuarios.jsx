    import { useEffect, useState } from "react";

    export default function UserPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch("http://34.213.100.50:3000/api/usuarios");
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
        };
        
        fetchData();
    }, []);

    return (
        <div className="p-4 max-w-lg mx-auto border rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4">Lista de Usuarios</h1>
        {users.length > 0 ? (
            <table className="min-w-full border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Nombre</th>
                <th className="border border-gray-300 p-2">Apellido</th>
                <th className="border border-gray-300 p-2">Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                <tr key={index} className="border border-gray-300">
                    <td className="border border-gray-300 p-2">{user.name}</td>
                    <td className="border border-gray-300 p-2">{user.last_name}</td>
                    <td className="border border-gray-300 p-2">{user.email}</td>
                </tr>
                ))}
            </tbody>
            </table>
        ) : (
            <p>Cargando...</p>
        )}
        </div>
    );
    }
