import { Component } from "@angular/core";


@Component ({
    selector: 'login',
    template: `
    <div class="login-wrapper">
        <img width="100px" src="/favicon.ico" alt="Logo">
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
            <button id="signup-button">Log in</button>
            <label id="login-span">Already have an acount? <a href="">Log in</a></label>
        </div>
    </div>
    <div>

    </div>
    `,
    styleUrl: './login.css',
})

export class SignUp {

}