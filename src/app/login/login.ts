import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


@Component ({
    selector: 'login',
    template: `
    <div class="login-wrapper">
        <a routerLink="/"><img width="100px" src="/favicon.ico" alt="Logo"></a>
        <div class="welcome-wrapper">
            <span>Welcome Back!</span>
            <h2>Log in</h2>
        </div>
        <div class="input-wrapper">
            <label>Email</label>
            <input type="email">
            <div class="password-wrapper">
                <label>Password</label>
                <a href="">Forgot Password?</a>
            </div>
            <input type="password">
            <button id="login-button">Log in</button>
            <label id="signup-span">Don't have an account? <a routerLink="/auth/signup">Sign Up</a></label>
        </div>
    </div>
    <div>

    </div>
    `,
    styleUrl: './login.css',
    imports: [RouterLink],
})

export class Login {

}