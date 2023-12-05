import UpdateUser from "@/app/components/UpdateUser";

const getUserById = async(id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/user/${id}`);

    if(!response.ok) {
      throw new Error('failed to update user...');
      console.log("user not updatedd..");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Update({params}) {
 const  { id } = params;
 const { user } = await getUserById(id);
 const { name, age, city } = user;
 
 return(
  <>
    <UpdateUser id={id} name={name} age={age} city={city}/>
  </>
 )
}


