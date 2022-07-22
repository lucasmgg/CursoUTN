import '../styles/Registrate.css'

const Registrate = (props) => {
    return (
<body>
    <div>
    <div class="signupFrm">
    <form action="" class="form">
      <h1 class="title">Registrate</h1>

      <div class="inputContainer">
        <input type="text" class="input" placeholder=""/>
        <label for="" class="label">Email</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder=""/>
        <label for="" class="label">Username</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder=""/>
        <label for="" class="label">Password</label>
      </div>

      <div class="inputContainer">
        <input type="text" class="input" placeholder=""/>
        <label for="" class="label">Confirm Password</label>
      </div>

      <input type="submit" class="submitBtn" value="Sign up"/>
    </form>
  </div>

        
    </div>
</body> 
    );
}

export default Registrate;