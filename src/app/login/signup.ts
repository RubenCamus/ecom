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

                    <label for="psw-repeat">Confirm Password</label>
                    <input type="password" name="psw-repeat" required>
                    <p>By creating an account you agree to our <a href="">Terms & Privacy</a></p>
                    <div class="button-wrapper">
                        <button id="signup-button">Sign Up</button>
                    </div>
                    <label id="login-span">Already have an account? <a routerLink="/auth/login">Log in</a></label>
                </div>
            </div>
        </form>
        <img id="background-image" src="/login-bg.jpg" alt="background">
    </div>
    `,
    styleUrl: './login.css',
    imports: [RouterLink],
})

export class SignUp {

}