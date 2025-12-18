const Register = () => {
    return (
        <form>
            <input name="username" placeholder="Username" />
            <input name="firstname" placeholder="First Name" />
            <input name="lastname" placeholder="Last Name" />
            <input name="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit">Register</button>
        </form>
    );
}