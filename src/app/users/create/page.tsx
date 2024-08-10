import CreateUserForm from "@/component/CreateUserForm";

// src/app/user/create/page.tsx
export default function CreateUser() {

   
    // Form to create a new user
    return (
        <div className="bg-white text-black">
            <h1>Create New User</h1>
            <br />
            <CreateUserForm />

        </div>
    )

}
