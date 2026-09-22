import ProfileCard from "./Component/ProfileCard";
import Button from "./Component/Button";


function App() {
  return (

     <div>

            <h1>Button Component</h1>

            <Button color="blue" size="large">
                Submit
            </Button>

            <Button color="green" size="medium">
                Login
            </Button>

            <Button color="red" size="small">
                Delete
            </Button>

        </div>

    /* <div>
      <h1>Profile Cards</h1>

      <ProfileCard
        name="Joel"
        age={25}
        role="Developer"
      >
        <p>Likes React and JavaScript.</p>
      </ProfileCard>

      <ProfileCard
        name="Sarath"
        age={23}
        role="Designer"
      >
        <p>Loves UI design and photography.</p>
      </ProfileCard>

      <ProfileCard
        name="Darwin"
        age={25}
        role="Manager"
      >
        <p>Enjoys teamwork and project management.</p>
      </ProfileCard>

    </div> */

    
  );
}

export default App;
