import { useEffect, useState } from "react";

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
        <div className="p-4 max-w-md mx-auto border rounded-lg shadow-md">
            <h1 className="text-xl font-bold">Información de los Usuarios</h1>
            {users.length > 0 ? (
                <div className="mt-4">
                    {users.map((user, index) => (
                        <div key={index} className="mb-4">
                            <p><strong>Nombre:</strong> {user.name}</p>
                            <p><strong>Apellido:</strong> {user.last_name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}
