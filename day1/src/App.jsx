import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 justify-center p-6">
  
      <h2 className="text-4xl mb-10 text-white  ">  Reusable Profile Card Component with Props</h2>

      <div className="flex gap-6 flex-wrap justify-center">
        <ProfileCard
          name="Aman Verma"
          role="Frontend Developer"
          image="https://images.unsplash.com/photo-1646579219100-06ce3ae6302b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1wbG95ZWV8ZW58MHx8MHx8fDA%3D"
        />
        <ProfileCard
          name="Priya "
          role="UI/UX Designer"
          image="https://images.unsplash.com/photo-1752361421429-da1a23f7af70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltcGxveWVlfGVufDB8fDB8fHww"


        />
        <ProfileCard
          name="Rahul Singh"
          role="Backend Developer"

          image="https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGltcGxveWVlfGVufDB8fDB8fHww"


        />
      </div>
    </div>
  );
}

export default App;
