import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';



  
bootstrapApplication(AppComponent, {
    providers: [
      provideAuth0({
        domain: 'dev-w30d7adhhugwwlnj.us.auth0.com',
        clientId: '8nAmrUmgUC6FFy2tfiMsRqGFzhbdP6IW',
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      }),
    ]
  });
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));