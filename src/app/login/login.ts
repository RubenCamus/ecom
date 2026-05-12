import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


@Component ({
    selector: 'login',
    template: `
    <div class="screen-wrapper">
        <form action="">
            <div class="login-wrapper">
                <a routerLink="/"><img width="100px" src="/favicon.ico" alt="Logo"></a>
                <div class="welcome-wrapper">
                    <h2>Create an account</h2>
                </div>
                <div class="input-wrapper">
                    <label for="email">Email</label>
                    <input type="email" name="email" required>
\
                    <label for="psw">Password</label>
                    <input type="password" name="psw" required>
                    <div class="button-wrapper">
                        <button id="login-button">Log in</button>
                    </div>
                    <label id="signup-span">Don't have an account? <a routerLink="/auth/signup">Sign Up</a></label>
                </div>
            </div>
        </form>
        <div>
            <img id="background-image" src="/login-bg.jpg" alt="background">
        </div>
    </div>
    `,
    styleUrl: './login.css',
    imports: [RouterLink],
})

export class Login {

}