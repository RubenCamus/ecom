import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


@Component ({
    selector: 'login',
    template: `
    <div class="login-wrapper">
        <a routerLink="''"><img width="100px" src="/favicon.ico" alt="Logo"></a>
        <div class="welcome-wrapper">
            <span>Welcome!</span>
            <h2>Sign up</h2>
        </div>
        <div class="input-wrapper">
            <label>Email</label>
            <input type="email">
            <label>Confirm email</label>
            <input type="email">
            <div class="password-wrapper">
                <label>Password</label>
            </div>
            <input type="password">
            <label >Confirm password</label>
            <input type="password">
            <button id="signup-button">Sign up</button>
            <label id="login-span">Already have an acount? <a routerLink="/auth/login">Log in</a></label>
        </div>
    </div>
    <div>

    </div>
    `,
    styleUrl: './login.css',
    imports: [RouterLink],
})

export class SignUp {

}