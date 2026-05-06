import { Component } from "@angular/core";


@Component ({
    selector: 'login',
    template: `
    <div class="login-wrapper">
        <img src="" alt="Logo">
        <div class="welcome-wrapper">
            <span>Welcome Back!</span>
            <h2>Log in</h2>
        </div>
        <div class="input-wrapper">
            <span>Email</span>
            <input type="text">
            <div class="password-wrapper">
                <span>Password</span>
                <a href="">Forgot Password?</a>
            </div>
            <input type="text">
            <button id="login-button">Log in</button>
            <span id="signup-span">Don't have an account? <a href="">Sign Up</a></span>
        </div>
    </div>
    <div>

    </div>
    `,
    styleUrl: './login.css',
})

export class Login {

}